<template>
  <div class="discover-card">
    <CustomButton class="download-contents">
      <template v-slot:icon
        ><i class="material-symbols-outlined info"> download </i></template
      >
      <template v-slot:text><a>Descarga</a></template>
    </CustomButton>

    <div class="card-header">
      <p class="chart-title">
        {{ item.title }}
      </p>
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
    <!-- TODO: substitute this by a new component extracted from here and grant card -->
    <div class="filter-container">
      <FiltersList
        :class="`filters-list`"
        :filters="item.tags"
        v-slot="{ filter }"
      >
        <TagSelectionFilter :filter="filter" />
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
import TagSelectionFilter from "@/components/tags/TagSelectionFilter";
import CustomButton from "@/components/CustomButton";

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
    CustomButton,
  },
  props: ["item"],
  methods: {
    /**
     * Will call the API to download the document in .xml with the information
     */
    dowlowadContent() {
      console.log(this.item);
    },
  },
};
</script>

<style scoped>
.discover-card {
  background-color: var(--empathy-gray);
  border-radius: 30px;
  padding: 20px;
  margin: 10px;
  min-height: 600px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
}
.download-contents {
  cursor: pointer;
  align-self: flex-end;
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

.filters-list {
  margin: 10px;
}
</style>
