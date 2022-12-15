<template>
  <SimpleFilter
    class="filter"
    :filter="filter"
    :style="`background-color:${getColorComputed()};`"
  >
    <template #label="{ filter }">
      <div class="discovery-filter">
        <p id="filter-label">{{ filter.label }}</p>
        <PlusStyled class="icon-response" />
      </div>
    </template>
  </SimpleFilter>
</template>

<script>
import PlusStyled from "@/components/icons/PlusStyled";
import { SimpleFilter } from "@empathyco/x-components/js";

export default {
  name: "TagSelectionFilter",
  components: {
    PlusStyled,
    SimpleFilter,
  },
  props: ["filter"],
  methods: {
    /**
     * Returns the corresponding color depending on if it's selected or not
     * @returns {string}
     */
    getColorComputed() {
      try {
        return this.$x.selectedFilters.find(
          (filter) => filter.selected && filter.id === this.filter.id
        )
          ? this.getTypeColor() +
              ";opacity:0; visibility:hidden;max-width:0;max-height:0;"
          : this.getTypeColor();
      } catch (e) {
        return "grey";
      }
    },
    getTypeColor() {
      return this.$store.getters.getColorMap.find(
        (pair) => pair.type === this.filter.type
      ).color;
    },
  },
};
</script>

<style scoped>
#filter-label {
  margin: 10px 10px;
}
.icon-response {
  stroke: white;
}
.filter {
  max-width: 100%;
  max-height: 100%;
  transition: 0.5s, max-width 0.8s ease-out, max-height 0.2s 0.2s;
}
</style>
