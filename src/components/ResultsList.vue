<template>
  <div class="pageWrapper">
    <div class="contentWrap" v-for="movie in movies" v-bind:key="movie.imdbID">
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
      movies: [], // array of movies to display
      error_text: null
    }
  },
  methods: {
    update_list (data) { // required to have async work properly
    if (data.Response === "True" || this.search_text === '') {
      this.movies = data.Search;
    } 
    else {
      this.$swal({
        icon: 'error',
        title: data.Error
      })
    }
    }
  },
  watch: {
    search_text: {
      handler(new_value) {
        let update_list = this.update_list;
        // get movies 
        fetch(`https://omdbapi.com/?s=${new_value}&type=movie&apikey=5a15e8f`)
          .then(response => response.json())
          .then(data => {
            update_list(data)
          });
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

<style scoped>
.pageWrapper{
  width: 60%;
  display: flex;
  color: white;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  margin-left: auto;
  margin-right: auto;
}

.pageWrapper .contentWrap{
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
  text-align: center;
  width: 15%;
  min-width: 210px;
  min-height: 415px;
}
</style>