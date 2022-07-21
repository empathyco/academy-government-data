<template>
  <ResultsList>
    <!-- TODO: The Result list will have the #default="{ items, animation }"
    prop when the API is called. Until then, this is applied -->
    <BaseGrid :items="grants" :columns="3">
      <template #result="{ grant }">
        <span>Result: {{ grant.name }}</span>
      </template>
      <template #default="{ item }">
        <GrantCard :item="item"></GrantCard>
      </template>
    </BaseGrid>
  </ResultsList>
</template>

<script>
import GrantCard from "@/components/search/details/GrantCard";
import { BaseGrid } from "@empathyco/x-components";
import { bidResultsSample } from "@/utils/data/SampleData";
import { ResultsList } from "@empathyco/x-components/js";

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
