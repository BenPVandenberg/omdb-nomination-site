<template>
  <div id="app">
    <h1 id="title">Shoppies Movie Nominations</h1>
    <SearchBar/>
    <NominationView/>
    <ResultsList/>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import NominationView from './components/NominationView.vue'
import ResultsList from './components/ResultsList.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    NominationView,
    ResultsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  background-image: url("./assets/pattern.jpg");
}

#title{
  color: rgb(218, 218, 218);
  font-weight: bold;
  font-size: 4em;
  margin-bottom: 60px;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: black;
}
</style>