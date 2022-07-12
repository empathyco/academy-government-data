import Vue from "vue";
import Vuex from "vuex";
import { colorList } from "@/utils/data/GlobalVariables";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    colorMap: [] as { type: string; color: string }[],
  },
  getters: {
    getNextColor(state, size) {
      size = size % colorList.length;
      return colorList[size];
    },
  },
  mutations: {
    addPair(state, payload) {
      state.colorMap = [...state.colorMap, payload.pair];
    },
  },
  actions: {
    getColorFromDictionary(context, type) {
      const dictionarySize = context.state.colorMap.length;
      if (!this.state.colorMap.some((pair) => pair.type === type)) {
        context.commit("addPair", {
          color: context.getters.getNextColor(dictionarySize),
          type: type,
        });
      }
      return this.state.colorMap.filter((pair) => pair.type === type)[0].color;
    },
  },
  modules: {},
});
