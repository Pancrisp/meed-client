import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
import About from "./views/About.vue";
import SignUp from "./views/SignUp.vue";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: Landing },
    { path: "/about", component: About },
    { path: "/signup", component: SignUp },
    { path: "/login", component: Login },
    { path: "/home", component: Home },
    { path: "/dashboard", component: Dashboard }
  ]
});
