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
import store from "@/store";

export default {
  name: "TagSelectionFilter",
  data() {
    return {
      // Color of the filter
      colorData: "",
    };
  },
  components: {
    PlusStyled,
    CrossTinyStyled,
    SimpleFilter,
  },
  props: ["filter", "color"],
  methods: {
    /**
     * Returns the corresponding color depending on if it's selected or not
     * @returns {string}
     */
    getColorComputed() {
      return this.selected ? "grey" : this.colorData;
    },
  },
  async mounted() {
    /* The await of the params passed as promises is done here as a workaround of the static nature of the Vue components.
    Several options were tested and tried but this was the better found. The promises are passed and awaited before the
    components are loaded, then assigning it to the data and fixing the asynchronous problem
     */
    this.colorData = await this.color;
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
