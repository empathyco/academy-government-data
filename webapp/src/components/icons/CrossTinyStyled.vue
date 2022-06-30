<template>
  <CrossTinyIcon class="filter-icon"></CrossTinyIcon>
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
  stroke: #243d48;
  margin-left: -3px;
}
</style>
