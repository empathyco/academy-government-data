<template>
  <SimpleFilter
    class="filter"
    :filter="filter"
    :style="`background-color:${getColorComputed()};`"
  >
    <template #label="{ filter }">
      <div class="discovery-filter">
        <p id="filter-label">{{ filter.label }}</p>
        <CrossTinyStyled v-if="filter.selected" class="icon-response" />
        <PlusStyled v-else class="icon-response" />
      </div>
    </template>
  </SimpleFilter>
</template>

<script>
import PlusStyled from "@/components/icons/PlusStyled";
import CrossTinyStyled from "@/components/icons/CrossTinyStyled";
import { SimpleFilter } from "@empathyco/x-components/js";

export default {
  name: "TagSelectionFilter",
  components: {
    PlusStyled,
    CrossTinyStyled,
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
        return this.selected
          ? "grey"
          : this.$store.getters.getColorMap.find(
              (pair) => pair.type === this.filter.type
            ).color;
      } catch (e) {
        return "grey";
      }
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
</style>
