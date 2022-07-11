<template>
  <BaseGrid :items="listOfGraphics" :columns="3">
    <template #default="{ item }">
      <DiscoverCard
        :item="item"
        :changedFilters="sendChangedFilters($event)"
      ></DiscoverCard>
    </template>
  </BaseGrid>
</template>

<script>
import { BaseGrid } from "@empathyco/x-components";
import { singleSerie, severalSeries } from "@/utils/data/SampleData";
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
          tags: [
            {
              label: "Asturias",
              modelName: "SimpleFilter",
              selected: false,
              id: "asturias",
              value: "asturias",
              facetId: "asturias",
              type: "provincia",
              totalResults: 1,
            },
            {
              label: "Industria",
              modelName: "SimpleFilter",
              selected: false,
              id: "industria",
              value: "industria",
              facetId: "industria",
              type: "sector",
              totalResults: 1,
            },
            {
              label: "2019",
              modelName: "SimpleFilter",
              selected: false,
              id: "2019",
              value: "2019",
              facetId: "2019",
              type: "año",
              totalResults: 1,
            },
          ],
        },

        {
          title: "Ejemplo de gráfica de línea",
          data: severalSeries,
          modelName: "lineplotchart",
          tags: [
            {
              label: "Asturias",
              modelName: "SimpleFilter",
              selected: false,
              id: "asturias",
              value: "asturias",
              facetId: "asturias",
              type: "provincia",
              totalResults: 1,
            },
            {
              label: "Industria",
              modelName: "SimpleFilter",
              selected: false,
              id: "industria",
              value: "industria",
              facetId: "industria",
              type: "sector",
              totalResults: 1,
            },
            {
              label: "2019",
              modelName: "SimpleFilter",
              selected: false,
              id: "2019",
              value: "2019",
              facetId: "2019",
              type: "año",
              totalResults: 1,
            },
          ],
        },
        {
          title: "Ejemplo de gráfica de tarta",
          data: singleSerie,
          modelName: "piechart",
          tags: [
            {
              label: "Asturias",
              modelName: "SimpleFilter",
              selected: false,
              id: "asturias",
              value: "asturias",
              facetId: "asturias",
              type: "provincia",
              totalResults: 1,
            },
            {
              label: "Industria",
              modelName: "SimpleFilter",
              selected: false,
              id: "industria",
              value: "industria",
              facetId: "industria",
              type: "sector",
              totalResults: 1,
            },
            {
              label: "2019",
              modelName: "SimpleFilter",
              selected: false,
              id: "2019",
              value: "2019",
              facetId: "2019",
              type: "año",
              totalResults: 1,
            },
          ],
        },
        {
          title: "Ejemplo de gráfica de nube de palabras",
          data: singleSerie,
          modelName: "wordcloud",
          tags: [
            {
              label: "Asturias",
              modelName: "SimpleFilter",
              selected: false,
              id: "asturias",
              value: "asturias",
              facetId: "asturias",
              type: "provincia",
              totalResults: 1,
            },
            {
              label: "Industria",
              modelName: "SimpleFilter",
              selected: false,
              id: "industria",
              value: "industria",
              facetId: "industria",
              type: "sector",
              totalResults: 1,
            },
            {
              label: "2019",
              modelName: "SimpleFilter",
              selected: false,
              id: "2019",
              value: "2019",
              facetId: "2019",
              type: "año",
              totalResults: 1,
            },
          ],
        },
      ],
    };
  },
  components: {
    DiscoverCard,
    BaseGrid,
  },
  methods: {
    sendChangedFilters(newFilters) {
      this.$emit("changedFilters", newFilters);
    },
  },
};
</script>

<style scoped></style>
