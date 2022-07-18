import Vue from "vue";
import Vuex from "vuex";
import { nextIndex } from "@/utils/methods/NextIndex";
import { colorList } from "@/utils/data/GlobalVariables";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    colorMap: [] as { type: string; color: string }[],
    filtersSelected: [] as {
      label: string;
      modelName: string;
      selected: boolean;
      id: string;
      value: string;
      facetId: string;
      type: string;
      totalResults: number;
    }[],
    generator: nextIndex(),
  },
  getters: {
    getMap(state) {
      return state.colorMap;
    },
  },
  mutations: {
    addPair(state, payload) {
      state.colorMap = [...state.colorMap, payload];
    },
    addFilterSelected(state, payload) {
      state.filtersSelected = [...state.filtersSelected, payload];
    },
    removeFilterSelected(state, payload) {
      state.filtersSelected = state.filtersSelected.filter(
        (filter) => filter.label !== payload.label
      );
    },
    clearFiltersSelected(state) {
      state.filtersSelected = [];
    },
  },
  actions: {
    async modifySelectedFilters(context, filter) {
      if (await context.dispatch("isFilterSelected", filter)) {
        context.commit("removeFilterSelected", filter);
      } else {
        context.commit("addFilterSelected", filter);
      }
    },
    isFilterSelected(context, filter) {
      return context.state.filtersSelected.some(
        (filterSelected) => filterSelected.label === filter.label
      );
    },
    getColor(context, type) {
      try {
        return context.state.colorMap.filter((pair) => pair.type === type)[0]
          .color;
      } catch (error) {
        return colorList[0];
      }
    },
    getNextColor(context) {
      return context.state.generator.next().value;
    },
    async initializeDictionary(context, filters) {
      for (const familyFilter of filters) {
        await context.dispatch(
          "getColorFromDictionary",
          familyFilter.title.toLowerCase()
        );
      }
    },
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
