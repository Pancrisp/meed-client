<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Segoe UI', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
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

.container {
  max-width: 1200px;
  margin: 0 auto;
}
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  background-color: #f4f7fa;
  height: 100vh;
}

a {
  text-decoration: none;
}

input {
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 1rem auto;
  padding: 0.8rem;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  font-family: 'Segoe UI', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
}

input:focus {
  outline: 0;
  border-color: #4261a2;
}

input::placeholder {
  color: #afafaf;
}

.center {
  text-align: center;
}
</style>
