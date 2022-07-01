<template class="search-group">
  <div class="x-input-group">
    <SearchStyled></SearchStyled>
    <SearchInput :placeholder="placeholder" class="search-input" />
    <ClearSearchInput class="clear-search-button">
      <CrossStyled></CrossStyled>
    </ClearSearchInput>
  </div>
</template>

<script lang="ts">
import {
  ClearSearchInput,
  SearchButton,
  SearchInput,
} from "@empathyco/x-components/search-box";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import SearchStyled from "@/components/icons/SearchStyled.vue";
import CrossStyled from "@/components/icons/CrossStyled.vue";

@Component({
  components: {
    CrossStyled,
    SearchStyled,
    ClearSearchInput,
    SearchButton,
    SearchInput,
  },
  props: ["placeholder"],
})
export default class SearchBox extends Vue {}
</script>
<style>
.search-group {
  display: flex;
  justify-content: center;
}
.x-input-group {
  border: solid 3px var(--border-color);
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  width: 80%;
  min-width: 300px;
  padding: 5px 15px;
  margin-bottom: 4px;
}
.search-input {
  border: none;
  width: 100%;
  padding: 0 10px;
  font-size: 1rem;
  color: var(--font-colour);
}
.search-input::placeholder {
  color: var(--font-colour);
}
.search-input:focus {
  outline: none;
}
.clear-search-button {
  color: var(--font-colour);
  background-color: var(--background-colour);
  border: none;
  font-size: 20px;
  font-weight: bold;
  padding-top: 5px;
}
</style>
