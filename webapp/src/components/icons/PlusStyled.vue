<template>
  <PlusIcon class="filter-icon" />
</template>

<script>
import { PlusIcon } from "@empathyco/x-components";

export default {
  name: "PlusStyled",
  components: {
    PlusIcon,
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
