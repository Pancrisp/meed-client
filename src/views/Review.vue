<template>
  <div class="container flex px3">
    <NavApp/>
    <div class="workspace">
      <div class="toggle">
        <button class="btn btn-large" :class="{ active: holdingsActive }" @click="holdingsToggle">Current Holdings</button>
        <button class="btn btn-large" :class="{ active: historyActive }" @click="historyToggle">Transaction History</button>
      </div>
      <!-- Current holdings -->
      <div v-if="showHoldings">
        <user-holdings :holdings="holdings"></user-holdings>
      </div>
      <!-- Transaction history -->
      <div v-if="showHistory">
        <user-transactions :transactions="transactions"></user-transactions>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import NavApp from "@/components/partials/NavApp.vue";
import UserHoldings from "@/components/UserHoldings.vue";
import UserTransactions from "@/components/UserTransactions.vue";

export default {
  name: "Review",
  components: {
    NavApp,
    UserHoldings,
    UserTransactions
  },
  data() {
    return {
      holdingsActive: true,
      historyActive: false,
      showHoldings: true,
      showHistory: false,

      holdings: [],
      transactions: []
    };
  },
  methods: {
    holdingsToggle() {
      this.showHoldings = !this.showHoldings;
      this.holdingsActive = !this.holdingsActive;
      this.showHistory = false;
      this.historyActive = false;
    },
    historyToggle() {
      this.showHistory = !this.showHistory;
      this.historyActive = !this.historyActive;
      this.showHoldings = false;
      this.holdingsActive = false;
    }
  },
  created() {
    axios
      .get(
        "https://fierce-lake-99257.herokuapp.com/accounts/5adb15fd81c30b4847fdae24"
      )
      .then(res => {
        this.holdings = res.data.shares;
        this.transactions = res.data.transactions;
      });
  }
};
</script>

<style lang="scss" scoped>
.toggle {
  margin: 0 auto;
}

.btn {
  margin-right: 1rem;
  padding: 16px;
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px hsl(40, 100%, 50%);
  transition: box-shadow 400ms ease;
  outline: none;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    box-shadow: inset 0 0 0 2px var(--primary-color);
  }
}

.active {
  color: #fff;
  background: var(--primary-color);
  box-shadow: none;
}
</style>
