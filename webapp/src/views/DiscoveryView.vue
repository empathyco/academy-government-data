<template>
  <MultiColumnMaxWidthLayout>
    <template #header-middle>
      <h1>Explora</h1>
    </template>
    <template #header-start>
      <!-- Button for switching from discovery view to filters selection -->
      <div class="botones-filtros">
        <CustomButton :class="{ iconactive: filtersMenuSelected }">
          <template v-slot:icon>
            <i
              @click="changeFilterSelected"
              ref="filterButton"
              class="material-symbols-outlined rotate"
              :class="{ active: filtersMenuSelected }"
              >tune</i
            ></template
          >
          <template v-slot:text><a>Filtros</a></template>
        </CustomButton>
      </div>
    </template>
    <template #sub-header>
      <!-- Place for the suggestions and related tags/filters TODO: extract component for the same as in search view -->
      <PredictiveLayer />
      <div class="filter-container">
        <SelectedFiltersList :class="`filters-list`" v-slot="{ filter }">
          <TagFilter :filter="filter" />
        </SelectedFiltersList>
      </div>
    </template>

    <template #main-body>
      <!-- Place for the discover cards or the available filters -->
      <div v-if="filtersMenuSelected">
        <FiltersComponent :filters="filters" />
      </div>
      <div v-else>
        <div class="charts-container">
          <DisplayCharts />
        </div>
      </div>
    </template>
  </MultiColumnMaxWidthLayout>
</template>

<script>
import { MultiColumnMaxWidthLayout } from "@empathyco/x-components";
import FiltersComponent from "@/components/search/FiltersComponent";
import DisplayCharts from "@/components/insights/DisplayCharts";
import PredictiveLayer from "@/components/search/empathize/PredictiveLayer";
import { filtersSample, relatedTagsSample } from "@/utils/data/SampleData";
import store from "@/store";
import TagFilter from "@/components/tags/TagFilter";
import CustomButton from "@/components/CustomButton";
import { SelectedFiltersList } from "@empathyco/x-components/js";

export default {
  name: "DiscoveryView",
  data() {
    return {
      filtersMenuSelected: false,
      relatedTags: relatedTagsSample,
      filters: filtersSample,
    };
  },
  components: {
    TagFilter,
    PredictiveLayer,
    DisplayCharts,
    FiltersComponent,
    MultiColumnMaxWidthLayout,
    SelectedFiltersList,
    CustomButton,
  },
  methods: {
    /**
     * Changes the style of the button to switch between views of discovery cards and filters
     */
    changeFilterSelected() {
      this.filtersMenuSelected = !this.filtersMenuSelected;
    },
  },
  async beforeMount() {
    this.$store.commit("emptyColorMap");
    await store.dispatch(
      "initializeDictionary",
      this.filters.map((filter) => filter.title.toLowerCase())
    );
  },
};
</script>

<style scoped lang="scss">
.charts-container,
.filter-container {
  margin-top: 30px;
}

.x-list__item--expand {
  display: flex;
  justify-content: center;
}
/* lol */
.botones-filtros {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  height: 100%;
  margin-left: 10px;
  margin-top: 25px;
}

.rotate {
  transition: transform 300ms linear;
  &:hover {
    transform: rotate(90deg);
  }
}
.active {
  background-color: var(--font-unselected-link);
  color: white;
  transform: rotate(90deg);
}

.iconactive {
  background-color: var(--font-unselected-link);
}

h1 {
  margin-top: 0;
}
</style>
