import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import router from "./router.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
    accountId: null
  },
  mutations: {
    authUser(state, user) {
      state.idToken = user.token;
      state.userId = user.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    storeAccountId(state, account) {
      state.accountId = account.accountId;
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
    },
    createNewAccount({ commit }, data) {
      axios
        .post("http://localhost:5000/accounts", {
          userId: data.userId,
          name: data.name
        })
        .then(res => {
          commit("storeAccountId", {
            accountId: res.data.account._id
          });
          if (res.status == 201) {
            router.push("/dashboard");
          }
        });
    }
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    accountId(state) {
      return state.accountId;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  }
});
