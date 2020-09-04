import Vue from 'vue'
import App from './App.vue'
import store from './store'
// eslint-disable-next-line no-unused-vars
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm' 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

new Vue({
  components: { App },
  store,
  template: '<App/>'
}).$mount('#app')