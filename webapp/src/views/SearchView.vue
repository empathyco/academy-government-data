<template>
  <MultiColumnMaxWidthLayout>
    <template #header-middle>
      <!-- Search header with the title and the search box -->
      <h1>Busca</h1>
      <div
        class="x-list x-list--vertical x-list--gap-05 x-list--align-stretch x-list__item--expand"
      >
        <SearchBoxComponent placeholder="Comienza a buscar subvenciones" />
      </div>
    </template>
    <template #sub-header>
      <!-- Predictive layer for the suggestions and the filters selected TODO: extract component for the same as in discovery view -->
      <PredictiveLayer />
      <div class="filter-container">
        <SelectedFiltersList :class="`filters-list`" v-slot="{ filter }">
          <TagFilter :filter="filter" />
        </SelectedFiltersList>
      </div>
      <!--
      <div class="related-tags">
        <SelectedFiltersList class="filter-list">
          <template #default="{ filter }">
            <SimpleFilter class="x-tag" :filter="filter" />
          </template>
        </SelectedFiltersList>
        <RelatedTags>
          <template #related-tag="{ relatedTag }">
            <div class="related-tag">
              <p id="tag-text">{{ relatedTag.tag }}</p>
              <CrossTinyStyled @click="removeTag(relatedTag.tag)" />
            </div>
          </template>
        </RelatedTags>
      </div>
      <PredictiveLayer></PredictiveLayer>-->
    </template>
    <template #main-body>
      <!-- Main body where the grant cards are displayed -->
      <div>
        <GrantCardGrid />
      </div>
    </template>
  </MultiColumnMaxWidthLayout>
</template>

<script>
import { MultiColumnMaxWidthLayout } from "@empathyco/x-components";

import SearchBoxComponent from "@/components/search/SearchBoxComponent";
import GrantCardGrid from "@/components/search/details/GrantCardGrid";

import { SelectedFiltersList } from "@empathyco/x-components/facets";
import TagFilter from "@/components/tags/TagFilter";
import PredictiveLayer from "@/components/search/empathize/PredictiveLayer";

export default {
  name: "SearchView",
  components: {
    MultiColumnMaxWidthLayout,
    SearchBoxComponent,
    GrantCardGrid,
    SelectedFiltersList,
    TagFilter,
    PredictiveLayer,
  },
  beforeMount() {
    this.$store.dispatch("initializeDictionary", [
      "regionImpacto",
      "organo",
      "departamento",
      "tipoBeneficiario",
    ]);
  },
};
</script>

<style scoped>
.x-list__item--expand {
  display: flex;
  justify-content: center;
}
h1 {
  margin-top: 0;
}
.filters-list {
  list-style-type: none;
}
</style>
