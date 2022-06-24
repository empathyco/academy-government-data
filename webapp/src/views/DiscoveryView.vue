<template>
  <div>
    <h1>Explora</h1>
    <p>Aquí verás todo lo que necesites de las subvenciones</p>
    <BarChart :series="this.getData()" />
    <BubbleChart :series="this.getData()"></BubbleChart>
    <WordCloud :series="this.getDataSingleSerie()"></WordCloud>
    <PieChart :series="this.getDataSingleSerie()"></PieChart>
    <LinePlotChart :series="this.getData()"></LinePlotChart>
  </div>
</template>

<script>
import BubbleChart from "@/components/insights/BubbleChart";
import WordCloud from "@/components/insights/WordCloud";
import PieChart from "@/components/insights/PieChart";
import BarChart from "@/components/insights/BarChart";
import LinePlotChart from "@/components/insights/LinePlotChart";
import { severalSeries, singleSerie } from "@/utils/SampleData";

export default {
  name: "DiscoveryView",
  components: { LinePlotChart, BubbleChart, WordCloud, PieChart, BarChart },
  methods: {
    getDataSingleSerie() {
      return singleSerie;
    },
    getData() {
      return severalSeries;
    },
  },
};
</script>

<style scoped></style>
