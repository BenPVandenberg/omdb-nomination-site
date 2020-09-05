<template>
  <div class="pageWrapper">
    <div class="contentWrap" v-for="movie in movies" v-bind:key="movie">
      <MovieView :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieView from './MovieView.vue'

export default {
  name: 'ResultsList',
  components: {
    MovieView
  },
  data () {
    return  {
      movies: ['hi', 'sfdg']
    }
  },
  watch: {
    search_text: {
      handler(new_value) {
        console.log(new_value)
      }
    }
  },
  computed: {
    search_text () {
      return this.$store.state.search_text;
    }
  }
}
</script>

<style>
.pageWrapper{
  display: flex;
  color: white;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
}

.contentWrap{
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: 60%;
  background: rgba(0, 0, 0, 0.54);
  border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
  text-align: center;
}
</style>