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
        data: current.data.map((currentElem) => currentElem.value),
      }));
      return this.series.content.reduce(
        (list, current) => [
          ...list,
          {
            type: "wordcloud",
            data: current.data.reduce((finalList, currentElement) => {
              return [
                ...finalList,
                { name: currentElement.name, weight: currentElement.value },
              ];
            }, []),
            name: "Ocurrences",
          },
        ],
        []
      );
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
