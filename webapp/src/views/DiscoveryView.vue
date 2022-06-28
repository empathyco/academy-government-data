<template>
  <MultiColumnMaxWidthLayout>
    <!--
    <template #header-start>
      <h1>Start</h1>
    </template>
    -->
    <template #header-middle>
      <h1>Explora</h1>
      <div
        class="x-list x-list--vertical x-list--gap-05 x-list--align-stretch x-list__item--expand"
      >
        <SearchBoxComponent />
        <!--
        <LocationProvider location="predictive_layer">
          <RelatedTags
            v-if="!$x.isEmpathizeOpen && $x.relatedTags.length > 0"
          />
        </LocationProvider>
        -->
      </div>
    </template>
    <template #header-start>
      <div class="botones-filtros">
        <p>boton filtros??</p>
      </div>
    </template>
    <template #sub-header>
      <p>Aquí irían las tags??</p>
    </template>
    <!--
    <template #toolbar-body>
      <p>Aquí irían las tags??</p>
    </template>
    <template #toolbar-aside>
      <p>toolbar-aside</p>
    </template>
    <template #main-aside>
      <p>main aside</p>
    </template>
    -->

    <template #main-body>
      <p>Aquí iría todo lo que es el grid</p>
      <BarChart :series="getData()" />
      <BubbleChart :series="getData()"></BubbleChart>
      <WordCloud :series="getDataSingleSerie()"></WordCloud>
      <PieChart :series="getDataSingleSerie()"></PieChart>
      <LinePlotChart :series="getData()"></LinePlotChart>
    </template>

    <template #scroll-to-top>
      <p>scroll to top</p>
    </template>
  </MultiColumnMaxWidthLayout>
</template>

<script>
import BubbleChart from "@/components/insights/BubbleChart";
import WordCloud from "@/components/insights/WordCloud";
import PieChart from "@/components/insights/PieChart";
import BarChart from "@/components/insights/BarChart";
import LinePlotChart from "@/components/insights/LinePlotChart";
import { severalSeries, singleSerie } from "@/utils/SampleData";
import { MultiColumnMaxWidthLayout } from "@empathyco/x-components";
import SearchBoxComponent from "@/components/search/SearchBoxComponent";

export default {
  name: "DiscoveryView",
  components: {
    SearchBoxComponent,
    LinePlotChart,
    BubbleChart,
    WordCloud,
    PieChart,
    BarChart,
    MultiColumnMaxWidthLayout,
  },
  methods: {
    getDataSingleSerie() {
      return singleSerie;
    },
    getData() {
      return severalSeries;
    },
  },
};
</script>

<style scoped>
.x-list__item--expand {
  display: flex;
  justify-content: center;
}
h1 {
  margin-top: 80px;
}
.botones-filtros {
  display: flex;
  align-items: flex-end;
  height: 100%;
}
</style>
