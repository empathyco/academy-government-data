<template>
  <Empathize :animation="empathizeAnimation">
    <template #default>
      <BaseKeyboardNavigation>
        <QuerySuggestions>
          <template #suggestion="{ suggestion }">
            <!--<QuerySuggestion :suggestion="suggestion" #default="{ queryHTML }">
              <span v-html="queryHTML" />
            </QuerySuggestion> -->
            <button @click="emitSuggestionClickedEvents($event, suggestion)">
              {{ suggestion.query }}
            </button>
          </template>
        </QuerySuggestions>
      </BaseKeyboardNavigation>
    </template>
  </Empathize>
</template>

<script>
import { Empathize, QuerySuggestions } from "@empathyco/x-components/js";
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
    // QuerySuggestion,
  },
  methods: {
    emitSuggestionClickedEvents(event, suggestion) {
      this.$x.emit("UserAcceptedAQuery", suggestion.query, {
        target: event.target,
      });
      this.$x.emit("UserSelectedASuggestion", suggestion, {
        target: event.target,
      });
      this.$x.emit("UserSelectedAQuerySuggestion", suggestion, {
        target: event.target,
      });
    },
  },
};
</script>
<style scoped></style>
