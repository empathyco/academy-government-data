<template>
  <SimpleFilter
    class="filter"
    :filter="filter"
    :style="`background-color:${colorData};`"
    @click.native="manageFilter(filter)"
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
import store from "@/store";

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
    manageFilter(filterToManage) {
      store.dispatch("modifySelectedFilters", filterToManage);
    },
  },
  async mounted() {
    this.colorData = await this.color;
  },
};
</script>

<style scoped>
.tiny-cross {
  stroke: white;
}
</style>
