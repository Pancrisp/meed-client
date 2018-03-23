<template>
  <div class="container">
    <div class="accounts-list">
      <router-link to="/dashboard">
        <AccountCard name="McDuck Vault"/>
      </router-link>
      <router-link to="/dashboard">
        <AccountCard name="Pennywise Scrooge"/>
      </router-link>      
      <div class="card">
        <h3>Create a new trading account</h3>
      </div>
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
}
</script>

<style lang="scss" scoped>
.accounts-list {
  margin: 3rem 0;
  display: flex;
  flex-wrap: wrap;
}

.card {
  display: flex;
  min-width: 400px;
  margin: 1rem;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.05);
  transition: 250ms ease;
  border-radius: 4px;
  background: #fff;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.09);
  }
}

.card-img {
  
  img {
    display: block;
    height: 150px;
  }
}
</style>
