<template>
  <div class="container">
    <div class="accounts-list">
      <router-link to="/dashboard">
        <AccountCard name="McDuck Vault"/>
      </router-link>
      <router-link to="/dashboard">
        <AccountCard name="Pennywise Scrooge"/>
      </router-link>
    </div>
  </div>  
</template>

<script>
import AccountCard from "@/components/AccountCard.vue";

export default {
  name: "home",
  components: {
    AccountCard
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
