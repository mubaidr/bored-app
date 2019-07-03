// import "bulma";
import "bulma-pro/bulma.sass";
import Vue from "vue";
import Toasted from "vue-toasted";
import App from "./App.vue";
import "./assets/animations.scss";
import "./assets/font-awesome-4.7.0/css/font-awesome.min.css";
import "./assets/main.scss";
import "./plugins/axios";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.use(Toasted, {
  iconPack: "fontawesome",
  type: "info",
  duration: 2000,
  position: "bottom-center",
  icon: "info"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
