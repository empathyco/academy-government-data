<template>
  <Empathize :animation="empathizeAnimation">
    <template #default>
      <BaseKeyboardNavigation>
        <div
          v-bind:key="querySuggestion"
          v-for="querySuggestion in querySuggestions"
        >
          <QuerySuggestion :suggestion="querySuggestion"></QuerySuggestion>
        </div>
      </BaseKeyboardNavigation>
    </template>
  </Empathize>
</template>

<script>
import { Empathize, QuerySuggestion } from "@empathyco/x-components/js";
import {
  animateScale,
  BaseKeyboardNavigation,
  StaggeredFadeAndSlide,
} from "@empathyco/x-components";

export default {
  name: "PredictiveLayer",
  data() {
    return {
      empathizeAnimation: animateScale(),
      suggestionsAnimation: StaggeredFadeAndSlide,
      querySuggestions: [
        "Albacete",
        "Asturias",
        "Alicante",
        "Almería",
        "Andalucía",
      ],
    };
  },
  components: {
    Empathize,
    BaseKeyboardNavigation,
    QuerySuggestion,
  },
};
</script>
<style scoped></style>
