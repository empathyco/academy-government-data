<template>
  <FiltersIcon class="filter-icon" />
</template>

<script>
import { FiltersIcon } from "@empathyco/x-components";

export default {
  name: "FiltersStyled",
  components: {
    FiltersIcon,
  },
};
</script>

<style scoped>
.filter-icon {
  height: 24px;
  width: 24px;
  stroke: var(--font-colour);
  padding-top: 5px;
}
</style>
