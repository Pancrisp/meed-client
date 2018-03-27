<template>
  <div class="center">
    <Header/>
    <h1>Create your trading account</h1>
    <form @submit.prevent>
      <input type="text" v-model="name" placeholder="Name">
      <input type="email" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <input type="button" @click="signUp" value="Sign up">
    </form>
    <p>
      Already have an account? <a href="#/login">Sign in</a>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  },
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      axios
        .post("http://localhost:5000/users/", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 3rem;
}

input[type="button"] {
  color: #333;
  background-color: #f4ce42;
  border: none;
  transition: 200ms ease;
  cursor: pointer;

  &:hover {
    background-color: darken(#f4ce42, 10%);
  }
}
</style>
