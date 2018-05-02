<template>
  <div class="container center">
    <Header/>
    <img src="../assets/logo_horizontal.png">
    <form @submit.prevent="login">
      <input v-model="email" type="text" placeholder="Email">
      <input v-model="password" type="password" placeholder="Password">
      <p><router-link to="/reset">Forgot your password?</router-link></p>
      <input type="submit" value="Login">
    </form>
    <p>Don't have an account? <a href="#/signup">Sign up for free</a></p>
  </div>
</template>

<script>
import Header from "@/components/partials/Header.vue";

export default {
  components: {
    Header
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  height: 120px;
  margin: 1.5rem 0;
}

input[type="submit"] {
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
