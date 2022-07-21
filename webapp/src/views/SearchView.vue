<template>
  <MultiColumnMaxWidthLayout>
    <template #header-middle>
      <h1>Busca</h1>
      <div
        class="x-list x-list--vertical x-list--gap-05 x-list--align-stretch x-list__item--expand"
      >
        <SearchBoxComponent placeholder="Comienza a buscar subvenciones" />
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

import store from "@/store";
import { FiltersList } from "@empathyco/x-components/js";
import TagFilter from "@/components/tags/TagFilter";
import PredictiveLayer from "@/components/search/empathize/PredictiveLayer";

export default {
  name: "SearchView",
  components: {
    MultiColumnMaxWidthLayout,
    SearchBoxComponent,
    GrantCardGrid,
    FiltersList,
    TagFilter,
    PredictiveLayer,
  },
  methods: {
    getFiltersSelected() {
      return store.state.filtersSelected;
    },
    async getColorMap(type) {
      return await store.dispatch("getColor", type);
    },
    manageFilter(filterToManage) {
      store.dispatch("modifySelectedFilters", filterToManage);
    },
  },
  beforeMount() {
    store.commit("clearFiltersSelected");
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
</style>
