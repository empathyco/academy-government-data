<template>
  <div class="filter-container">
    <div
      class="contenido-filtros"
      v-bind:key="filtergroup.title"
      v-for="filtergroup in filters"
    >
      <div class="filter-wrapper">
        <h2>{{ filtergroup.title }}</h2>
        <FiltersList
          :class="`filters-list`"
          :filters="filtergroup.content"
          v-slot="{ filter }"
        >
          <TagSelectionFilter
            :filter="filter"
            :color="getColor(filter)"
            :isSelected="isFilterSelected(filter)"
          />
        </FiltersList>
      </div>
    </div>
  </div>
</template>

<script>
import { FiltersList } from "@empathyco/x-components/js";
import store from "@/store";
import TagSelectionFilter from "@/components/tags/TagSelectionFilter";

export default {
  name: "FiltersComponent",
  props: ["filters"],
  components: {
    TagSelectionFilter,
    FiltersList,
  },
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    getColor(filter) {
      return store.dispatch("getColor", filter.type);
    },
    isFilterSelected(filter) {
      return store.dispatch("isFilterSelected", filter);
    },
  },
};
</script>

<style scoped lang="scss">
.contenido-filtros {
  justify-content: flex-start;
  flex-flow: wrap;
  align-items: center;
  width: 40%;
  min-width: 500px;
}
.icon-response {
  stroke: white;
}
.filter-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
.filter-container {
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
}
</style>
