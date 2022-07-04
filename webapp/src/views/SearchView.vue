<template>
  <MultiColumnMaxWidthLayout>
    <template #header-middle>
      <h1>Busca</h1>
      <div
        class="x-list x-list--vertical x-list--gap-05 x-list--align-stretch x-list__item--expand"
      >
        <SearchBoxComponent placeholder="Comienza a buscar subvenciones" />
        <!--
        <LocationProvider location="predictive_layer">
          <RelatedTags
            v-if="!$x.isEmpathizeOpen && $x.relatedTags.length > 0"
          />
        </LocationProvider>
        -->
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

export default {
  name: "SearchView",
  components: { MultiColumnMaxWidthLayout, SearchBoxComponent, GrantCardGrid },
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
