<template>
  <div id="app">
    <nav>
      <router-link to="/"
        ><CustomButton :route="'/'">
          <template v-slot:icon
            ><i class="material-symbols-outlined"> home </i></template
          >
          <template v-slot:text><a>Inicio</a></template>
        </CustomButton></router-link
      >
      <router-link to="/busca"
        ><CustomButton :route="'/busca'">
          <template v-slot:icon
            ><i class="material-symbols-outlined"> search </i></template
          >
          <template v-slot:text><a>Busca</a></template>
        </CustomButton></router-link
      >
      <router-link to="/explora">
        <CustomButton :route="'/explora'">
          <template v-slot:icon
            ><i class="material-symbols-outlined"> auto_graph </i></template
          >
          <template v-slot:text><a>Explora</a></template>
        </CustomButton></router-link
      >
      <router-link to="/info">
        <CustomButton :route="'/info'">
          <template v-slot:icon
            ><i class="material-symbols-outlined"> info </i></template
          >
          <template v-slot:text><a>Info</a></template>
        </CustomButton></router-link
      >
    </nav>
    <router-view class="view" />
    <footer>
      <img
        src="@/assets/edg/esp_icon_text.svg"
        alt="Ecosistema De Datos Del Gobierno"
        class="logo-footer"
      />
      <div class="footer-links">
        <a
          href="https://github.com/empathyco/academy-government-data"
          target="”_blank”"
          ><img
            src="@/assets/icons/github_icon.svg"
            class="link-icon"
            alt="Link to EDG's Github"
        /></a>
        <a href="https://www.linkedin.com/company/empathyco/" target="”_blank”"
          ><img
            src="@/assets/icons/linkedin_icon.svg"
            class="link-icon"
            alt="Link to Empathy's LinkedIn"
        /></a>
        <a
          href="https://twitter.com/EmpathyCo_?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor9"
          target="”_blank”"
          ><img
            src="@/assets/icons/tw_icon.svg"
            class="link-icon"
            alt="Link to Empathy's Twitter"
        /></a>
      </div>
      <a href="https://www.empathy.co/" class="footer-link">
        powered by empathy.co
      </a>
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
  --homeview-explore-button: #244b5b;
  --homeview-explore-button-hover: #1e6885;
  --font-dark-background-color: rgb(255, 255, 255);
  --border-color: #243d48;
  --card-background-color: #d9e9f0;
}
#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-colour);

  body {
    font-size: 1rem;
    font-weight: 300;
  }

  h1 {
    font-size: 3.3125rem;
    font-weight: bold;
    line-height: 4.3125rem;
    text-align: center;
  }

  h2 {
    font-size: 36px;
    font-weight: 600;
    line-height: 36px;
  }

  h3 {
    font-size: 36px;
    font-weight: 600;
    line-height: 36px;
  }

  h1,
  h2,
  h3 {
    text-align: center;
  }

  p {
    line-height: 1.5;
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
    text-decoration: none;
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
  padding-inline: 0;
  list-style-type: none;
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
.logo-footer {
  height: 30%;
  width: 30%;
  margin-left: 50px;
  margin-bottom: 50px;
}
.footer-links {
  display: flex;
}
.footer-link {
  margin-right: 50px;
}
.profile-links {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 12px;
}
.link-icon {
  margin-right: 12px;
  height: 24px;
  width: 24px;
}
</style>
<script>
import CustomButton from "@/components/CustomButton";
export default {
  components: { CustomButton },
};
</script>
