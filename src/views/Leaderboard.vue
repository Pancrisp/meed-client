<template>
  <div class="container flex px3">
    <NavApp/>
    <div class="workspace">
      <div>
        <h3 class="leaderboardHeader">Leaderboard</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Networth</th>
            <th>Player</th>
            <th>Trading Account</th>
          </tr>
        </thead>
      <!-- <tbody>
          <tr v-for = "accounts" :key="accounts._id">
            <td>{{ transaction.date | date }}</td>
            <td>{{ transaction.share }}</td>
            <td>{{ transaction.quantity }}</td>
            <td>{{ transaction.price | currency }}</td>
            <td>{{ transaction.quantity * transaction.price | currency }}</td>
      <tbody> -->
      </table>
    </div>
  </div>
</template>

<script>
// import UserHoldings from "@/components/UserHoldings.vue";
import NavApp from "@/components/partials/NavApp.vue";
import axios from "axios";

export default {
  name: "leaderboard",
  components: {
    NavApp,
    accounts: []
  },
  created() {
    axios
      .get("https://fierce-lake-99257.herokuapp.com/accounts/ .....")
      .then(res => {
        this.accounts = res.data.accounts;
      });
  }
};
</script>

<style lang="scss" scoped>
.leaderboardHeader {
  width: 100%;
  max-width: 100%;
  margin: 2rem 0 0.5rem 0;
  background-color: #f99f46;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 4px;
  padding: 10px;
}

table {
  width: 100%;
  background: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
}

th {
  padding: 0.5rem 1rem;
  font-weight: 500;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

thead {
  margin-right: 0.5rem;
  text-align: left;
  text-transform: uppercase;
}

td {
  padding: 0.5rem 1rem;
  font-weight: 500;
}
</style>
