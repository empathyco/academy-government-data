<template>
  <figure class="highcharts-figure">
    <div class="bar-chart" id="bar-chart"></div>
  </figure>
</template>
<script>
import Vue from "vue";
import Highcharts from "highcharts";
//import highchartsMore from "highcharts/highcharts-more";
//highchartsMore(Highcharts);

export default Vue.extend({
  data() {
    return {
      selected: true,
      categories: [],
      processedseries: [],
      colors: [
        "#D44A6F",
        "#53B9C9",
        "#FDCB5B",
        "#8B6391",
        "#80C0A1",
        "#E67962",
        "#0086B2",
      ],
      counter: 0,
    };
  },
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
      Highcharts.chart("bar-chart", {
        chart: {
          type: "column",
        },
        xAxis: {
          categories: this.categories,
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: "",
        },
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
        title: {
          text: "",
          style: {
            color: "#243D48",
            fontFamily: "Avenir, Helvetica, Arial, sans-serif",
            fontSize: "24px",
          },
        },
        legend: {
          enabled: false,
        },
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
  min-width: 320px;
  max-width: 1000px;
  margin: 1em auto;
}
</style>
