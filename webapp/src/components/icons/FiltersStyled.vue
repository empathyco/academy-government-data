<template>
  <FiltersIcon class="filter-icon"></FiltersIcon>
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
  stroke: #243d48;
  padding-top: 5px;
}
</style>
