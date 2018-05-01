import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import router from "./router.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, user) {
      state.idToken = user.token;
      state.userId = user.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    clearAuth(state) {
      state.idToken = null;
      state.userId = null;
    }
  },
  actions: {
    login({ commit }, data) {
      axios
        .post("http://localhost:5000/users/login", {
          email: data.email,
          password: data.password
        })
        .then(res => {
          console.log(res);
          commit("authUser", {
            token: res.data.token,
            userId: res.data.userId
          });
          router.push("/home");
        });
    },
    logout({ commit }) {
      commit("clearAuth");
      router.replace("/login");
    }
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  }
});
