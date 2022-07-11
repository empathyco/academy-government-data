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
          :style="`background-color:${getColorMap(filter.type)};`"
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
import { getColorFromDictionary } from "@/utils/methods/ColorMapper";
import { FiltersList, SimpleFilter } from "@empathyco/x-components/js";
import CrossTinyStyled from "@/components/icons/CrossTinyStyled";
import PlusStyled from "@/components/icons/PlusStyled";

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
    filtersSelected: Array({
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
        this.emit(
          "changedFilters",
          this.filtersSelected.filter(
            (filter) => filter.id !== filterToManage.id
          )
        );
      } else {
        this.emit("changedFilters", [...this.filtersSelected, filterToManage]);
      }
    },
    getColorMap(type) {
      return getColorFromDictionary(this.colorMap.content, type);
    },
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

.botones-filtros {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
}
.filter-icon {
  height: 24px;
  width: 24px;
  stroke: #243d48;
}
.boton-filtro {
  background-color: var(--background-colour);
  color: #243d48;
  border: solid 3px #243d48;
  border-radius: 35px;
  padding: 8px 12px;
}
.boton-filtro:hover > * {
  stroke: var(--font-selected-link);
}
.boton-filtro:hover {
  color: var(--font-selected-link);
  border-color: var(--font-selected-link);
}
.boton-selected > * {
  stroke: var(--font-selected-link);
}
.boton-selected {
  color: var(--font-selected-link);
  border-color: var(--font-selected-link);
}

.filters-list {
  display: flex;
  justify-content: center;
  flex-flow: wrap;
}
.filter {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: bold;
  color: white;
  border: solid 1px white;
  border-radius: 30px;
  margin: 3px;
}
.discovery-filter {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: -10px;
}
#filter-label {
  margin: 10px 10px;
}
.icon-response {
  stroke: white;
}
</style>
