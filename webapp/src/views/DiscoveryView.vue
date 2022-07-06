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
      <PredictiveLayer />
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
          />
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
          :colorMap="colorMap"
          @selected-filter="manageFilter($event)"
        />
      </div>
      <div v-else>
        <DisplayCharts></DisplayCharts>
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
      relatedTags: [
        { isCurated: false, tag: "tag1" },
        { isCurated: false, tag: "tag2" },
        { isCurated: false, tag: "tag3" },
        { isCurated: false, tag: "tag4" },
        { isCurated: false, tag: "tag5" },
        { isCurated: false, tag: "tag6" },
        { isCurated: false, tag: "tag7" },
        { isCurated: false, tag: "tag8" },
        { isCurated: false, tag: "tag9" },
      ],
      filters: {
        content: [
          {
            title: "Provincias",
            content: [
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
                label: "Andalucía",
                modelName: "SimpleFilter",
                selected: false,
                id: "andalucía",
                value: "andalucía",
                facetId: "andalucía",
                type: "provincia",
                totalResults: 1,
              },
              {
                label: "Castilla y León",
                modelName: "SimpleFilter",
                selected: false,
                id: "castilla",
                value: "castilla",
                facetId: "castilla",
                type: "provincia",
                totalResults: 1,
              },
              {
                label: "Galicia",
                modelName: "SimpleFilter",
                selected: false,
                id: "galicia",
                value: "galicia",
                facetId: "galicia",
                type: "provincia",
                totalResults: 1,
              },
              {
                label: "País Vasco",
                modelName: "SimpleFilter",
                selected: false,
                id: "vasco",
                value: "vasco",
                facetId: "vasco",
                type: "provincia",
                totalResults: 1,
              },
              {
                label: "La Rioja",
                modelName: "SimpleFilter",
                selected: false,
                id: "rioja",
                value: "rioja",
                facetId: "rioja",
                type: "provincia",
                totalResults: 1,
              },
              {
                label: "Santander",
                modelName: "SimpleFilter",
                selected: false,
                id: "santander",
                value: "santander",
                facetId: "santander",
                type: "provincia",
                totalResults: 1,
              },
              {
                label: "Extremadura",
                modelName: "SimpleFilter",
                selected: false,
                id: "extremadura",
                value: "extremadura",
                facetId: "extremadura",
                type: "provincia",
                totalResults: 1,
              },
              {
                label: "Cataluña",
                modelName: "SimpleFilter",
                selected: false,
                id: "cataluña",
                value: "cataluña",
                facetId: "cataluña",
                type: "provincia",
                totalResults: 1,
              },
              {
                label: "Valencia",
                modelName: "SimpleFilter",
                selected: false,
                id: "valencia",
                value: "valencia",
                facetId: "valencia",
                type: "provincia",
                totalResults: 1,
              },
              {
                label: "Islas Canarias",
                modelName: "SimpleFilter",
                selected: false,
                id: "canarias",
                value: "canarias",
                facetId: "canarias",
                type: "provincia",
                totalResults: 1,
              },
              {
                label: "Islas Baleares",
                modelName: "SimpleFilter",
                selected: false,
                id: "baleares",
                value: "baleares",
                facetId: "baleares",
                type: "provincia",
                totalResults: 1,
              },
            ],
          },
          {
            title: "Sector",
            content: [
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
                label: "Agricultura",
                modelName: "SimpleFilter",
                selected: false,
                id: "agricultura",
                value: "agricultura",
                facetId: "agricultura",
                type: "sector",
                totalResults: 1,
              },
              {
                label: "Cultura",
                modelName: "SimpleFilter",
                selected: false,
                id: "cultura",
                value: "cultura",
                facetId: "cultura",
                type: "sector",
                totalResults: 1,
              },
              {
                label: "Hostelería",
                modelName: "SimpleFilter",
                selected: false,
                id: "hostelería",
                value: "hostelería",
                facetId: "hostelería",
                type: "sector",
                totalResults: 1,
              },
            ],
          },
          {
            title: "Año",
            content: [
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
              {
                label: "2020",
                modelName: "SimpleFilter",
                selected: false,
                id: "2020",
                value: "2020",
                facetId: "2020",
                type: "año",
                totalResults: 1,
              },
              {
                label: "2021",
                modelName: "SimpleFilter",
                selected: false,
                id: "2021",
                value: "2021",
                facetId: "2021",
                type: "año",
                totalResults: 1,
              },
              {
                label: "2022",
                modelName: "SimpleFilter",
                selected: false,
                id: "2022",
                value: "2022",
                facetId: "2022",
                type: "año",
                totalResults: 1,
              },
            ],
          },
          {
            title: "Periodo",
            content: [
              {
                label: "Primer trimestre",
                modelName: "SimpleFilter",
                selected: false,
                id: "primer",
                value: "primer",
                facetId: "primer",
                type: "periodo",
                totalResults: 1,
              },
              {
                label: "Segundo trimestre",
                modelName: "SimpleFilter",
                selected: false,
                id: "segundo",
                value: "segundo",
                facetId: "segundo",
                type: "periodo",
                totalResults: 1,
              },
              {
                label: "Tercer trimestre",
                modelName: "SimpleFilter",
                selected: false,
                id: "tercer",
                value: "tercer",
                facetId: "tercer",
                type: "periodo",
                totalResults: 1,
              },
            ],
          },
        ],
      },
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
  font-weight: bold;
  color: white;
  border: solid 1px white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin: 3px;
  padding: 5px;
}
</style>
