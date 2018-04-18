<template>
  <nav class="menu">
    <div class="ctg">
      <h4 class="ctg-title">Browse</h4>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/review">Account review</router-link>
      <router-link to="/leaderboard">Leaderboard</router-link>
    </div>
    <div class="ctg">
      <h4 class="ctg-title">Trade</h4>
      <router-link to="/buy">Buy</router-link>
      <router-link to="/sell">Sell</router-link>
    </div>
    <div class="ctg">
      <h4 class="ctg-title">Friends</h4>
      <router-link to="/request">Request money</router-link>
      <router-link to="/send">Send money</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavApp"
};
</script>

<style lang="scss" scoped>
a {
  display: block;
  padding: 4px 0;
  color: #333;
  line-height: 1.25;
  font-weight: 500;

  &.router-link-exact-active {
    color: #ecb900;
  }

  &:hover {
    color: #ecb900;
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
