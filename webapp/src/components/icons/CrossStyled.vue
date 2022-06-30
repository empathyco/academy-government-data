<template>
  <CrossIcon class="x-icon"></CrossIcon>
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
  stroke: #243d48;
  padding-top: 5px;
}
</style>
