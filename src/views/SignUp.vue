<template>
  <div class="container center">
    <h1>Create your trading account</h1>
    <form>
      <input type="text" placeholder="Name">
      <input type="email" placeholder="Email">
      <input type="password" placeholder="Password">
      <input type="button" value="Sign up">
    </form>
    <p>
      Already have an account? <a href="#/login">Sign in</a>
    </p>
  </div>
</template>

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
