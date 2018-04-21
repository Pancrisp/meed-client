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
        <div class="sharesBought">Shares Bought</div>
        <table>
          <thead>
            <tr>
              <th class="thead-1">Date

              </th>
              <th class="thead-2">Company Name

              </th>
              <th class="thead-3">Quantity

              </th>
              <th class="thead-4">Price

              </th>
              <th class="thead-5">Cost

              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactions" :key="transaction._id">
              <td>{{transaction.id}}</td>
              <td>{{transaction.share}}</td>
              <td>{{transaction.quantity}}</td>
              <td>{{transaction.price}}</td>
              <td>{{transaction.quantity * transaction.price | currency }}</td>
            </tr>
          </tbody>
        </table>

        <div class="sharesSold">Shares Sold</div>
        <table>
          <thead>
            <tr>
              <th class="thead-1">Date
              </th>
              <th class="thead-2">Company Name
              </th>
              <th class="thead-3">Quantity
              </th>
              <th class="thead-4">Price
              </th>
              <th class="thead-5">Cost
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="transaction in transactions" :key="transaction._id">
              <td>{{transaction.id}}</td>
              <td>{{transaction.share}}</td>
              <td>{{transaction.quantity}}</td>
              <td>{{transaction.price}}</td>
              <td>{{transaction.quantity * transaction.price | currency }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import NavApp from "@/components/partials/NavApp.vue";
import UserHoldings from "@/components/UserHoldings.vue";

export default {
  name: "Review",
  components: {
    NavApp,
    UserHoldings
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

.sharesBought,
.sharesSold {
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
  padding: 0.5rem;
  font-size: 14px;
  font-weight: 500;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

thead {
  text-align: left;
  margin-right: 0.5rem;
}

td {
  padding: 0.5rem;
  font-size: 13px;
  font-weight: 500;
}
</style>
