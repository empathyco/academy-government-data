<template>
  <!--
  To be honest, I find this a little bit complex
   As far as I understand, this component takes care of the search experience of recommendations,
   giving the user results whenever a search is being made and the result of the search will also
   be affected by it.
   For more information search in https://docs.empathy.co/develop-empathy-platform/ui-reference/components/empathize/x-components.empathize.html?utm_term=empat
   -->
  <Empathize :animation="empathizeAnimation" class="empathize-container">
    <template #default>
      <BaseKeyboardNavigation class="keyboard-navigation">
        <QuerySuggestions class="query-suggestion-container">
          <template #suggestion="{ suggestion }">
            <!--<QuerySuggestion :suggestion="suggestion" #default="{ queryHTML }">
              <span v-html="queryHTML" />
            </QuerySuggestion> -->
            <button
              class="query-suggestion"
              @click="emitSuggestionClickedEvents($event, suggestion)"
            >
              {{ suggestion.query }}
            </button>
            <hr class="query-separator" />
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
  },
  methods: {
    emitSuggestionClickedEvents(event, suggestion) {
      const filter = {
        label: suggestion.query,
        modelName: "SimpleFilter",
        selected: false,
        id: suggestion.key,
        value: suggestion.key,
        facetId: suggestion.key,
        type: suggestion.type,
        totalResults: 1,
      };
      this.$x.emit("UserAcceptedAQuery", suggestion.query, {
        target: event.target,
      });
      this.$x.emit("UserSelectedASuggestion", filter, {
        target: event.target,
      });
      this.$x.emit("UserSelectedAQuerySuggestion", filter, {
        target: event.target,
      });
      this.$emit("filterApplied", filter);
    },
  },
};
</script>
<style scoped>
.empathize-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.keyboard-navigation {
  width: 77%;
  margin-right: 12px;
}
.query-suggestion-container {
  border: solid 1px #243d48;
  border-top: none;
  border-radius: 0 0 30px 30px;
  margin-top: -6px;
  padding: 10px 5px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.query-suggestion {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  color: #243d48;
  background-color: white;
  border: none;
  margin-left: 30px;
}
.query-separator {
  border: solid 1px #f2f2f2;
  width: 60%;
  margin-left: 30px;
}
:last-child > .query-separator {
  visibility: hidden;
  margin-top: -3px;
}
</style>
