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
        <SearchBoxComponent placeholder="Busca aquí tus filtros"/>
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
      <div class="related-tags">
        <div
          v-bind:key="relatedTag.tag"
          v-for="relatedTag in relatedTags"
          @click="removeTag(relatedTag.tag)"
        >
          <RelatedTag class="related-tag" :relatedTag="relatedTag">
            <p id="tag-text">{{ relatedTag.tag }}</p>
            <CrossTinyStyled />
          </RelatedTag>
        </div>
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
      <div v-if="filtersSelected">
        <FiltersComponent></FiltersComponent>
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
import { severalSeries, singleSerie } from "@/utils/SampleData";
import { MultiColumnMaxWidthLayout } from "@empathyco/x-components";
import SearchBoxComponent from "@/components/search/SearchBoxComponent";
import FiltersComponent from "@/components/search/FiltersComponent";
import DisplayCharts from "@/components/insights/DisplayCharts";
import { RelatedTag } from "@empathyco/x-components/related-tags";
import FiltersStyled from "@/components/icons/FiltersStyled";
import CrossTinyStyled from "@/components/icons/CrossTinyStyled";

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
    };
  },
  components: {
    FiltersStyled,
    DisplayCharts,
    FiltersComponent,
    SearchBoxComponent,
    MultiColumnMaxWidthLayout,
    RelatedTag,
    CrossTinyStyled,
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
h1 {
  margin-top: 80px;
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
.related-tag {
  background-color: var(--background-colour);
  color: #243d48;
  border: solid 3px #243d48;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin: 3px;
}
.related-tags {
  display: flex;
  justify-content: center;
  flex-flow: wrap;
}
#tag-text {
  margin: 5px;
}
</style>
