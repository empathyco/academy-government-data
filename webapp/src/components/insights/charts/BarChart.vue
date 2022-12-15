<template>
  <figure class="highcharts-figure">
    <div class="bar-chart" id="bar-chart"></div>
  </figure>
</template>
<script>
import Vue from "vue";
import Highcharts from "highcharts";
import { colorList } from "@/utils/data/GlobalVariables";
import { seriesConstructor } from "@/utils/DataConstructor";
import {
  legendVal,
  xAxisVal,
  yAxisVal,
} from "@/utils/methods/HighchartOptConfig";

export default Vue.extend({
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
      Highcharts.chart("bar-chart", {
        chart: {
          type: "column",
          backgroundColor: "transparent",
        },
        xAxis: xAxisVal(this.categories),
        yAxis: yAxisVal(),
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        title: "",
        legend: legendVal(false),
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
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
  margin: 1em auto;
  width: 100%;
}
</style>
