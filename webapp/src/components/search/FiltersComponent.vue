<template>
  <div>
    <div
      class="contenido-filtros"
      v-bind:key="filter.title"
      v-for="filter in filters.content"
    >
      <h1>{{ filter.title }}</h1>
      <FiltersList :filters="filter.content" v-slot="{ filter }">
        <SimpleFilter :filter="filter" />
      </FiltersList>
    </div>
  </div>
</template>

<script>
import { FiltersList, SimpleFilter } from "@empathyco/x-components/js";

export default {
  name: "FiltersComponent",
  props: {
    filters: {
      content: Array({
        title: String,
        content: Array({
          label: String,
          modelName: String,
          selected: Boolean,
          id: String,
          value: String,
          facetId: String,
          totalResults: Number,
        }),
      }),
    },
  },
  components: {
    FiltersList,
    SimpleFilter,
  },
};
</script>

<style scoped>
.contenido-filtros {
  display: grid;
}
</style>
