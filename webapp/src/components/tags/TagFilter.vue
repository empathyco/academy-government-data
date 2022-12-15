<template>
  <SimpleFilter
    class="filter"
    :filter="filter"
    :style="`background-color:${getColorComputed()};`"
  >
    <template #label="{ filter }">
      <div class="discovery-filter">
        <p id="filter-label">{{ filter.label }}</p>
        <CrossTinyStyled class="tiny-cross" />
      </div>
    </template>
  </SimpleFilter>
</template>

<script>
import { SimpleFilter } from "@empathyco/x-components/js";
import CrossTinyStyled from "@/components/icons/CrossTinyStyled";

export default {
  name: "TagFilter",
  components: {
    SimpleFilter,
    CrossTinyStyled,
  },
  data() {
    return {
      colorData: "",
    };
  },
  props: ["filter", "color", "filtersSelected"],
  methods: {
    getColorComputed() {
      try {
        return this.$store.getters.getColorMap.find(
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
.tiny-cross {
  stroke: white;
}
</style>
