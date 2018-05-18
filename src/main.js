import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;


// import highcharts from "vue-highcharts";



// Global filters
Vue.filter("currency", value => {
  return value.toLocaleString("en-AU", { style: "currency", currency: "AUD" });
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
