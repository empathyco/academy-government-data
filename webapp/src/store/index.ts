import Vue from "vue";
import Vuex from "vuex";
import { colorList } from "@/utils/data/GlobalVariables";
import { newColor } from "@/utils/methods/ColorGenerator";
import { filterType } from "@/models/DataType";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Map that has an object couple with a type and the color assigned to it
    colorMap: [] as { type: string; color: string }[],
    // Array of filters that are active during the search
    filtersSelected: [] as filterType[],
    searchFilters: [] as filterType[],
    discoveryFilters: [] as filterType[],
  },
  getters: {
    /**
     * Returns filters selected
     * @param state
     */
    filtersSelected(state) {
      return state.filtersSelected;
    },
  },
  mutations: {
    /**
     * Adds a type-color pair to the colorMap array
     * @param state of the store
     * @param payload object with type and color
     */
    addPair(state, payload) {
      state.colorMap = [...state.colorMap, payload];
    },
    /**
     * Adds a filter to the filters selected
     * @param state of the store
     * @param payload object that represents the filter
     */
    addFilterSelected(state, payload) {
      state.filtersSelected = [...state.filtersSelected, payload];
    },
    /**
     * Removes a filter from the filters selected
     * @param state of the store
     * @param payload object that represents the filter
     */
    removeFilterSelected(state, payload) {
      state.filtersSelected = state.filtersSelected.filter(
        (filter) => filter.label !== payload.label
      );
    },
    /**
     * Empties the filters selected array
     * @param state
     */
    clearFiltersSelected(state) {
      state.filtersSelected = [];
    },
  },
  actions: {
    /**
     * Given a filter if it is already in the filtersSelected list it removes it. If not, it adds it to the list
     * @param context
     * @param filter
     */
    async modifySelectedFilters(context, filter) {
      if (await context.dispatch("isFilterSelected", filter)) {
        context.commit("removeFilterSelected", filter);
      } else {
        context.commit("addFilterSelected", filter);
      }
    },
    /**
     * Returns true if there is a filter in the selectedFilters list, false otherwise
     * @param context
     * @param filter
     */
    isFilterSelected(context, filter) {
      return context.state.filtersSelected.some(
        (filterSelected) => filterSelected.label === filter.label
      );
    },
    /**
     * Given a type it returns the corresponding color and, if there is any exception, returns the default empathy color
     * @param context
     * @param type
     */
    getColor(context, type) {
      try {
        return context.state.colorMap.filter((pair) => pair.type === type)[0]
          .color;
      } catch (error) {
        return colorList[0];
      }
    },
    /**
     * Returns a new color based on the current size of the map.
     * @param context
     * @param dictionarySize
     */
    getNextColor(context, dictionarySize) {
      return newColor(dictionarySize);
    },
    /**
     * Iterates the array of family filters passed and, given the title
     * (which will be the type for each filter), it adds it to the color map.
     * @param context
     * @param filters
     */
    async initializeDictionary(context, filters) {
      for (const familyFilter of filters) {
        await context.dispatch(
          "getColorFromDictionary",
          familyFilter.title.toLowerCase()
        );
      }
    },
    /**
     * Adds the corresponding color from the dictionary colorMap given the type
     * @param context
     * @param type
     */
    async getColorFromDictionary(context, type) {
      const dictionarySize = context.state.colorMap.length;
      if (!context.state.colorMap.some((pair) => pair.type === type)) {
        await context.commit("addPair", {
          color: await context.dispatch("getNextColor", dictionarySize),
          type: type,
        });
      }
    },
  },
  modules: {},
});
