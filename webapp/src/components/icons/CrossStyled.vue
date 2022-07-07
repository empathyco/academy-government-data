<template>
  <CrossIcon class="x-icon" />
</template>

<script>
import { CrossIcon } from "@empathyco/x-components";

export default {
  name: "CrossStyled",
  components: {
    CrossIcon,
  },
};
</script>

<style scoped>
.x-icon {
  width: 24px;
  height: 24px;
  stroke: var(--font-colour);
  padding-top: 5px;
}
</style>
