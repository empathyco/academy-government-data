<template>
  <BaseGrid :items="grants" :columns="3">
    <template #default="{ item }">
      <GrantCard :item="item"></GrantCard>
    </template>
  </BaseGrid>
</template>

<script>
import GrantCard from "@/components/search/details/GrantCard";
import { BaseGrid } from "@empathyco/x-components";
import { bidResultsSample } from "@/utils/data/SampleData";

export default {
  name: "GrantCardGrid",
  components: {
    GrantCard,
    BaseGrid,
  },
  data() {
    return {
      grants: bidResultsSample,
    };
  },
};
</script>

<style scoped></style>
