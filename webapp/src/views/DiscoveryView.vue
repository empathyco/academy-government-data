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
      <div v-if="filtersSelected">
        <FiltersComponent :filters="filters"></FiltersComponent>
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
import { RelatedTag, RelatedTags } from "@empathyco/x-components/related-tags";
import FiltersStyled from "@/components/icons/FiltersStyled";
import CrossTinyStyled from "@/components/icons/CrossTinyStyled";
import PredictiveLayer from "@/components/search/empathize/PredictiveLayer";
import { SelectedFiltersList } from "@empathyco/x-components/facets";
import { QuerySuggestion, QuerySuggestions } from "@empathyco/x-components/js";

export default {
  name: "DiscoveryView",
  data() {
    return {
      filtersSelected: false,
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
                totalResults: 1,
              },
              {
                label: "Andalucía",
                modelName: "SimpleFilter",
                selected: false,
                id: "andalucía",
                value: "andalucía",
                facetId: "andalucía",
                totalResults: 1,
              },
              {
                label: "Castilla y León",
                modelName: "SimpleFilter",
                selected: false,
                id: "castilla",
                value: "castilla",
                facetId: "castilla",
                totalResults: 1,
              },
              {
                label: "Galicia",
                modelName: "SimpleFilter",
                selected: false,
                id: "galicia",
                value: "galicia",
                facetId: "galicia",
                totalResults: 1,
              },
              {
                label: "País Vasco",
                modelName: "SimpleFilter",
                selected: false,
                id: "vasco",
                value: "vasco",
                facetId: "vasco",
                totalResults: 1,
              },
              {
                label: "Asturias",
                modelName: "SimpleFilter",
                selected: false,
                id: "asturias",
                value: "asturias",
                facetId: "asturias",
                totalResults: 1,
              },
              {
                label: "Andalucía",
                modelName: "SimpleFilter",
                selected: false,
                id: "andalucía",
                value: "andalucía",
                facetId: "andalucía",
                totalResults: 1,
              },
              {
                label: "Castilla y León",
                modelName: "SimpleFilter",
                selected: false,
                id: "castilla",
                value: "castilla",
                facetId: "castilla",
                totalResults: 1,
              },
              {
                label: "Galicia",
                modelName: "SimpleFilter",
                selected: false,
                id: "galicia",
                value: "galicia",
                facetId: "galicia",
                totalResults: 1,
              },
              {
                label: "País Vasco",
                modelName: "SimpleFilter",
                selected: false,
                id: "vasco",
                value: "vasco",
                facetId: "vasco",
                totalResults: 1,
              },
              {
                label: "Galicia",
                modelName: "SimpleFilter",
                selected: false,
                id: "galicia",
                value: "galicia",
                facetId: "galicia",
                totalResults: 1,
              },
              {
                label: "País Vasco",
                modelName: "SimpleFilter",
                selected: false,
                id: "vasco",
                value: "vasco",
                facetId: "vasco",
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
                totalResults: 1,
              },
              {
                label: "Agricultura",
                modelName: "SimpleFilter",
                selected: false,
                id: "agricultura",
                value: "agricultura",
                facetId: "agricultura",
                totalResults: 1,
              },
              {
                label: "Cultura",
                modelName: "SimpleFilter",
                selected: false,
                id: "cultura",
                value: "cultura",
                facetId: "cultura",
                totalResults: 1,
              },
              {
                label: "Hostelería",
                modelName: "SimpleFilter",
                selected: false,
                id: "hostelería",
                value: "hostelería",
                facetId: "hostelería",
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
                totalResults: 1,
              },
              {
                label: "2020",
                modelName: "SimpleFilter",
                selected: false,
                id: "2020",
                value: "2020",
                facetId: "2020",
                totalResults: 1,
              },
              {
                label: "2021",
                modelName: "SimpleFilter",
                selected: false,
                id: "2021",
                value: "2021",
                facetId: "2021",
                totalResults: 1,
              },
              {
                label: "2022",
                modelName: "SimpleFilter",
                selected: false,
                id: "2022",
                value: "2022",
                facetId: "2022",
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
                totalResults: 1,
              },
              {
                label: "Segundo trimestre",
                modelName: "SimpleFilter",
                selected: false,
                id: "segundo",
                value: "segundo",
                facetId: "segundo",
                totalResults: 1,
              },
              {
                label: "Tercer trimestre",
                modelName: "SimpleFilter",
                selected: false,
                id: "tercer",
                value: "tercer",
                facetId: "tercer",
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
  },
  methods: {
    removeTag(tagText) {
      console.log("removeTag");
      this.relatedTags = this.relatedTags.filter(
        (relatedTag) => relatedTag.tag !== tagText
      );
    },
    changeFilterSelected() {
      this.filtersSelected = !this.filtersSelected;
      this.filtersSelected
        ? (this.$refs.filterButton.className += " boton-selected")
        : (this.$refs.filterButton.className =
            this.$refs.filterButton.className.split(" ")[0]);
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
</style>
