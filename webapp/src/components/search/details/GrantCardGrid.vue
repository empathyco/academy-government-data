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
          id: "1234",
          name: "grant1",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: "1000000€",
          procurer: "José María Llorián",
          relatedTags: [
            { isCurated: false, tag: "tag1" },
            { isCurated: false, tag: "tag2" },
            { isCurated: false, tag: "tag3" },
            { isCurated: false, tag: "tag4" },
          ],
        },
        {
          modelName: "grant",
          id: "1234",
          name: "Ejemplo de nombre un poco largo par ver cómo queda",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: "1000000€",
          procurer: "José María Llorián",
          relatedTags: [
            { isCurated: false, tag: "tag1" },
            { isCurated: false, tag: "tag2" },
            { isCurated: false, tag: "tag3" },
            { isCurated: false, tag: "tag4" },
          ],
        },
        {
          modelName: "grant",
          id: "1234",
          name: "grant3",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: "1000000€",
          procurer: "José María Llorián",
          relatedTags: [
            { isCurated: false, tag: "tag1" },
            { isCurated: false, tag: "tag2" },
            { isCurated: false, tag: "tag3" },
            { isCurated: false, tag: "tag4" },
          ],
        },
        {
          modelName: "grant",
          id: "1234",
          name: "grant4",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: "1000000€",
          procurer: "José María Llorián",
          relatedTags: ["one", "two", "three", "four"],
        },
        {
          modelName: "grant",
          id: "1234",
          name: "grant5",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: "1000000€",
          procurer: "José María Llorián",
          relatedTags: [
            { isCurated: false, tag: "tag1" },
            { isCurated: false, tag: "tag2" },
            { isCurated: false, tag: "tag3" },
            { isCurated: false, tag: "tag4" },
          ],
        },
        {
          modelName: "grant",
          id: "1234",
          name: "grant6",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: "1000000€",
          procurer: "José María Llorián",
          relatedTags: [
            { isCurated: false, tag: "tag1" },
            { isCurated: false, tag: "tag2" },
            { isCurated: false, tag: "tag3" },
            { isCurated: false, tag: "tag4" },
          ],
        },
        {
          modelName: "grant",
          id: "1234",
          name: "grant7",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: "1000000€",
          procurer: "José María Llorián",
          relatedTags: [
            { isCurated: false, tag: "tag1" },
            { isCurated: false, tag: "tag2" },
            { isCurated: false, tag: "tag3" },
            { isCurated: false, tag: "tag4" },
          ],
        },
        {
          modelName: "grant",
          id: "1234",
          name: "grant8",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: "1000000€",
          procurer: "José María Llorián",
          relatedTags: [
            { isCurated: false, tag: "tag1" },
            { isCurated: false, tag: "tag2" },
            { isCurated: false, tag: "tag3" },
            { isCurated: false, tag: "tag4" },
          ],
        },
        {
          modelName: "grant",
          id: "1234",
          name: "grant9",
          dateStart: "10/06/2022",
          dateFinish: "10/06/2022",
          amount: "1000000€",
          procurer: "José María Llorián",
          relatedTags: [
            { isCurated: false, tag: "tag1" },
            { isCurated: false, tag: "tag2" },
            { isCurated: false, tag: "tag3" },
            { isCurated: false, tag: "tag4" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
