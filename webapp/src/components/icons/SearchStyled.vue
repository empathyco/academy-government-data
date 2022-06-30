<template>
  <SearchIcon class="x-icon"></SearchIcon>
</template>

<script>
import { SearchIcon } from "@empathyco/x-components";

export default {
  name: "SearchStyled",
  components: {
    SearchIcon,
  },
};
</script>

<style scoped>
.x-icon {
  width: 24px;
  height: 24px;
  stroke: #243d48;
  padding-top: 5px;
}
</style>
