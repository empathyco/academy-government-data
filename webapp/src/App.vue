<template>
  <div id="app">
    <nav>
      <router-link to="/"
        ><i class="material-symbols-outlined home"> home </i></router-link
      >
      <router-link to="/busca"
        ><i class="material-symbols-outlined search"> search </i></router-link
      >
      <router-link to="/explora"
        ><i class="material-symbols-outlined explora">
          auto_graph
        </i></router-link
      >
      <router-link to="/info"
        ><i class="material-symbols-outlined info"> info </i></router-link
      >
    </nav>
    <router-view class="view" />
    <footer>
      <a href="https://www.empathy.co/"> powered by empathy.co </a>
    </footer>
  </div>
</template>
<style lang="scss">
:root {
  //Colours that will be used in the web
  --background-colour: rgb(255, 255, 255);
  --font-colour: #243d48;
  --empathy-black: --font-colour;
  --empathy-red: #d44a6f;
  --empathy-gray: #f5f6f7;
  --font-selected-link: #53b9c9;
  --font-unselected-link: #243d48;
  --homeview-explore-button: #d44a6f;
  --font-dark-background-color: rgb(255, 255, 255);
  --border-color: #243d48;
}
#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--font-colour);

  body {
    font-size: 1rem;
    font-weight: 300;
  }

  h1 {
    font-size: 3.3125rem;
    font-weight: bold;
    line-height: 4.3125rem;
  }

  h2 {
    font-size: 36px;
    font-weight: 600;
    line-height: 36px;
  }

  p {
    text-align: justify;
    margin-left: 3rem;
    margin-right: 3rem;
  }

  .sections-landing-page {
    display: grid;
  }

  @media only screen and (min-width: 640px) {
    .sections-landing-page {
      grid-template-columns: 100%;
    }
  }

  @media only screen and (min-width: 750px) {
    .sections-landing-page {
      grid-template-columns: 50% 50%;
    }
  }
}

nav {
  padding: 20px 20px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  a {
    margin-right: 10px;
    padding: 8px 10px;
    color: var(--font-unselected-link);
    background-color: white;
    border: solid 2px;
    border-radius: 30px;
    transition: 0.5s;

    &.router-link-exact-active {
      color: var(--font-selected-link);
    }
  }

  i:hover {
    margin-right: 0;
  }

  i:hover:after {
    content: "Otro";
    margin-right: -10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 22px;
    opacity: 1;
    top: -4px;
  }

  i:after {
    content: " ";
    position: relative;
    opacity: 0;
    top: -20px;
    left: -15px;
    -webkit-transition: all 1s;
    transition: all 1s;
  }

  .home:hover:after {
    content: "Inicio";
  }
  .search:hover:after {
    content: "Busca";
  }
  .explora:hover:after {
    content: "Explora";
  }
  .info:hover:after {
    content: "Info";
  }
}
.view {
  margin-bottom: 200px;
  margin-top: 80px;
}
footer {
  display: flex;
  justify-content: space-between;
  a {
    color: var(--font-colour);
    text-decoration: none;
    align-self: center;
  }
  margin-bottom: 20px;
}
.filters-list {
  display: flex;
  justify-content: center;
  flex-flow: wrap;
}
.filter {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: bold;
  color: white;
  border: solid 1px white;
  border-radius: 30px;
  margin: 3px;
}
.discovery-filter {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: -10px;
}
#filter-label {
  margin: 10px 10px;
}
</style>
