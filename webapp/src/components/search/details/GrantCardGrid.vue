<template>
  <ResultsList #default="{ items }">
    <BaseGrid :items="items" :columns="3">
      <template #result="{ item }">
        <GrantCard :item="item" />
      </template>
      <template #default="{ item }">
        <p>{{ item.id }}</p>
      </template>
    </BaseGrid>
  </ResultsList>
</template>

<script>
import GrantCard from "@/components/search/details/GrantCard";
import { BaseGrid } from "@empathyco/x-components";
import { bidResultsSample } from "@/utils/data/SampleData";
import { ResultsList } from "@empathyco/x-components/search";

export default {
  name: "GrantCardGrid",
  components: {
    GrantCard,
    BaseGrid,
    ResultsList,
  },
  data() {
    return {
      grants: bidResultsSample,
    };
  },
};
</script>

<style scoped></style>
