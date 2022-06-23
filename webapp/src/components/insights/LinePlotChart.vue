<template>
  <figure class="highcharts-figure">
    <div class="line-graph" id="line-graph"></div>
  </figure>
</template>

<script>
import Vue from "vue";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more";

highchartsMore(Highcharts);

export default Vue.extend({
  name: "LinePlotChart",
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
      Highcharts.chart("line-graph", {
        chart: {
          type: "line",
        },
        title: {
          text: "Monthly Average Temperature",
        },
        subtitle: {
          text: "Source: WorldClimate.com",
        },
        xAxis: {
          categories: this.categories,
        },
        yAxis: {
          title: {
            text: "",
          },
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
            enableMouseTracking: false,
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
    this.createChart();
  },
});
</script>

<style scoped></style>
