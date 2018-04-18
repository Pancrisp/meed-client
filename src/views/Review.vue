<template>
  <div class="container flex px3">
    <NavApp/>
    <div class="workspace">
      <div class="toggle">
        <button class="btn btn-large" @click="showHoldings = true">Current Holdings</button>
        <button class="btn btn-large" @click="showHistory = true">Transaction History</button>
      </div>
      <!-- Current holdings -->
      <div v-if="showHoldings"></div>
      <!-- Transaction history -->
      <div v-if="showHistory"></div>
    </div>
  </div>
</template>

<script>
import NavApp from "@/components/partials/NavApp.vue";

export default {
  name: "Review",
  components: {
    NavApp
  },
  data() {
    return {
      showHoldings: false,
      showHistory: false
    };
  }
};
</script>

<style lang="scss" scoped>
.toggle {
  margin: 0 auto;
}

.btn {
  margin-right: 1rem;
  border: 2px solid #fbab39;
  border-radius: 4px;
  transition: background 150ms ease;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    background: #fbab39;
  }
}
</style>
