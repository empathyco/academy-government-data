<template>
  <MultiColumnMaxWidthLayout>
    <template #header-middle>
      <!-- Search header with the title and the search box -->
      <h1>Busca</h1>
      <div
        class="x-list x-list--vertical x-list--gap-05 x-list--align-stretch x-list__item--expand"
      >
        <SearchBoxComponent placeholder="Comienza a buscar subvenciones" />
      </div>
    </template>
    <template #sub-header>
      <!-- Predictive layer for the suggestions and the filters selected TODO: extract component for the same as in discovery view -->
      <PredictiveLayer />
      <div class="filter-container">
        <SelectedFiltersList :class="`filters-list`" v-slot="{ filter }">
          <TagFilter :filter="filter" />
        </SelectedFiltersList>
      </div>
      <!--
      <div class="related-tags">
        <SelectedFiltersList class="filter-list">
          <template #default="{ filter }">
            <SimpleFilter class="x-tag" :filter="filter" />
          </template>
        </SelectedFiltersList>
        <RelatedTags>
          <template #related-tag="{ relatedTag }">
            <div class="related-tag">
              <p id="tag-text">{{ relatedTag.tag }}</p>
              <CrossTinyStyled @click="removeTag(relatedTag.tag)" />
            </div>
          </template>
        </RelatedTags>
      </div>
      <PredictiveLayer></PredictiveLayer>-->
    </template>
    <template #main-body>
      <!-- Main body where the grant cards are displayed -->
      <div class="main-body-search">
        <div class="search-text" v-if="isEmptyQuery()">
          <h3>¡Comienza tu búsqueda ahora!</h3>
          <p>
            Para comenzar con tu búsqueda introduce un concepto, lugar o fecha.
            Por ejemplo, buscar por conceptos como "Teatro", "Industria" o
            "Campo", lugares como "Oviedo" o "Avilés" o incluso por fechas.
          </p>
          <h3>Refina por tags</h3>
          <p>
            Una vez tengas tu búsqueda puedes filtrar aún más con las tags que
            acompañan a las tarjetas de los resultados. Seleccionar una hará que
            aparezcan únicamente resultados cuando cumplan con esas etiquetas
          </p>
        </div>
        <img
          src="@/assets/icons/loading.gif"
          class="loading-gif"
          alt="Cargando resultados"
          v-else-if="isLoading()"
        />
        <div class="search-text" v-else-if="hasNotResult()">
          <h3>Ups, parece que no hemos encontrado nada...</h3>
          <p>
            Es posible que no podamos encontrar la búsqueda porque aún no la
            tengamos en nuestra base de datos o que no exista una subvención
            para el concepto que estás buscando.
          </p>
          <p>¡No desesperes y prueba con otro concepto!</p>
        </div>
        <GrantCardGrid />
      </div>
    </template>
  </MultiColumnMaxWidthLayout>
</template>

<script>
import { MultiColumnMaxWidthLayout } from "@empathyco/x-components";

import SearchBoxComponent from "@/components/search/SearchBoxComponent";
import GrantCardGrid from "@/components/search/details/GrantCardGrid";

import { SelectedFiltersList } from "@empathyco/x-components/facets";
import TagFilter from "@/components/tags/TagFilter";
import PredictiveLayer from "@/components/search/empathize/PredictiveLayer";

export default {
  name: "SearchView",
  components: {
    MultiColumnMaxWidthLayout,
    SearchBoxComponent,
    GrantCardGrid,
    SelectedFiltersList,
    TagFilter,
    PredictiveLayer,
  },
  methods: {
    isEmptyQuery() {
      return !this.$store.state.x.searchBox.query;
    },
    isLoading() {
      return this.$store.state.x.search.status === "loading";
    },
    hasNotResult() {
      console.log(this.$store.state.x.search.results);
      return (
        this.$store.state.x.search.query &&
        this.$store.state.x.search.status !== "loading" &&
        this.$store.state.x.search.results.length === 0
      );
    },
  },
  beforeMount() {
    this.$store.commit("emptyColorMap");
    this.$store.dispatch("initializeDictionary", [
      "regionImpacto",
      "organo",
      "departamento",
      "tipoBeneficiario",
    ]);
  }, //TODO grosor líneas
};
</script>

<style scoped>
.x-list__item--expand {
  display: flex;
  justify-content: center;
}
h1 {
  margin-top: 0;
}
.search-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  background-color: var(--empathy-gray);
  border-radius: 30px;
  padding: 30px;
  margin-inline: 48px;
}
.search-text > p {
  font-size: 20px;
  min-width: 300px;
  width: 60%;
}
.loading-gif {
  height: 7%;
  width: 7%;
  display: block;
  margin: 100px auto;
}
</style>
