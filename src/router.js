import Vue from "vue";
import Router from "vue-router";
import store from "./store.js";

import Landing from "./views/Landing.vue";
import About from "./views/About.vue";
import SignUp from "./views/SignUp.vue";
import Login from "./views/Login.vue";
import Reset from "./views/Reset.vue";
import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";
import Review from "./views/Review.vue";
import Admin from "./views/Admin.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Landing },
    { path: "/about", component: About },
    { path: "/signup", component: SignUp },
    { path: "/login", component: Login },
    { path: "/reset", component: Reset },
    {
      path: "/home",
      component: Home,
      beforeEnter(to, from, next) {
        if (store.state.idToken) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/dashboard",
      component: Dashboard,
      beforeEnter(to, from, next) {
        if (store.state.idToken) {
          next();
        } else {
          next("/login");
        }
      }
    },
    { path: "/review", component: Review },
    { path: "/admin", component: Admin }
  ]
});
