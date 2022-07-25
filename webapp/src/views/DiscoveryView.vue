<template>
  <MultiColumnMaxWidthLayout>
    <template #header-middle>
      <h1>Explora</h1>
      <div
        class="x-list x-list--vertical x-list--gap-05 x-list--align-stretch x-list__item--expand"
      >
        <!-- Search engine -->
        <SearchBoxComponent placeholder="Busca aquí tus filtros" />
      </div>
    </template>
    <template #header-start>
      <!-- Button for switching from discovery view to filters selection -->
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
      <!-- Place for the suggestions and related tags/filters TODO: extract component for the same as in search view -->
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

    <template #main-body>
      <!-- Place for the discover cards or the available filters -->
      <div v-if="filtersMenuSelected">
        <FiltersComponent :filters="filters" />
      </div>
      <div v-else>
        <DisplayCharts></DisplayCharts>
      </div>
    </template>
  </MultiColumnMaxWidthLayout>
</template>

<script>
import { MultiColumnMaxWidthLayout } from "@empathyco/x-components";
import SearchBoxComponent from "@/components/search/SearchBoxComponent";
import FiltersComponent from "@/components/search/FiltersComponent";
import DisplayCharts from "@/components/insights/DisplayCharts";
import FiltersStyled from "@/components/icons/FiltersStyled";
import PredictiveLayer from "@/components/search/empathize/PredictiveLayer";
import { FiltersList } from "@empathyco/x-components/js";
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
    /**
     * Filters selected from the store
     * @returns {*}
     */
    getFiltersSelected() {
      return store.getters.filtersSelected;
    },
    /**
     * Modifies the filtersSelected list in the store given a filter
     * @param filterToManage
     */
    manageFilter(filterToManage) {
      store.dispatch("modifySelectedFilters", filterToManage);
    },
    /**
     * Changes the style of the button to switch between views of discovery cards and filters
     */
    changeFilterSelected() {
      this.filtersMenuSelected = !this.filtersMenuSelected;
      this.filtersMenuSelected
        ? (this.$refs.filterButton.className += " boton-selected")
        : (this.$refs.filterButton.className =
            this.$refs.filterButton.className.split(" ")[0]);
    },
    /**
     * Given a type returns a promise with the color assinged in the color map of the store
     * @param type
     * @returns {Promise<any>}
     */
    async getColorMap(type) {
      return await store.dispatch("getColor", type);
    },
  },
  async beforeMount() {
    // In order to not collide with the search store, it cleans it up everytime the view is loaded (is improvable)
    store.commit("clearFiltersSelected");
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
