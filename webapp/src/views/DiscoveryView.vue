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
          :filters="filtersSelected"
          v-slot="{ filter }"
        >
          <SimpleFilter
            class="filter"
            :filter="filter"
            :style="`background-color:${getColorMap(filter.type)};`"
            @click.native="manageFilter(filter)"
          >
            <template #label="{ filter }">
              <div class="discovery-filter">
                <p id="filter-label">{{ filter.label }}</p>
                <CrossTinyStyled class="tiny-cross" />
              </div>
            </template>
          </SimpleFilter>
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
        <FiltersComponent
          :filters="filters"
          :filtersSelected="{ content: filtersSelected }"
          :colorMap="colorMap"
          @selected-filter="manageFilter($event)"
        />
      </div>
      <div v-else>
        <DisplayCharts :changedFilters="modifyFilters($event)"></DisplayCharts>
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
import { getColorFromDictionary } from "@/utils/methods/ColorMapper";
import { filtersSample, relatedTagsSample } from "@/utils/data/SampleData";
import CrossTinyStyled from "@/components/icons/CrossTinyStyled";

export default {
  name: "DiscoveryView",
  data() {
    return {
      filtersMenuSelected: false,
      filtersSelected: [
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
      ],
      colorMap: { content: [] },
      relatedTags: relatedTagsSample,
      filters: filtersSample,
    };
  },
  components: {
    PredictiveLayer,
    FiltersStyled,
    DisplayCharts,
    FiltersComponent,
    SearchBoxComponent,
    MultiColumnMaxWidthLayout,
    FiltersList,
    SimpleFilter,
    CrossTinyStyled,
  },
  methods: {
    removeTag(tagText) {
      console.log("removeTag");
      this.relatedTags = this.relatedTags.filter(
        (relatedTag) => relatedTag.tag !== tagText
      );
    },
    manageFilter(filterToManage) {
      if (
        this.filtersSelected.some((filter) => filter.id === filterToManage.id)
      ) {
        this.filtersSelected = this.filtersSelected.filter(
          (filter) => filter.id !== filterToManage.id
        );
      } else {
        this.filtersSelected = [...this.filtersSelected, filterToManage];
      }
    },
    changeFilterSelected() {
      this.filtersMenuSelected = !this.filtersMenuSelected;
      this.filtersMenuSelected
        ? (this.$refs.filterButton.className += " boton-selected")
        : (this.$refs.filterButton.className =
            this.$refs.filterButton.className.split(" ")[0]);
    },
    getColorMap(type) {
      return getColorFromDictionary(this.colorMap.content, type);
    },
    modifyFilters(newFilters) {
      this.filtersSelected = newFilters;
    },
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
.filters-list {
  display: flex;
  justify-content: center;
  flex-flow: wrap;
}
.filter {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: bold;
  color: white;
  border: solid 1px white;
  border-radius: 30px;
  margin: 3px;
}
.discovery-filter {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: -10px;
}
#filter-label {
  margin: 10px 10px;
}
.tiny-cross {
  stroke: white;
}
</style>
