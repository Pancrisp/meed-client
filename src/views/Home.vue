<template>
  <div class="container">
    <div class="accounts-list">
        <Account v-for="account in accounts" :key="account.id"
        :account="account" name="McDuck Vault" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Account from "@/components/cards/Account.vue";

export default {
  name: "home",
  components: {
    Account
  },
  data() {
    return {
      accounts: []
    };
  },
  created() {
    axios
      .get(
        "https://fierce-lake-99257.herokuapp.com/users/5addccb64940710cfb2a0b74"
      )
      .then(res => {
        this.accounts = res.data.accounts;
      });
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
