<template>
  <div class="container flex px3">
    <NavApp/>
    <div class="workspace">
      <h1 class="page-title">Account Review</h1>
      <button class="" @click="showHoldings = true">Current Holdings</button>
      <button class="" @click="showHistory = true">Transaction History</button>

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

</style>
