import Vue from "vue";
import Vuex from "vuex";
import { colorList } from "@/utils/data/GlobalVariables";
import { newColor } from "@/utils/methods/ColorGenerator";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Map that has an object couple with a type and the color assigned to it
    colorMap: [] as { type: string; color: string }[],
  },
  getters: {
    getColorMap(state) {
      return state.colorMap;
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
    emptyColorMap(state) {
      state.colorMap = [];
    },
  },
  actions: {
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
          familyFilter.charAt(0).toLowerCase() + familyFilter.slice(1)
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
