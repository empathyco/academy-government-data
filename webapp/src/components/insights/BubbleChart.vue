<template>
  <figure class="highcharts-figure">
    <div class="bubble" id="bubble"></div>
  </figure>
</template>

<script>
import Vue from "vue";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more";
import { colorList, empathyBlack } from "@/utils/GlobalVariables";
import { seriesConstructor } from "@/utils/DataConstructor";

highchartsMore(Highcharts);

export default Vue.extend({
  data() {
    return {
      selected: true,
      colors: colorList,
      counter: 0,
    };
  },
  props: {
    series: seriesConstructor,
  },
  methods: {
    createChart() {
      const data = this.preprocess();
      Highcharts.chart("bubble", {
        chart: {
          type: "packedbubble",
          height: "90%",
          backgroundColor: "transparent",
          color: "white",
        },
        title: {
          text: "",
          style: {
            color: empathyBlack,
            fontFamily: "Avenir, Helvetica, Arial, sans-serif",
            fontSize: "24px",
          },
        },
        legend: {
          enabled: false,
        },
        tooltip: {
          headerFormat: `<span style="font-size: 16px; font-weight: bolder ; color:${empathyBlack};">{point.key}</span><br/>`,
          style: {
            fontSize: 16,
          },
        },
        plotOptions: {
          packedbubble: {
            minSize: "45%",
            maxSize: "150%",
            layoutAlgorithm: {
              splitSeries: false,
              gravitationalConstant: 0.02,
            },
            dataLabels: {
              enabled: true,
              format: "{point.name}",
              style: {
                color: empathyBlack,
                textOutline: "none",
                fontWeight: "normal",
                fontFamily: "Avenir, Helvetica, Arial, sans-serif",
                fontSize: "20px",
              },
            },
          },
        },
        series: data,
      });
    },
    getColor() {
      if (this.counter === this.colors.length) {
        this.counter = 0;
      }
      return this.colors[this.counter++];
    },
    preprocess() {
      return this.series.content.reduce((totalSeries, serie) => {
        return [
          ...totalSeries,
          {
            name: serie.name, // Coffee series
            color: this.getColor(),
            data: serie.data,
          },
        ];
      }, []);
    },
  },
  mounted() {
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
