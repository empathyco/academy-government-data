<template>
  <div class="home">
    <h1>AGD</h1>
    <div class="content-landing-page">
      <p class="intro-text">
        ¿Alguna vez has querido buscar subvenciones en la página oficial del
        gobierno y has acabado desesperado, te ha parecido poco transparente,
        lento o no has encontrado lo que buscas?
      </p>
      <p class="intro-text">
        ¿Te gustaría poder conectar la información para observar posibles
        conexiones o cosas llamativas?
      </p>
      <p class="intro-text">
        ¿O quizás has querido descargar los para tener mayor acceso a ellos y no
        has podido?
      </p>
      <p class="intro-text">
        Incluso puede que nos hayas encontrado por casualidad y te apetezca
        cotillear un poquito por cómo se mueven las subvenciones en España.
      </p>
      <p class="intro-text">Sea como sea... ¡Has venido al sitio correcto!</p>
    </div>
    <h2>Descubre todas las posibilidades...</h2>
    <div class="sections-landing-page">
      <article class="article-container">
        <h2>Explora</h2>
        <p class="intro-text">
          Si lo que te interesa es cotillear un poco, observar cómo conecta todo
          u obtener visualizaciones claras de los datos... ¡Te ofrecemos esto y
          mucho más!
        </p>
        <router-link class="nav-link" to="/explora">
          Continua explorando...
        </router-link>
        <div class="section-container" @click="$router.push('/explora')">
          <div class="chart-container">
            <BubbleChart :series="getData" class="bubble-chart-discovery" />
          </div>
        </div>
      </article>
      <article class="article-container">
        <h2>Busca</h2>
        <p class="intro-text">
          Quizás has recibido una subvención o quieres buscar algunos datos en
          concreto. Con nuestro sistema de búsqueda encontrar lo que buscas será
          pan comido (o al menos más fácil que por la vía convencional)
        </p>
        <router-link class="nav-link" to="/busca">
          Continua buscando...
        </router-link>

        <div class="section-container" @click="$router.push('/busca')">
          <div class="searchinput-container">
            <input
              class="search-input-home"
              type="text"
              placeholder="Empieza a buscar..."
            />
            <SearchStyled></SearchStyled>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BubbleChart from "@/components/insights/charts/BubbleChart.vue";
import { severalSeries } from "@/utils/data/SampleData";
import SearchStyled from "@/components/icons/SearchStyled.vue";

export default Vue.extend({
  name: "HomeView",
  components: { SearchStyled, BubbleChart },
  computed: {
    getData() {
      return severalSeries;
    },
  },
});
</script>

<style>
article,
.content-landing-page {
  margin: 10px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content-landing-page {
  margin: 30px 100px;
}

.article-container {
  display: flex;
  flex-direction: column;
  border: solid 3px #243d48;
  border-radius: 30px;
  height: 100%;
}

a {
  color: var(--font-colour);
  align-self: center;
}
.intro-text {
  font-size: 22px;
  margin: 10px 100px;
  text-align: center;
}
.searchinput-container {
  display: flex;
  border: solid 3px var(--border-color);
  border-radius: 30px;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 10px 20px;
  width: 400px;
}
::placeholder {
  color: #243d48;
}
.search-input-home {
  background: transparent;
  border: none;
  outline: none;
  padding: 30px;
  font-size: 24px;
  width: 80%;
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
  width: 60%;
  display: flex;
  justify-content: center;
}
.nav-link {
  background-color: var(--homeview-explore-button);
  padding: 20px;
  color: var(--font-dark-background-color);
  font-size: 20px;
  font-weight: bold;
  border-radius: 30px;
  text-decoration: none;
  margin-top: 30px;
}
</style>
