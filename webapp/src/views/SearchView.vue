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
      <!--<PredictiveLayer></PredictiveLayer>-->
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
import CrossTinyStyled from "@/components/icons/CrossTinyStyled";
import { RelatedTags } from "@empathyco/x-components/related-tags";
import { SelectedFiltersList } from "@empathyco/x-components/facets";
import store from "@/store";
import { SimpleFilter } from "@empathyco/x-components/js";

export default {
  name: "SearchView",
  components: {
    MultiColumnMaxWidthLayout,
    SearchBoxComponent,
    GrantCardGrid,
    CrossTinyStyled,
    RelatedTags,
    SelectedFiltersList,
    SimpleFilter,
  },
  methods: {},
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
