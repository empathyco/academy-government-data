<template class="search-group">
  <div class="x-input-group">
    <SearchIcon class="x-icon"></SearchIcon>
    <SearchInput placeholder="Busca aquí tus filtros" class="search" />
    <ClearSearchInput class="clear-search-button">
      <CrossIcon class="x-icon"></CrossIcon>
    </ClearSearchInput>
  </div>
</template>

<script lang="ts">
import {
  ClearSearchInput,
  SearchButton,
  SearchInput,
} from "@empathyco/x-components/search-box";
import { SearchIcon, CrossIcon } from "@empathyco/x-components";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {
    ClearSearchInput,
    SearchButton,
    SearchIcon,
    SearchInput,
    CrossIcon,
  },
})
export default class SearchBox extends Vue {}
</script>
<style>
.search-group {
  display: flex;
  justify-content: center;
}
.x-input-group {
  border: solid 5px #243d48;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  width: 80%;
  min-width: 300px;
  padding: 5px 15px;
  margin-bottom: 4px;
}
.x-icon {
  width: 24px;
  height: 24px;
  stroke: #243d48;
  padding-top: 5px;
}
.search {
  border: none;
  width: 100%;
  padding: 0px 10px;
  font-family: Montserrat;
  font-size: 1rem;
  color: #243d48;
}
.search::placeholder {
  font-family: Montserrat;
  color: #243d48;
}
.search:focus {
  outline: none;
}
.clear-search-button {
  color: #243d48;
  background-color: white;
  border: none;
  font-size: 20px;
  font-weight: bold;
}
</style>
