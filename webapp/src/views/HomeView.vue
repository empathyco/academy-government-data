<template>
  <div class="home">
    <img
      src="@/assets/edg/esp_icon_text.svg"
      alt="Ecosistema De Datos Del Gobierno"
      class="logo-header"
    />
    <div class="content-landing-page">
      <div class="text-container">
        <p class="intro-text">
          ¿Alguna vez has querido buscar subvenciones en la página oficial del
          gobierno y has acabado desesperado? ¿Te ha parecido poco transparente,
          lento o no has encontrado lo que buscas?
        </p>
        <p class="intro-text">
          ¿Te gustaría poder conectar la información para observar posibles
          conexiones o cosas llamativas?
        </p>
        <p class="intro-text">
          ¿O quizás has querido descargarlos para tener mayor acceso a ellos y
          no has podido?
        </p>
        <p class="intro-text">
          Incluso puede que nos hayas encontrado por casualidad y te apetezca
          indagar un poco cómo se mueven las subvenciones en España.
        </p>
        <p class="intro-text">Sea como sea... ¡Has venido al sitio correcto!</p>
      </div>
    </div>
    <h4 class="descubre-title">¡Descubre todas las posibilidades!</h4>
    <div class="sections-landing-page">
      <article class="article-container">
        <h3>Busca</h3>
        <p class="intro-text option-box">
          Quizás has recibido una subvención o quieres buscar algunos datos en
          concreto. Con nuestro sistema de búsqueda encontrar lo que buscas será
          pan comido (o al menos más fácil que por la vía convencional)
        </p>
        <router-link class="nav-link" to="/busca">
          Empieza a buscar
        </router-link>

        <div class="section-container" @click="$router.push('/busca')">
          <div class="chart-container">
            <GrantCard :item="item" class="card-example" />
          </div>
        </div>
      </article>
      <article class="article-container">
        <h3>Explora</h3>
        <p class="intro-text option-box">
          Si lo que te interesa es cotillear un poco, observar cómo conecta todo
          u obtener visualizaciones claras de los datos... ¡Te ofrecemos esto y
          mucho más!
        </p>
        <router-link class="nav-link" to="/explora">
          Empieza a explorar
        </router-link>
        <div class="section-container" @click="$router.push('/explora')">
          <div class="chart-container">
            <DiscoverCard :item="itemDiscovery" class="card-example" />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { bidSample, singleSerie } from "@/utils/data/SampleData";
import GrantCard from "@/components/search/details/GrantCard";
import DiscoverCard from "@/components/insights/DiscoverCard";

export default Vue.extend({
  name: "HomeView",
  components: { GrantCard, DiscoverCard },
  data() {
    return {
      item: bidSample,
      itemDiscovery: {
        title: "Ejemplo de gráfica de barras",
        data: singleSerie,
        modelName: "wordcloud",
        tags: [
          {
            label: "Asturias",
            modelName: "SimpleFilter",
            selected: false,
            id: "asturias",
            value: "asturias",
            facetId: "asturias",
            type: "regionImpacto",
            totalResults: 1,
          },
          {
            label: "Industria",
            modelName: "SimpleFilter",
            selected: false,
            id: "industria",
            value: "industria",
            facetId: "industria",
            type: "organo",
            totalResults: 1,
          },
          {
            label: "2019",
            modelName: "SimpleFilter",
            selected: false,
            id: "2019",
            value: "2019",
            facetId: "2019",
            type: "departamento",
            totalResults: 1,
          },
        ],
      },
    };
  },
  beforeMount() {
    this.$store.commit("emptyColorMap");
    this.$store.dispatch("initializeDictionary", [
      "regionImpacto",
      "organo",
      "departamento",
      "tipoBeneficiario",
    ]);
  },
});
</script>

<style lang="scss" scoped>
.home {
  max-width: 1400px;
  margin-inline: auto;
}

.descubre-title {
  font-size: 40px;
  text-align: center;
}

article {
  margin: 10px 50px;
  display: flex;
  flex-direction: column;
}

.logo-header {
  height: 50%;
  width: 50%;
  display: block;
  margin: 0 auto 50px;
}

.content-landing-page {
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  background-color: var(--empathy-gray);
  border-radius: 30px;
  padding: 30px;
  margin-inline: 48px;
}

.article-container {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  background-color: var(--empathy-gray);
  border-radius: 30px;
  height: 100%;
}

a {
  color: var(--font-colour);
  align-self: center;
}

.intro-text {
  font-size: 22px;
  padding-block: 10px;
}

.option-box {
  min-height: 150px;
}

.card-example {
  background-color: var(--card-background-color);
  pointer-events: none;
}
.section-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.chart-container {
  cursor: pointer;
  width: 80%;
  display: flex;
  justify-content: center;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: bottom;

  &:hover {
    animation-name: bounce;
    animation-timing-function: ease;
  }
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.nav-link {
  background-color: var(--homeview-explore-button);
  padding: 20px;
  color: var(--font-dark-background-color);
  font-size: 20px;
  font-weight: bold;
  border-radius: 30px;
  text-decoration: none;
  margin-block: 20px;
  transition: background-color 300ms;

  &:hover {
    background-color: var(--homeview-explore-button-hover);
  }
}

.discover-card {
  border-color: transparent;
}

.highcharts-figure {
  margin: 0;
}
</style>
