<template>
  <SimpleFilter
    class="filter"
    :filter="filter"
    :style="`background-color:${getColorComputed()};`"
    @click.native="clickOnFilter()"
  >
    <template #label="{ filter }">
      <div class="discovery-filter">
        <p id="filter-label">{{ filter.label }}</p>
        <CrossTinyStyled v-if="selected" class="icon-response" />
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
      colorData: "",
      selected: this.filter.selected,
    };
  },
  components: {
    PlusStyled,
    CrossTinyStyled,
    SimpleFilter,
  },
  props: ["filter", "color", "isSelected"],
  methods: {
    clickOnFilter() {
      store.dispatch("modifySelectedFilters", this.filter);
      this.selected = !this.selected;
    },
    getColorComputed() {
      return this.selected ? "grey" : this.colorData;
    },
  },
  async mounted() {
    this.colorData = await this.color;
    this.selected = await this.isSelected;
  },
  watch: {
    async isSelected(newValue) {
      this.selected = await newValue;
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
