<template>
  <div class="filter-container">
    <div
      class="contenido-filtros"
      v-bind:key="filter.title"
      v-for="filter in filters.content"
    >
      <div class="filter-wrapper">
        <h2>{{ filter.title }}</h2>
        <FiltersList
          :class="`filters-list`"
          :filters="filter.content"
          v-slot="{ filter }"
        >
          <SimpleFilter
            class="filter"
            :filter="filter"
            :style="`background-color:${getColorMap(filter.type)};`"
            @click.native="emitFilter(filter)"
          />
        </FiltersList>
      </div>
    </div>
  </div>
</template>

<script>
import { FiltersList, SimpleFilter } from "@empathyco/x-components/js";
import { getColorFromDictionary } from "@/utils/methods/ColorMapper";

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
    colorMap: {
      content: Array({ color: String, type: String }),
    },
  },
  components: {
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
    getColorMap(type) {
      return getColorFromDictionary(this.colorMap.content, type);
    },
    emitFilter(filter) {
      this.$emit("selected-filter", filter);
    },
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
  font-weight: bold;
  color: white;
  border: solid 1px white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin: 3px;
  padding: 5px;
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

.color--pink {
  .filter {
    background-color: #d44a6f;
  }
}
.color--blue {
  .filter {
    background-color: #53b9c9;
  }
}
.color--yellow {
  .filter {
    background-color: #fdcb5b;
  }
}
.color--purple {
  .filter {
    background-color: #8b6391;
  }
}
.color--green {
  .filter {
    background-color: #80c0a1;
  }
}
</style>
