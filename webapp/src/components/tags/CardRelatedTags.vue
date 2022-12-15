<template>
  <div class="filter-container">
    <FiltersList
      :class="`filters-list`"
      :filters="relatedTags"
      v-slot="{ filter }"
    >
      <TagSelectionFilter :filter="filter" />
    </FiltersList>
  </div>
</template>

<script>
import store from "@/store";
import { FiltersList } from "@empathyco/x-components/js";
import TagSelectionFilter from "@/components/tags/TagSelectionFilter";

export default {
  name: "CardRelatedTags",
  components: { FiltersList, TagSelectionFilter },
  props: ["relatedTags"],
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
