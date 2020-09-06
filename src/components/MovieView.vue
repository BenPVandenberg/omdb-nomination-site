<template>
  <div>
    <div class="content">
      <img v-if="movie.Poster !== 'N/A'" :src="movie.Poster" class="poster" />
      <img v-else src="../assets/NoPhotoAvailable.jpg" class="poster" />
    </div>
    <div class="content">
      {{ movie.Title }}
    </div>
    <div class="content">
      {{ movie.Year }}
    </div>
    <div>
      <b-button @click="nominate" :hidden="is_nominated" :disabled="!button_state">Nominate</b-button>
      <!-- source for checkmark https://stackoverflow.com/questions/41078478/css-animated-checkmark -->
      <svg :hidden="!is_nominated" class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
        <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieView",
  props: ["movie"], // movie data to display
  data () {
    return {
      is_nominated: false, //  if the user has nominated this title
      button_state: true
    }
  },
  methods: {
    nominate () {
      this.$store.commit('ADD_NOMINATION', this.movie);

      // tells user if max nominations has been hit
      if (this.nominations.length === 5) {
        this.$swal({
          title: 'Max Nominations Reached',
          icon: 'success'
        })
      }
    },
    update () {
      this.get_is_nominated()
      this.get_is_max_hit()
    },
    get_is_nominated () {
      // go through nominations checking for this one
      for (let movie in this.nominations) {
        if (this.nominations[movie].imdbID === this.movie.imdbID) {
          this.is_nominated = true;
          return;
        }
      }
      this.is_nominated = false;
    },
    get_is_max_hit () {
      this.button_state = this.nominations.length < 5
    }
  },
  computed: {
    nominations () {
      return this.$store.state.nominations;
    }
  },
  watch: {
    nominations: {
      handler() {
        this.update()
      },
      deep: true
    }
  },
  created () {
    // check if its already been nominated
    this.update()
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

/* checkmark animation */
.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
}
</style>
