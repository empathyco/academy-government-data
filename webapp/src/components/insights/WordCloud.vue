<template>
  <figure class="highcharts-figure">
    <div class="word-cloud" id="word-cloud"></div>
  </figure>
</template>

<script>
import Vue from "vue";
import Highcharts from "highcharts";
import loadWordcloud from "highcharts/modules/wordcloud";
import highchartsMore from "highcharts/highcharts-more";
import { colorList, empathyBlack } from "@/utils/GlobalVariables";
import { seriesConstructor } from "@/utils/DataConstructor";
import { legendVal, titleVal } from "@/utils/HighchartOptConfig";

highchartsMore(Highcharts);
loadWordcloud(Highcharts);

export default Vue.extend({
  data() {
    return {
      selected: true,
      counter: 0,
    };
  },
  props: {
    series: seriesConstructor,
  },
  methods: {
    createChart() {
      const data = this.preprocess();
      console.log(data);
      Highcharts.chart("word-cloud", {
        colors: colorList,
        title: titleVal("Word cloud"),
        legend: legendVal(false),
        tooltip: {
          headerFormat: `<span style="font-size: 16px; font-weight: bolder ; color:${empathyBlack};">{point.key}</span><br/>`,
          style: {
            fontSize: 16,
          },
        },
        plotOptions: {
          series: {},
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
