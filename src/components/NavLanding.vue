<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/signup">Sign Up</router-link>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
export default {
  name: "NavLanding",
}
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  text-align: center;
  a {
    margin: 0 1rem;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #f4ce42;
    }
  }
}
</style>
