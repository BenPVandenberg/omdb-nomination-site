<template>
  <div class="pageWrapper">
    <div class="contentWrap">
      <b-row>
        <b-col>
          <b-form-input v-model="movie_search_text" placeholder="Movie Search" @keydown.enter.native="search"></b-form-input>
        </b-col>
        <b-col md="auto">
          <font-awesome-icon id="search_icon" icon="search" size="2x" @click="search" />
        </b-col>
      </b-row>
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

#search_icon:hover{
  cursor: pointer;
}
</style>