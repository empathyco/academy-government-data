<template>
  <div class="discover-card">
    <div class="related-tags">
      <div v-bind:key="relatedTag.tag" v-for="relatedTag in item.relatedTags">
        <RelatedTag class="related-tag" :relatedTag="relatedTag">
          <p id="tag-text">{{ relatedTag.tag }}</p>
          <CrossTinyIcon class="cross-icon" />
        </RelatedTag>
      </div>
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
import { RelatedTag } from "@empathyco/x-components/js";
import { CrossTinyIcon } from "@empathyco/x-components";

export default {
  name: "GrantCard",
  components: { RelatedTag, CrossTinyIcon },
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
.related-tag {
  background-color: #d44a6f;
  color: white;
  border: solid 1px white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin: 3px;
}
.related-tags {
  display: flex;
  justify-content: center;
  flex-flow: wrap;
}
#tag-text {
  margin: 5px;
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
.cross-icon {
  height: 24px;
  width: 24px;
  stroke: white;
  margin-left: -3px;
}
</style>
