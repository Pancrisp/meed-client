<template>
  <div class="container flex px3">
    <NavApp/>
    <div class="workspace">
      <div class="toggle">
        <button class="btn btn-large" :class="{ active: holdingsActive }" @click="holdings">Current Holdings</button>
        <button class="btn btn-large" :class="{ active: historyActive }" @click="history">Transaction History</button>
      </div>
      <!-- Current holdings -->
      <div v-if="showHoldings">
        <share-list></share-list>
      </div>
      <!-- Transaction history -->
      <div v-if="showHistory">
        <!-- <share-list></share-list> -->
      </div>
    </div>
  </div>
</template>

<script>
import NavApp from "@/components/partials/NavApp.vue";
import ShareList from "@/components/ShareList.vue";

export default {
  name: "Review",
  components: {
    NavApp,
    ShareList
  },
  data() {
    return {
      holdingsActive: true,
      historyActive: false,
      showHoldings: true,
      showHistory: false
    };
  },
  methods: {
    holdings() {
      this.showHoldings = !this.showHoldings;
      this.holdingsActive = !this.holdingsActive;
      this.showHistory = false;
      this.historyActive = false;
    },
    history() {
      this.showHistory = !this.showHistory;
      this.historyActive = !this.historyActive;
      this.showHoldings = false;
      this.holdingsActive = false;
    }
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
