<template>
  <div class="discover-card">
    <CardRelatedTags :relatedTags="itemFilters" />
    <p class="grant-id">{{ item.id }}</p>
    <p class="grant-name">{{ item.titulo_convocatoria }}</p>
    <div class="parallel-attributes">
      <div class="titled-attribute">
        <p>Fecha concesión</p>
        <p class="date">{{ item.fecha_concesion }}</p>
      </div>
    </div>
    <div class="parallel-attributes">
      <div class="titled-attribute">
        <p>Cantidad total</p>
        <p class="highlighted-value">{{ item.ayuda_equivalente }} €</p>
      </div>
      <div class="titled-attribute">
        <p>Concesión</p>
        <a
          class="highlighted-value"
          :href="item.url_bases_regul"
          target="”_blank”"
          >Link
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
    <div class="titled-attribute">
      <p>Adjudicador</p>
      <p class="highlighted-value">{{ item.departamento }}</p>
    </div>
    <div class="bottom-corner">
      <router-link to="/busca/1"
        ><p>See more <i class="fa-solid fa-link"></i></p
      ></router-link>
    </div>
  </div>
</template>

<script>
import CardRelatedTags from "@/components/tags/CardRelatedTags";
import { fromItemToFilters } from "@/utils/methods/BidItemToFilter";

export default {
  // Basic component that represent the essential content of a grant given
  name: "GrantCard",
  components: { CardRelatedTags },
  data() {
    return {
      itemFilters: [],
    };
  },
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
  beforeMount() {
    this.itemFilters = fromItemToFilters(this.item).filter(
      (item) => item !== null
    );
  },
};
</script>

<style scoped lang="scss">
.discover-card {
  background-color: var(--empathy-gray);
  border-radius: 30px;
  padding: 10px;
  margin: 10px;
}
p {
  margin-top: 0;
  font-size: 16px;
  font-weight: bold;
}

a {
  margin: 0 1rem 0 3rem;
  text-decoration: none;
  color: rgb(60, 134, 145);
  transition: color 300ms;

  &:hover {
    color: rgb(83, 185, 201);
  }
}

.grant-id {
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
}
.grant-name {
  font-size: 22px;
  font-weight: bold;
}
.parallel-attributes {
  display: grid;
  grid-template-columns: 50% 50%;
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
.bottom-corner {
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
}
.plus-symbol {
  position: relative;
  top: 7px;
}
</style>
