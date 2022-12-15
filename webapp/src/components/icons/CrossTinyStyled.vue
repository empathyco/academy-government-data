<template>
  <CrossTinyIcon class="filter-icon" />
</template>

<script>
import { CrossTinyIcon } from "@empathyco/x-components";

export default {
  name: "CrossTinyStyled",
  components: {
    CrossTinyIcon,
  },
};
</script>

<style scoped>
.filter-icon {
  height: 24px;
  width: 24px;
  stroke: var(--font-colour);
  margin-left: -3px;
}
</style>
