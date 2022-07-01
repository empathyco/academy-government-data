<template>
  <div class="discover-card">
    <p>{{ item.name }}</p>
    <p>Fecha de inicio: {{ item.dateStart }}</p>
    <p>Fecha de fin: {{ item.dateFinish }}</p>
    <p>Cantidad total: {{ item.amount }}</p>
    <p>Procurador: {{ item.procurer }}</p>
    <p>{{ item.relatedTags }}</p>
  </div>
</template>

<script>
import BarChart from "@/components/insights/charts/BarChart";
import BubbleChart from "@/components/insights/charts/BubbleChart";
import LinePlotChart from "@/components/insights/charts/LinePlotChart";
import PieChart from "@/components/insights/charts/PieChart";
import WordCloud from "@/components/insights/charts/WordCloud";

export default {
  name: "DiscoverCard",
  components: {},
  props: {
    item: {
      modelName: String,
      name: String,
      dateStart: String,
      dateFinish: String,
      amount: Number,
      procurer: String,
      relatedTags: Array(String),
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
</style>
