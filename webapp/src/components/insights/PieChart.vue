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

loadPie(Highcharts);
highchartsMore(Highcharts);

export default Vue.extend({
  name: "PieChart",
  props: {
    series: {
      content: Array({
        name: String,
        data: Array({
          name: String,
          value: Number,
        }),
      }),
    },
  },
  methods: {
    createChart() {
      const data = this.preprocess();
      Highcharts.chart("pie", {
        colors: [
          "#8B6391",
          "#53B9C9",
          "#D44A6F",
          "#FDCB5B",
          "#80C0A1",
          "#E67962",
          "#0086B2",
        ],
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
        },
        title: {
          text: "", //Here would go the title
        },
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
            name: "", //To be determined
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

<style scoped></style>
