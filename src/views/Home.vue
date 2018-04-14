<template>
  <div class="container">
    <div class="accounts-list">
      <router-link to="/dashboard">
        <Account name="McDuck Vault"/>
      </router-link>
      <router-link to="/dashboard">
        <Account name="Pennywise Scrooge"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Account from "@/components/cards/Account.vue";

export default {
  name: "home",
  components: {
    Account
  }
};
</script>

<style lang="scss" scoped>
a {
  margin: 1rem;
}
.accounts-list {
  margin: 3rem 0;
  display: flex;
  flex-wrap: wrap;
}
</style>
