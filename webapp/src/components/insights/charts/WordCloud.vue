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
import { colorList } from "@/utils/data/GlobalVariables";
import { seriesConstructor } from "@/utils/DataConstructor";
import { legendVal, quickTooltipVal } from "@/utils/methods/HighchartOptConfig";

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
      Highcharts.chart("word-cloud", {
        colors: colorList,
        title: "",
        legend: legendVal(false),
        tooltip: quickTooltipVal(),
        plotOptions: {
          series: {},
        },
        series: data,
        chart: {
          backgroundColor: "transparent",
        },
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
  width: 100%;
}
</style>
