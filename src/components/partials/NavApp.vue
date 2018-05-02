<template>
  <nav class="menu">
    <div class="ctg">
      <h4 class="ctg-title">Browse</h4>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/review">Account review</router-link>
      <router-link to="/leaderboard">Leaderboard</router-link>
    </div>
    <div class="ctg">
      <router-link to="/home">Switch account</router-link>
      <button @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavApp",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  display: block;
  margin-right: 32px;
  padding: 8px 0 8px 16px;
  color: #333;
  line-height: 1.25;
  font-weight: 500;

  &.router-link-exact-active {
    background: #fff;
    box-shadow: inset 4px 0 0 0 var(--primary-color);
  }

  &:hover {
    background: #fff;
  }
}

.menu {
  width: 20%;
}

.ctg {
  margin-bottom: 2rem;
}
.ctg-title {
  margin: 0 0 8px 0;
  color: lighten(#333, 30%);
  font-weight: 500;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
