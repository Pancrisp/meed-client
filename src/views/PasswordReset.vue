<template>
  <div class="container center">
    <Header/>
    <img src="../assets/logo_horizontal.png">
    <form @submit.prevent="resetPassword">
      <h2>Reset your password</h2>
      <p>Enter your email address below and we'll send you a link to reset your password.</p>
      <input type="text" v-model="email" placeholder="Email">
      <input type="submit" value="Send reset password email">
    </form>
  </div>
</template>

<script>
import axios from "axios";

import Header from "@/components/partials/Header.vue";

export default {
  components: {
    Header
  },
  data() {
    return {
      token: "",
      email: "",
      password: ""
    };
  },
  methods: {
    resetPassword() {
      axios
        .post(`https://fierce-lake-99257.herokuapp.com/password_reset/reset`, {
          token: this.token,
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res);
          setTimeout(() => {
            this.$router.push("/login");
          }, 2000);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 400px;
  margin: 0 auto;
}

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
