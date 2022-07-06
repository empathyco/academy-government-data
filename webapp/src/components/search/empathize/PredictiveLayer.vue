<template>
  <Empathize :animation="empathizeAnimation">
    <template #default>
      <BaseKeyboardNavigation>
        <QuerySuggestions>
          <template #suggestion="{ querySuggestion }">
            <QuerySuggestion
              :suggestion="querySuggestion"
              #default="{ queryHTML }"
            >
              <span v-html="queryHTML" />
            </QuerySuggestion>
          </template>
        </QuerySuggestions>
      </BaseKeyboardNavigation>
    </template>
  </Empathize>
</template>

<script>
import {
  Empathize,
  QuerySuggestion,
  QuerySuggestions,
} from "@empathyco/x-components/js";
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
    };
  },
  components: {
    Empathize,
    BaseKeyboardNavigation,
    QuerySuggestions,
    QuerySuggestion,
  },
};
</script>
<style scoped></style>
