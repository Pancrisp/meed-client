import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
import About from "./views/About.vue";
import SignUp from "./views/SignUp.vue";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";
import Holdings from "./views/Holdings.vue";
import Leaderboard from "./views/Leaderboard.vue";
import Buy from "./views/Buy.vue";
import Sell from "./views/Sell.vue";
import Request from "./views/Request.vue";
import Send from "./views/Send.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: Landing },
    { path: "/about", component: About },
    { path: "/signup", component: SignUp },
    { path: "/login", component: Login },
    { path: "/home", component: Home },
    { path: "/dashboard", component: Dashboard },
    { path: "/holdings", component: Holdings },
    { path: "/leaderboard", component: Leaderboard },
    { path: "/buy", component: Buy },
    { path: "/sell", component: Sell },
    { path: "/request", component: Request },
    { path: "/send", component: Send }
  ]
});
