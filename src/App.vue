<template>
  <div id="app">
    <h1 id="title">The Shoppies Nomination Site</h1>
    <SearchBar/>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'App',
  components: {
    SearchBar
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
  background-size: cover;
}
</style>
