<template class="search-group">
  <div class="x-input-group">
    <i class="fa fa-search fa-x"></i>
    <SearchInput placeholder="Busca aquí tus filtros" class="search" />
    <ClearSearchInput class="clear-search-button">X</ClearSearchInput>
  </div>
</template>

<script lang="ts">
import {
  ClearSearchInput,
  SearchButton,
  SearchInput,
} from "@empathyco/x-components/search-box";
import { SearchIcon } from "@empathyco/x-components";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {
    ClearSearchInput,
    SearchButton,
    SearchIcon,
    SearchInput,
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
}
.fa-search {
  margin-top: 4px;
  font-weight: bold;
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
