<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/partials/Footer.vue";

export default {
  components: {
    Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Segoe UI", "Avenir", Helvetica, Arial, sans-serif;
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

*,
*:before,
*:after {
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
  border-radius: 2px;
  font-family: "Segoe UI", "Avenir", Helvetica, Arial, sans-serif;
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

table {
  border-spacing: 0px;
}

.page-title {
  margin: 0 0 1rem 0;
}

.label {
  margin: 0.5rem 0 0 0;
  color: lighten(#333, 30%);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.label-data {
  margin: 0.5rem 0 1rem 0;
}

.btn {
  border: none;
  border-radius: 2px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
}

.center {
  text-align: center;
}

.flex {
  display: flex;
}

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}

.px3 {
  padding: 3rem 0;
}
</style>
