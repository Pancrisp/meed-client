<template>
  <div class="container flex px3">
    <NavApp/>
    <main class="workspace">
      <div class="summary">
        <Summary class="summary-card" title="Current balance" :value="balance" />
        <Summary class="summary-card" title="This period change" :value="change" />
        <Summary class="summary-card" title="Net worth" :value="networth" />
      </div>
      <div class="summary flex">
        <div class="card summary-card leaderboard flex-1">
          <div>
            <!-- <h3 class="label">Leaderboard</h3> -->
            <leaderboard></leaderboard>
          </div>
        </div>

        <div class="card summary-card flex-1">
          <div>
            <h3 class="label">Top gainers</h3>
          </div>
          <div>
            <h3 class="label">Top losers</h3>
          </div>
        </div>
      </div>
      <ShareList/>
    </main>
  </div>
</template>

<script>
import axios from "axios";

import NavApp from "@/components/partials/NavApp.vue";
import Summary from "@/components/cards/Summary.vue";
import ShareList from "@/components/ShareList.vue";
import Leaderboard from "@/components/Leaderboard.vue";

export default {
  name: "dashboard",
  components: {
    NavApp,
    Summary,
    ShareList,
    Leaderboard
  },
  data() {
    return {
      balance: 0,
      networth: 0,
      change: 0
    };
  },
  created() {
    const accountId = this.$store.getters.accountId;
    axios
      .get(`https://fierce-lake-99257.herokuapp.com/accounts/${accountId}`)
      .then(res => {
        this.balance = res.data.balance;
        this.networth = res.data.networth;
        this.change = this.networth - 1000000;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.summary {
  display: flex;
  margin-bottom: 2rem;
}

.summary-card {
  margin-right: 1rem;

  &:last-of-type {
    margin: 0;
  }
}

.leaderboard {
  padding: 0;
  overflow: hidden;
}

.label {
  margin-top: 0;
}

.fields {
  flex: 1;
  margin-right: 1rem;
  padding: 1rem;
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;

  &:last-of-type {
    margin-right: 0;
  }
}
</style>
