<template>
  <div class="pageWrapper" v-if="nominations.length !== 0">
    <div class="contentWrap">
      <div style="text-align:left;">
        <b-button class="del_nomination_button" v-for="movie in nominations" v-bind:key="movie.imdbID" @click="del_nomination(movie)">
          {{ movie.Title }}
          <font-awesome-icon icon="times"/>
        </b-button>
      </div>
      <div style="text-align:right;">
        {{ nominations.length }}/5
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data: function () {
    return {
      movie_search_text: null
    }
  },
  methods: {
    search ()  {
      // if not empty
      if (this.movie_search_text.trim()){
        // update store with new value
        this.$store.commit('UPDATE_SEARCH_TEXT', this.movie_search_text)
      }
    },
    del_nomination (movie) {
      this.$store.commit('REMOVE_NOMINATION', movie)
    }
  },
  computed: {
    nominations () {
      return this.$store.state.nominations;
    }
  }
}
</script>

<style scoped>
.pageWrapper{
  display: flex;
  color: white;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 20px;
}

.contentWrap{
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 60%;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
  text-align: center;
}

.del_nomination_button{
  margin-right: 5px;
  margin-bottom: 5px;
}

.del_nomination_button:hover{
  color: rgb(126, 0, 0);
}
</style>