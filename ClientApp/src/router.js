import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
import About from "./views/About.vue";
import SignUp from "./views/SignUp.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
