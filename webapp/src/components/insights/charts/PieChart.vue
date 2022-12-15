<template>
  <figure class="highcharts-figure">
    <div class="pie" id="pie"></div>
  </figure>
</template>

<script>
import Vue from "vue";
import Highcharts from "highcharts";
import loadPie from "highcharts/modules/variable-pie";
import highchartsMore from "highcharts/highcharts-more";
import { colorList } from "@/utils/data/GlobalVariables";
import { seriesConstructor } from "@/utils/DataConstructor";
import { legendVal } from "@/utils/methods/HighchartOptConfig";

loadPie(Highcharts);
highchartsMore(Highcharts);

export default Vue.extend({
  name: "PieChart",
  props: {
    series: seriesConstructor,
  },
  methods: {
    createChart() {
      const data = this.preprocess();
      Highcharts.chart("pie", {
        colors: colorList,
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          backgroundColor: "transparent",
        },
        title: "",
        legend: legendVal(false),
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
            },
          },
        },
        series: data,
      });
    },
    preprocess() {
      return this.series.content.reduce(
        (list, current) => [
          ...list,
          {
            name: "Example", //Name of the unit of measurement
            colorByPoint: true,
            data: current.data.reduce((finalList, currentElement) => {
              return [
                ...finalList,
                { name: currentElement.name, y: currentElement.value },
              ];
            }, []),
          },
        ],
        []
      );
    },
  },
  mounted() {
    this.createChart();
  },
});
</script>

<style scoped>
.highcharts-figure {
  width: 100%;
}
</style>
