import "@babel/polyfill";
import "mutationobserver-shim";
import "./plugins/bootstrap-vue";
import "./plugins/fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
