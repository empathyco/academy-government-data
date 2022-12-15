<template>
  <!-- TODO: when the API is working properly, use a Result component to envelop this -->
  <BaseGrid :items="listOfGraphics" :columns="3">
    <template #default="{ item }">
      <DiscoverCard
        :item="item"
        :filtersSelected="filtersSelected"
      ></DiscoverCard>
    </template>
  </BaseGrid>
</template>

<script>
import { BaseGrid } from "@empathyco/x-components";
import {
  singleSerie,
  severalSeries,
  relatedTagsSample,
} from "@/utils/data/SampleData";
import DiscoverCard from "@/components/insights/DiscoverCard";

export default {
  name: "DisplayCharts",
  data() {
    return {
      /*
       * List of graphics to be processed
       */
      listOfGraphics: [
        {
          title: "Ejemplo de gráfica de barras",
          data: singleSerie,
          modelName: "barchart",
          tags: relatedTagsSample,
        },
        {
          title: "Ejemplo de gráfica de línea",
          data: severalSeries,
          modelName: "lineplotchart",
          tags: relatedTagsSample,
        },
        {
          title: "Ejemplo de gráfica de tarta",
          data: singleSerie,
          modelName: "piechart",
          tags: relatedTagsSample,
        },
        {
          title: "Ejemplo de gráfica de nube de palabras",
          data: singleSerie,
          modelName: "wordcloud",
          tags: relatedTagsSample,
        },
        {
          title: "Ejemplo de gráfica de nube de palabras",
          data: severalSeries,
          modelName: "bubblechart",
          tags: relatedTagsSample,
        },
      ],
    };
  },
  props: {
    filtersSelected: {
      content: Array({
        label: String,
        modelName: String,
        selected: Boolean,
        id: String,
        value: String,
        facetId: String,
        type: String,
        totalResults: Number,
      }),
    },
  },
  components: {
    DiscoverCard,
    BaseGrid,
  },
};
</script>

<style scoped></style>
