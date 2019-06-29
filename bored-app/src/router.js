import Vue from "vue";
import Router from "vue-router";
import Activities from "./views/Activities.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/activities",
      name: "activities",
      component: Activities
    },
    {
      path: "*",
      redirect: "/activities"
    }
  ]
});
