<template>
  <div class="filter-container">
    <FiltersList
      :class="`filters-list`"
      :filters="relatedTags"
      v-slot="{ filter }"
    >
      <TagSelectionFilter
        :filter="filter"
        :color="getColor(filter)"
        :isSelected="isFilterSelected(filter)"
      />
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
  methods: {
    /**
     * Given a filter returns a promise from the store with the color of the corresponding tag depending its type
     * @param filter
     * @returns {Promise<any>}
     */
    getColor(filter) {
      return store.dispatch("getColor", filter.type);
    },
    /**
     * Given a filter returns a promise from the store with the state of its selection
     * @param filter
     * @returns {Promise<any>}
     */
    isFilterSelected(filter) {
      return store.dispatch("isFilterSelected", filter);
    },
  },
};
</script>

<style scoped></style>
