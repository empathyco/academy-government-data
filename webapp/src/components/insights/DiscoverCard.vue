<template>
  <div class="discover-card">
    <div class="card-header">
      <p class="chart-title">
        {{ item.title }}
      </p>
      <button
        id="dowload-button"
        @click="dowlowadContent"
        class="download-contents"
      >
        <i class="material-symbols-outlined info"> download </i>
      </button>
    </div>
    <BarChart
      v-if="item.modelName === 'barchart'"
      :series="item.data"
    ></BarChart>
    <BubbleChart
      v-else-if="item.modelName === 'bubblechart'"
      :series="item.data"
    ></BubbleChart>
    <LinePlotChart
      v-else-if="item.modelName === 'lineplotchart'"
      :series="item.data"
    ></LinePlotChart>
    <PieChart
      v-else-if="item.modelName === 'piechart'"
      :series="item.data"
    ></PieChart>
    <WordCloud
      v-else-if="item.modelName === 'wordcloud'"
      :series="item.data"
    ></WordCloud>
    <div class="filter-container">
      <FiltersList
        :class="`filters-list`"
        :filters="item.tags"
        v-slot="{ filter }"
      >
        <TagSelectionFilter
          :filter="filter"
          :color="getColor(filter)"
          :isSelected="isFilterSelected(filter)"
        />
      </FiltersList>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/insights/charts/BarChart";
import BubbleChart from "@/components/insights/charts/BubbleChart";
import LinePlotChart from "@/components/insights/charts/LinePlotChart";
import PieChart from "@/components/insights/charts/PieChart";
import WordCloud from "@/components/insights/charts/WordCloud";
import { FiltersList } from "@empathyco/x-components/js";
import store from "@/store";
import TagSelectionFilter from "@/components/tags/TagSelectionFilter";

export default {
  name: "DiscoverCard",
  components: {
    BarChart,
    BubbleChart,
    LinePlotChart,
    PieChart,
    WordCloud,
    FiltersList,
    TagSelectionFilter,
  },
  props: ["item", "filtersSelected"],
  data() {
    return {
      colorMap: { content: [] },
    };
  },
  methods: {
    dowlowadContent() {
      console.log(this.item);
    },
    getColor(filter) {
      return store.dispatch("getColor", filter.type);
    },
    isFilterSelected(filter) {
      return store.dispatch("isFilterSelected", filter);
    },
  },
  mounted() {
    this.colorMap = this.$store.state.colorMap;
  },
};
</script>

<style scoped>
.discover-card {
  border: solid 3px #243d48;
  border-radius: 30px;
  padding: 20px;
  margin: 10px;
  height: 600px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
}
.download-contents {
  background-color: var(--background-colour);
  border: solid 1px var(--font-colour);
  color: var(--font-colour);
  border-radius: 30px;
  height: 40px;
  width: 50px;
  padding: 6px 8px;
}

.download-contents:hover {
  background-color: #d44a6f;
  border: solid 1px white;
  color: white;
}

.card-header {
  display: flex;
  justify-content: space-between;
}

.chart-title {
  font-size: 24px;
  font-weight: bold;
  max-width: 80%;
}
</style>
