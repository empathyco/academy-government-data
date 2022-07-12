import Vue from "vue";
import Vuex from "vuex";
import { colorList } from "@/utils/data/GlobalVariables";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    colorMap: [] as { type: string; color: string }[],
  },
  mutations: {
    addPair(state, payload) {
      state.colorMap = [...state.colorMap, payload];
    },
  },
  actions: {
    getNextColor(state, size) {
      size = size % colorList.length;
      return colorList[size];
    },
    async getColorFromDictionary(context, type) {
      const dictionarySize = context.state.colorMap.length;
      if (!context.state.colorMap.some((pair) => pair.type === type)) {
        context.commit("addPair", {
          color: await context.dispatch("getNextColor", dictionarySize),
          type: type,
        });
      }
      return context.state.colorMap.filter((pair) => pair.type === type)[0]
        .color;
    },
  },
  modules: {},
});
