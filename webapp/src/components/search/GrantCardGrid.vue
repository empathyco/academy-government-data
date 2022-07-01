<template>
  <BaseGrid :items="grants" :columns="3">
    <template #default="{ item }">
      <GrantCard :item="item"></GrantCard>
    </template>
  </BaseGrid>
</template>

<script>
import GrantCard from "@/components/search/GrantCard";
import { BaseGrid } from "@empathyco/x-components";

export default {
  name: "GrantCardGrid",
  components: {
    GrantCard,
    BaseGrid,
  },
  data() {
    return {
      grants: [
        {
          modelName: "grant",
          name: "grant1",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: 1000000,
          procurer: "José María Llorián",
          relatedTags: ["one", "two", "three", "four"],
        },
        {
          modelName: "grant",
          name: "grant2",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: 1000000,
          procurer: "José María Llorián",
          relatedTags: ["one", "two", "three", "four"],
        },
        {
          modelName: "grant",
          name: "grant3",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: 1000000,
          procurer: "José María Llorián",
          relatedTags: ["one", "two", "three", "four"],
        },
        {
          modelName: "grant",
          name: "grant4",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: 1000000,
          procurer: "José María Llorián",
          relatedTags: ["one", "two", "three", "four"],
        },
        {
          modelName: "grant",
          name: "grant5",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: 1000000,
          procurer: "José María Llorián",
          relatedTags: ["one", "two", "three", "four"],
        },
        {
          modelName: "grant",
          name: "grant6",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: 1000000,
          procurer: "José María Llorián",
          relatedTags: ["one", "two", "three", "four"],
        },
        {
          modelName: "grant",
          name: "grant7",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: 1000000,
          procurer: "José María Llorián",
          relatedTags: ["one", "two", "three", "four"],
        },
        {
          modelName: "grant",
          name: "grant8",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: 1000000,
          procurer: "José María Llorián",
          relatedTags: ["one", "two", "three", "four"],
        },
        {
          modelName: "grant",
          name: "grant9",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: 1000000,
          procurer: "José María Llorián",
          relatedTags: ["one", "two", "three", "four"],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
