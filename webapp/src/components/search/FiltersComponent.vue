<template>
  <div class="filter-container">
    <div
      class="contenido-filtros"
      v-bind:key="filtergroup.title"
      v-for="filtergroup in filters.content"
    >
      <div class="filter-wrapper">
        <h2>{{ filtergroup.title }}</h2>
        <FiltersList
          :class="`filters-list`"
          :filters="filtergroup.content"
          v-slot="{ filter }"
        >
          <SimpleFilter
            class="filter"
            :filter="filter"
            :ref="`filterTag${filter.label}`"
            @click.native="emitFilter(filter)"
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
  </div>
</template>

<script>
import { FiltersList, SimpleFilter } from "@empathyco/x-components/js";
import PlusStyled from "@/components/icons/PlusStyled";
import CrossTinyStyled from "@/components/icons/CrossTinyStyled";
import store from "@/store";

export default {
  name: "FiltersComponent",
  props: {
    filters: {
      content: Array({
        title: String,
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
    colorMap: {
      content: Array({ color: String, type: String }),
    },
  },
  components: {
    PlusStyled,
    CrossTinyStyled,
    FiltersList,
    SimpleFilter,
  },
  data() {
    return {
      colors: ["pink", "blue", "yellow", "purple", "green"],
      counter: 1,
    };
  },
  methods: {
    getColor() {
      if (this.counter === this.colors.length) {
        this.counter = 0;
      }
      return this.colors[this.counter++];
    },
    async getColorMap(filter) {
      const filterIsSelected =
        this.filtersSelected.content.filter(
          (filterSelected) => filterSelected.label === filter.label
        ).length > 0;

      filterIsSelected ? (filter.selected = true) : (filter.selected = false);

      const color = await store.dispatch("getColorFromDictionary", filter.type);
      this.$refs[`filterTag${filter.label}`][0].$el.setAttribute(
        "style",
        `background-color: ${filterIsSelected ? "#b3b3b3" : color}`
      );
    },
    emitFilter(filter) {
      this.$emit("selected-filter", filter);
    },
  },
  mounted() {
    for (let filtergroup of this.filters.content) {
      for (let filter of filtergroup.content) this.getColorMap(filter);
    }
  },
};
</script>

<style scoped lang="scss">
.contenido-filtros {
  justify-content: flex-start;
  flex-flow: wrap;
  align-items: center;
  width: 40%;
  min-width: 500px;
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
.filter-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
.filter-container {
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
}
</style>
