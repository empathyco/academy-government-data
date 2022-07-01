<template>
  <TrendingIcon class="filter-icon"></TrendingIcon>
</template>
<script>
import { TrendingIcon } from "@empathyco/x-components";

export default {
  name: "FiltersStyled",
  components: {
    TrendingIcon,
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
