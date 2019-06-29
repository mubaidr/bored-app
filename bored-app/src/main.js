import "bulma";
import Vue from "vue";
import App from "./App.vue";
import "./assets/animations.scss";
import "./assets/main.scss";
import "./plugins/axios";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
