<template>
  <div class="container">
    <div class="accounts-list" v-show="isLoading">
      <account v-for="account in accounts" :key="account.id"
        :account="account">
      </account>
      <new-account></new-account>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Account from "@/components/cards/Account.vue";
import NewAccount from "@/components/cards/NewAccount.vue";

export default {
  name: "home",
  components: {
    Account,
    NewAccount
  },
  data() {
    return {
      isLoading: false,
      showModal: false,
      accounts: []
    };
  },
  created() {
    const id = this.$store.getters.userId;
    axios
      .get(`https://fierce-lake-99257.herokuapp.com/users/${id}`)
      .then(res => {
        this.isLoading = true;
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
