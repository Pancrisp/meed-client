<template>
  <div class="container">
    <div class="accounts-list">
        <Account v-for="account in accounts" :key="account.id"
        :account="account" name="McDuck Vault" />

        <div class="btn btn-buy" @click="create">Create a trading account</div>
        <!-- <div class="btn btn-buy" @click="showModal = true">Create a trading account</div>

        <new-account-modal
          :show="showModal" @close="showModal = false"
        ></new-account-modal> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Account from "@/components/cards/Account.vue";
import NewAccountModal from "@/components/modals/NewAccountModal.vue";

export default {
  name: "home",
  components: {
    Account,
    NewAccountModal
  },
  data() {
    return {
      showModal: false,
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
  },
  methods: {
    create() {
      axios
        .post(`https://fierce-lake-99257.herokuapp.com/accounts`, {
          userId: "5addccb64940710cfb2a0b74"
        })
        .then(res => {
          console.log(res);

          if (res.status == 201) {
            this.close();
            setTimeout(this.$router.push("/dashboard"), 2000);
          }
        });
    }
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
