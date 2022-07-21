<template>
  <div class="discover-card">
    <div class="filter-container">
      <!-- TODO: substitute this by a new component extracted from here and discovery card -->
      <FiltersList
        :class="`filters-list`"
        :filters="item.relatedTags"
        v-slot="{ filter }"
      >
        <TagSelectionFilter
          :filter="filter"
          :color="getColor(filter)"
          :isSelected="isFilterSelected(filter)"
        />
      </FiltersList>
    </div>
    <p class="grant-id">{{ item.id }}</p>
    <p class="grant-name">{{ item.name }}</p>
    <div class="parallel-attributes">
      <div class="titled-attribute">
        <p>Fecha inicio</p>
        <p class="date">{{ item.dateStart }}</p>
      </div>
      <div class="titled-attribute">
        <p>Fecha fin</p>
        <p class="date">{{ item.dateFinish }}</p>
      </div>
    </div>
    <div class="titled-attribute">
      <p>Cantidad total</p>
      <p class="highlighted-value">{{ item.amount }}</p>
    </div>
    <div class="titled-attribute">
      <p>Procurador</p>
      <p class="highlighted-value">{{ item.procurer }}</p>
    </div>
  </div>
</template>

<script>
import { FiltersList } from "@empathyco/x-components/js";
import store from "@/store";
import TagSelectionFilter from "@/components/tags/TagSelectionFilter";

export default {
  // Basic component that represent the essential content of a grant given
  name: "GrantCard",
  components: { FiltersList, TagSelectionFilter },
  props: ["item"],
  /* item: {
      modelName: String,
      name: String,
      dateStart: String,
      dateFinish: String,
      amount: Number,
      procurer: String,
      relatedTags: Array(filterType()),
    },*/
  methods: {
    /**
     * Given a filter returns a promise from the store with the color of the corresponding tag depending its type
     * @param filter
     * @returns {Promise<any>}
     */
    getColor(filter) {
      return store.dispatch("getColor", filter.type);
    },
    /**
     * Given a filter returns a promise from the store with the state of its selection
     * @param filter
     * @returns {Promise<any>}
     */
    isFilterSelected(filter) {
      return store.dispatch("isFilterSelected", filter);
    },
  },
};
</script>

<style scoped>
.discover-card {
  border: solid 3px #243d48;
  border-radius: 30px;
  padding: 10px;
  margin: 10px;
}
p {
  font-size: 16px;
  margin: 5px;
}
.grant-id {
  font-size: 20px;
  font-weight: bold;
}
.grant-name {
  font-size: 22px;
  font-weight: bold;
}
.parallel-attributes {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
}
.titled-attribute {
  margin-top: 15px;
}
.date {
  border: solid 1px #243d48;
  background-color: #dbebee;
  padding: 8px;
  border-radius: 30px;
}
.highlighted-value {
  font-weight: bold;
}
</style>
