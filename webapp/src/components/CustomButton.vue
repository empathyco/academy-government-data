<template>
  <div class="default-button" :class="getRouteColor()">
    <div class="button-icon" :class="getRouteColor()">
      <slot name="icon"></slot>
    </div>
    <div class="button-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: ["route"],
  methods: {
    getRouteColor() {
      if (this.route === this.$route.fullPath) {
        return "active-link";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.default-button {
  height: 48px;
  width: fit-content;
  display: flex;
  align-items: center;
  border: 1px solid;
  border-color: var(--font-colour);
  background-color: white;
  border-radius: 24px;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s linear;

  overflow: hidden;
}
.button-icon > * {
  width: 24px;
  height: 24px;
  margin-left: 12px;
  color: var(--font-unselected-link);
  background-color: white;
  transition: background-color 0.2s linear;
}

.button-text > * {
  height: auto;
  max-width: 0;

  opacity: 0;
  transition: max-width 0.7s linear, opacity 0.3s 0.3s linear;
}

.button-text {
  height: auto;
  max-width: 0;
  opacity: 0;
  margin-right: 12px;
  transition: max-width 0.7s linear;
}

.default-button:hover,
.default-button:hover > * > *,
.active-link,
.active-link > * {
  background-color: var(--font-unselected-link);
  color: white;
}

.default-button:hover > .button-text > * {
  margin-left: 6px;
  opacity: 1;
}

.default-button:hover > .button-text {
  max-width: 100px;
  opacity: 1;
}
</style>
