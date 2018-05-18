<template>
  <div class="container">
    <div>
      <h3 class="leaderboardHeader">Leaderboard</h3>
    </div>
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Trading account</th>
          <th>Net worth</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="account in leaderboard" :key="account.name">
          <td>{{ account.user }} </td>
          <td>{{ account.account }} </td>
          <td>{{ account.networth | currency }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Leaderboard",
  data() {
    return {
      leaderboard: []
    };
  },
  created() {
    axios
      .get("https://fierce-lake-99257.herokuapp.com/leaderboard")
      .then(res => {
        this.leaderboard = res.data.leaderboard;
      });
  },
  computed: {
    filterRank() {
      this.leaderboard.sort((a, b) => (a.networth > b.networth ? 1 : -1));
    }
  }
};
</script>

<style lang="scss" scoped>
.leaderboardHeader {
  width: 100%;
  max-width: 100%;
  margin: 0;
  background-color: #f99f46;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px;
}

table {
  width: 100%;
  background: #fff;
  // border: 1px solid #d3d3d3;
  border-radius: 4px;
}

th {
  padding: 0.5rem 1rem;
  color: var(--label-color);
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
