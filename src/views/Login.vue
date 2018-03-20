<template>
  <div>
    <img src="../assets/logo_horizontal.png">
    <form>
      <input type="text" placeholder="Email">
      <input type="password" placeholder="Password">
      <input type="button" value="Login">
    </form>
    <p>Don't have an account? <a href="#/signup">Sign up for free</a></p>
  </div>
</template>

<style lang="scss" scoped>
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
