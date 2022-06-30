<template>
  <div class="discover-card">
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
  </div>
</template>

<script>
import BarChart from "@/components/insights/charts/BarChart";
import BubbleChart from "@/components/insights/charts/BubbleChart";
import LinePlotChart from "@/components/insights/charts/LinePlotChart";
import PieChart from "@/components/insights/charts/PieChart";
import WordCloud from "@/components/insights/charts/WordCloud";

export default {
  name: "DiscoverCard",
  components: {
    BarChart,
    BubbleChart,
    LinePlotChart,
    PieChart,
    WordCloud,
  },
  props: {
    item: { data: String, modelName: String },
  },
};
</script>

<style scoped>
.discover-card {
  border: solid 3px #243d48;
  border-radius: 30px;
  padding: 10px;
  margin: 10px;
  height: 450px;
}
</style>
