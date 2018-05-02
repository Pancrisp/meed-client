<template>
  <div class="container center">
    <Header/>
    <img src="../assets/logo_horizontal.png">
    <form>
      <h2>Reset your password</h2>
      <p>Enter your email address below and we'll send you a link to reset your password.</p>
      <input type="text" placeholder="Email">
      <input type="button" value="Send reset password email">
    </form>
  </div>
</template>

<script>
import Header from "@/components/partials/Header.vue";

export default {
  components: {
    Header
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
