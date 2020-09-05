<template>
  <div id="app">
    <h1 id="title">The Shoppies Nomination Site</h1>
    <SearchBar/>
    <ResultsList/>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import ResultsList from './components/ResultsList.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
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
  color: white;
  font-weight: bold;
  font-size: 4em;
  margin-bottom: 60px;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: black;
}
</style>