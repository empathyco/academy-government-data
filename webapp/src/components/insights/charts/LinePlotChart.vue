<template>
  <figure class="highcharts-figure">
    <div class="line-graph" id="line-graph"></div>
  </figure>
</template>

<script>
import Vue from "vue";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more";
import { colorList } from "@/utils/data/GlobalVariables";
import { seriesConstructor } from "@/utils/DataConstructor";
import {
  legendVal,
  xAxisVal,
  yAxisVal,
} from "@/utils/methods/HighchartOptConfig";

highchartsMore(Highcharts);

export default Vue.extend({
  name: "LinePlotChart",
  data() {
    return {
      selected: true,
      categories: [],
      processedseries: [],
      colors: colorList,
      counter: 0,
    };
  },
  props: {
    series: seriesConstructor,
  },
  methods: {
    createChart() {
      Highcharts.chart("line-graph", {
        chart: {
          type: "line",
          backgroundColor: "transparent",
        },
        title: "",
        subtitle: {
          text: "Source: WorldClimate.com",
        },
        legend: legendVal(false),
        xAxis: xAxisVal(this.categories),
        yAxis: yAxisVal(),
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
            enableMouseTracking: true,
          },
        },
        series: this.processedseries,
      });
    },
    getColor() {
      if (this.counter === this.colors.length) {
        this.counter = 0;
      }
      return this.colors[this.counter++];
    },
    preprocess() {
      this.categories = this.series.content[0].data.map(
        (current) => current.name
      );
      this.processedseries = this.series.content.map((current) => ({
        name: current.name,
        color: this.getColor(),
        data: current.data.map((currentElem) => currentElem.value),
      }));
    },
  },
  mounted() {
    this.preprocess();
    this.createChart();
  },
});
</script>

<style scoped>
.highcharts-figure {
  width: 100%;
}
</style>
