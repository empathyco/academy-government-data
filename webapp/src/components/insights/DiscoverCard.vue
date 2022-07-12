<template>
  <div class="discover-card">
    <div class="card-header">
      <p class="chart-title">
        {{ item.title }}
      </p>
      <button
        id="dowload-button"
        @click="dowlowadContent"
        class="download-contents"
      >
        <i class="material-symbols-outlined info"> download </i>
      </button>
    </div>
    <BarChart
      v-if="item.modelName === 'barchart'"
      :series="item.data"
    ></BarChart>
    <BubbleChart
      v-else-if="item.modelName === 'bubblechart'"
      :series="item.data"
    ></BubbleChart>
    <LinePlotChart
      v-else-if="item.modelName === 'lineplotchart'"
      :series="item.data"
    ></LinePlotChart>
    <PieChart
      v-else-if="item.modelName === 'piechart'"
      :series="item.data"
    ></PieChart>
    <WordCloud
      v-else-if="item.modelName === 'wordcloud'"
      :series="item.data"
    ></WordCloud>
    <div class="filter-container">
      <FiltersList
        :class="`filters-list`"
        :filters="item.tags"
        v-slot="{ filter }"
      >
        <SimpleFilter
          class="filter"
          :filter="filter"
          :ref="`filter${filter.label}`"
          @click.native="manageFilter(filter)"
        >
          <template #label="{ filter }">
            <div class="discovery-filter">
              <p id="filter-label">{{ filter.label }}</p>
              <CrossTinyStyled v-if="filter.selected" class="icon-response" />
              <PlusStyled v-else class="icon-response" />
            </div>
          </template>
        </SimpleFilter>
      </FiltersList>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/insights/charts/BarChart";
import BubbleChart from "@/components/insights/charts/BubbleChart";
import LinePlotChart from "@/components/insights/charts/LinePlotChart";
import PieChart from "@/components/insights/charts/PieChart";
import WordCloud from "@/components/insights/charts/WordCloud";
import { FiltersList, SimpleFilter } from "@empathyco/x-components/js";
import CrossTinyStyled from "@/components/icons/CrossTinyStyled";
import PlusStyled from "@/components/icons/PlusStyled";
import store from "@/store";

export default {
  name: "DiscoverCard",
  components: {
    BarChart,
    BubbleChart,
    LinePlotChart,
    PieChart,
    WordCloud,
    FiltersList,
    SimpleFilter,
    CrossTinyStyled,
    PlusStyled,
  },
  props: {
    item: {
      data: String,
      modelName: String,
      title: String,
      tags: Array({
        label: String,
        modelName: String,
        selected: Boolean,
        id: String,
        value: String,
        facetId: String,
        type: String,
        totalResults: Number,
      }),
    },
    filtersSelected: {
      content: Array({
        label: String,
        modelName: String,
        selected: Boolean,
        id: String,
        value: String,
        facetId: String,
        type: String,
        totalResults: Number,
      }),
    },
  },
  data() {
    return {
      colorMap: { content: [] },
    };
  },
  methods: {
    dowlowadContent() {
      console.log(this.item);
    },
    manageFilter(filterToManage) {
      if (
        this.filtersSelected.some((filter) => filter.id === filterToManage.id)
      ) {
        this.$emit(
          "changedFilters",
          this.filtersSelected.filter(
            (filter) => filter.id !== filterToManage.id
          )
        );
      } else {
        this.$emit("changedFilters", [...this.filtersSelected, filterToManage]);
      }
    },
    async getColorMap(filter) {
      const filterIsSelected =
        this.filtersSelected.filter(
          (filterSelected) => filterSelected.label === filter.label
        ).length > 0;

      filterIsSelected ? (filter.selected = true) : (filter.selected = false);
      const color = await store.dispatch("getColorFromDictionary", filter.type);
      this.$refs[`filter${filter.label}`].$el.setAttribute(
        "style",
        `background-color: ${filterIsSelected ? "#b3b3b3" : color}`
      );
    },
  },
  mounted() {
    for (let filter of this.item.tags) {
      this.getColorMap(filter);
    }
  },
};
</script>

<style scoped>
.discover-card {
  border: solid 3px #243d48;
  border-radius: 30px;
  padding: 20px;
  margin: 10px;
  height: 600px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
}
.download-contents {
  background-color: var(--background-colour);
  border: solid 1px var(--font-colour);
  color: var(--font-colour);
  border-radius: 30px;
  height: 40px;
  width: 50px;
  padding: 6px 8px;
}

.download-contents:hover {
  background-color: #d44a6f;
  border: solid 1px white;
  color: white;
}

.card-header {
  display: flex;
  justify-content: space-between;
}

.chart-title {
  font-size: 24px;
  font-weight: bold;
  max-width: 80%;
}
</style>
