import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    authUser(state, user) {
      state.idToken = user.token;
      state.userId = user.userId;
    }
  },
  actions: {
    signup({ commit }, data) {
      axios
        .post("https://fierce-lake-99257.herokuapp.com/users/signup", {
          name: data.name,
          email: data.email,
          password: data.password
        })
        .then(res => {
          console.log(res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.userId
          });
        });
    },
    login({ commit }, data) {
      axios
        .post("https://fierce-lake-99257.herokuapp.com/login", {
          email: data.email,
          password: data.password,
          returnSecureToken: true
        })
        .then(res => {
          console.log(res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.userId
          });
        });
    }
  }
});
