import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import router from "./router.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: localStorage.getItem("token"),
    userId: localStorage.getItem("userId"),
    accountId: localStorage.getItem("accountId"),
    idToken: localStorage.getItem("token")
  },
  mutations: {
    authUser(state, user) {
      state.isAuthenticated = true;
      state.userId = user.userId;
      state.idToken = user.token;
    },
    storeAccountId(state, account) {
      state.accountId = account.accountId;
    },
    clearAuth(state) {
      state.isAuthenticated = false;
      state.userId = null;
      state.idToken = null;
      state.accountId = null;
    }
  },
  actions: {
    login({ commit }, data) {
      axios
        .post(`https://fierce-lake-99257.herokuapp.com/users/login`, {
          email: data.email,
          password: data.password
        })
        .then(res => {
          commit("authUser", {
            token: res.data.token,
            userId: res.data.userId
          });
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.userId);
          router.push("/home");
        });
    },
    logout({ commit }) {
      commit("clearAuth");
      localStorage.clear();
      router.replace("/login");
    },
    createNewAccount({ commit }, data) {
      axios
        .post(`https://fierce-lake-99257.herokuapp.com/accounts`, {
          userId: data.userId,
          name: data.name
        })
        .then(res => {
          commit("storeAccountId", {
            accountId: res.data.account._id
          });
          localStorage.setItem("accountId", res.data.account._id);
          if (res.status == 201) {
            router.push("/dashboard");
          }
        });
    },
    setAccountId({ commit }, data) {
      commit("storeAccountId", {
        accountId: data.accountId
      });
      localStorage.setItem("accountId", data.accountId);
      router.push("/dashboard");
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
      return state.isAuthenticated;
    }
  }
});
