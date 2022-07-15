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
        <SearchBoxComponent placeholder="Busca aquí tus filtros" />
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
        <button
          title="Filtros"
          class="boton-filtro"
          @click="changeFilterSelected"
          ref="filterButton"
        >
          <FiltersStyled></FiltersStyled>
        </button>
      </div>
    </template>
    <template #sub-header>
      <PredictiveLayer @filterApplied="manageFilter($event)" />
      <div class="filter-container">
        <FiltersList
          :class="`filters-list`"
          :filters="getFiltersSelected()"
          v-slot="{ filter }"
        >
          <TagFilter :filter="filter" :color="getColorMap(filter.type)" />
        </FiltersList>
      </div>
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
      <div v-if="filtersMenuSelected">
        <FiltersComponent :filters="filters" />
      </div>
      <div v-else>
        <DisplayCharts
          :filtersSelected="getFiltersSelected()"
          @changedFilters="modifyFilters($event)"
        ></DisplayCharts>
      </div>
    </template>

    <!--
    <template #scroll-to-top>
      <p>scroll to top</p>
    </template>
    -->
  </MultiColumnMaxWidthLayout>
</template>

<script>
import { MultiColumnMaxWidthLayout } from "@empathyco/x-components";
import SearchBoxComponent from "@/components/search/SearchBoxComponent";
import FiltersComponent from "@/components/search/FiltersComponent";
import DisplayCharts from "@/components/insights/DisplayCharts";
import FiltersStyled from "@/components/icons/FiltersStyled";
import PredictiveLayer from "@/components/search/empathize/PredictiveLayer";
import { FiltersList, SimpleFilter } from "@empathyco/x-components/js";
import { filtersSample, relatedTagsSample } from "@/utils/data/SampleData";
import store from "@/store";
import TagFilter from "@/components/tags/TagFilter";

export default {
  name: "DiscoveryView",
  data() {
    return {
      filtersMenuSelected: false,
      relatedTags: relatedTagsSample,
      filters: filtersSample,
    };
  },
  components: {
    TagFilter,
    PredictiveLayer,
    FiltersStyled,
    DisplayCharts,
    FiltersComponent,
    SearchBoxComponent,
    MultiColumnMaxWidthLayout,
    FiltersList,
  },
  methods: {
    getFiltersSelected() {
      return store.state.filtersSelected;
    },
    manageFilter(filterToManage) {
      store.dispatch("modifySelectedFilters", filterToManage);
    },
    changeFilterSelected() {
      this.filtersMenuSelected = !this.filtersMenuSelected;
      this.filtersMenuSelected
        ? (this.$refs.filterButton.className += " boton-selected")
        : (this.$refs.filterButton.className =
            this.$refs.filterButton.className.split(" ")[0]);
    },
    async getColorMap(type) {
      return await store.dispatch("getColor", type);
    },
    modifyFilters(newFilters) {
      this.filtersSelected = newFilters;
    },
  },
  async beforeMount() {
    await store.dispatch("initializeDictionary", this.filters);
  },
};
</script>

<style scoped lang="scss">
.x-list__item--expand {
  display: flex;
  justify-content: center;
}
.botones-filtros {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
}
.filter-icon {
  height: 24px;
  width: 24px;
  stroke: #243d48;
}
.boton-filtro {
  background-color: var(--background-colour);
  color: #243d48;
  border: solid 3px #243d48;
  border-radius: 35px;
  padding: 8px 12px;
}
.boton-filtro:hover > * {
  stroke: var(--font-selected-link);
}
.boton-filtro:hover {
  color: var(--font-selected-link);
  border-color: var(--font-selected-link);
}
.boton-selected > * {
  stroke: var(--font-selected-link);
}
.boton-selected {
  color: var(--font-selected-link);
  border-color: var(--font-selected-link);
}

h1 {
  margin-top: 0;
}
</style>
