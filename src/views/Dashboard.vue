<template>
  <div class="container flex px3">
    <NavApp/>
    <main class="workspace">
      <h1 class="page-title">Dashboard</h1>
      <div class="summary">
        <Summary class="summary-card" title="Current balance" :value="balance" />
        <Summary class="summary-card" title="This period change" :value="change" />
        <Summary class="summary-card" title="Net worth" :value="networth" />
      </div>
      <div class="chart card">Big ass chart</div>
      <ShareList/>
    </main>
  </div>
</template>

<script>
import axios from "axios";

import NavApp from "@/components/partials/NavApp.vue";
import Summary from "@/components/cards/Summary.vue";
import ShareList from "@/components/ShareList.vue";

export default {
  name: "dashboard",
  components: {
    NavApp,
    Summary,
    ShareList
  },
  data() {
    return {
      balance: 0,
      change: 0,
      networth: 0
    };
  },
  created() {
    axios
      .get("http://localhost:5000/accounts/5ad01d6025634f0f762aa4dc")
      .then(res => {
        this.balance = res.data.balance;
        this.networth = res.data.networth;
      })
      .catch(err => {
        this.errors.push(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.workspace {
  width: 80%;
}

.grid {
  display: grid;
  grid-template-columns: 20% 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "nav dashboard dashboard";
}

.chart {
  height: 400px;
  width: 100%;
  padding: 10rem;
  font-weight: 500;
  font-size: 3rem;
  text-align: center;
}

.card {
  background-color: #afafaf;
  border-radius: 4px;
}

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
