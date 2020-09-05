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
      <b-button>Nominate</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieView",
  props: ["movie"],
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
