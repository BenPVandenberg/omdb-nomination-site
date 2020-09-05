import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    search_text: null,
    nominations: []
  }),
  mutations: {
    UPDATE_SEARCH_TEXT(state, new_value) {
      state.search_text = new_value;
    },
    ADD_NOMINATION(state, to_add) {
      state.nominations.push(to_add);
    },
    REMOVE_NOMINATION(state, to_remove) {
      var filteredAry = state.nominations.filter(function(e) { return e !== to_remove });
      state.nominations = filteredAry;
    }
  }
})
