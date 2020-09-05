<template>
  <div>
    <div class="content">
      <img :src="movie.Poster" class="poster" />
    </div>
    <div class="content">
      {{ movie.Title }}
    </div>
    <div class="content">
      {{ movie.Year }}
    </div>
    <div>
      <b-button @click="nominate" :disabled="is_nominated">Nominate</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieView",
  props: ["movie"], // movie data to display
  data () {
    return {
      is_nominated: false //  if the user has nominated this title
    }
  },
  methods: {
    nominate () {
      this.$store.commit('ADD_NOMINATION', this.movie);
    }
  },
  computed: {
    nominations () {
      return this.$store.state.nominations;
    }
  },
  watch: {
    nominations: {
      handler(new_value) {
        // go through nominations checking for this one
        for (let movie in new_value) {
          if (new_value[movie].imdbID === this.movie.imdbID) {
            this.is_nominated = true;
            return;
          }
        }
        this.is_nominated = false;
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.content{
  padding-bottom: 10px;
}
.poster {
  width: 150px;
  height: 200px;
}
</style>
