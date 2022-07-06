<template>
  <BaseGrid :items="listOfGraphics" :columns="3">
    <template #default="{ item }">
      <DiscoverCard :item="item"></DiscoverCard>
    </template>
  </BaseGrid>
</template>

<script>
import { BaseGrid } from "@empathyco/x-components";
import { singleSerie, severalSeries } from "@/utils/SampleData";
import BarChart from "@/components/insights/charts/BarChart";
import BubbleChart from "@/components/insights/charts/BubbleChart";
import LinePlotChart from "@/components/insights/charts/LinePlotChart";
import PieChart from "@/components/insights/charts/PieChart";
import WordCloud from "@/components/insights/charts/WordCloud";
import DiscoverCard from "@/components/insights/DiscoverCard";

export default {
  name: "DisplayCharts",
  data() {
    return {
      listOfGraphics: [
        {
          title: "Ejemplo de gráfica de barras",
          data: severalSeries,
          modelName: "barchart",
        },
        {
          title: "Ejemplo de gráfico de burbujas",
          data: severalSeries,
          modelName: "bubblechart",
        },
        {
          title: "Ejemplo de gráfica de línea",
          data: severalSeries,
          modelName: "lineplotchart",
        },
        {
          title: "Ejemplo de gráfica de tarta",
          data: singleSerie,
          modelName: "piechart",
        },
        {
          title: "Ejemplo de gráfica de nube de palabras",
          data: singleSerie,
          modelName: "wordcloud",
        },
      ],
    };
  },
  components: {
    DiscoverCard,
    BaseGrid,
  },
};
</script>

<style scoped></style>
