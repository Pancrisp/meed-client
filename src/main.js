import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase";
import router from "./router";
import store from "./store";

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyB8uW7ccg7vkqhtNSftBfimvgZNOP_ilcI",
    authDomain: "meed-84026.firebaseapp.com",
    databaseURL: "https://meed-84026.firebaseio.com",
    projectId: "meed-84026",
    storageBucket: "",
    messagingSenderId: "1096524670287"
  };
  firebase.initializeApp(config);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
