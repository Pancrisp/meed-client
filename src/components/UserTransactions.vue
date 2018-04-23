<template>
  <div>
    <div class="toggleFilter">
      <button class="btn-filter" :class="{ active: allActive }" @click="allSharesToggle">All Shares</button>
      <button class="btn-filter" :class="{ active: boughtActive }" @click="boughtSharesToggle">Bought Shares</button>
      <button class="btn-filter" :class="{ active: soldActive }" @click="soldSharesToggle">Sold Shares</button>
    </div>

    <div class="sharesBought">Shares Bought</div>
    <table v-if="showAll || showBought">
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in filterBuyOrders" :key="transaction._id">
          <td>{{ transaction.date | date }}</td>
          <td>{{ transaction.share }}</td>
          <td>{{ transaction.quantity }}</td>
          <td>{{ transaction.price | currency }}</td>
          <td>{{ transaction.quantity * transaction.price | currency }}</td>
        </tr>
      </tbody>
    </table>
    <div class="sharesSold">Shares Sold</div>
    <table v-if="showAll || showSold">
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="transaction in filterSellOrders" :key="transaction._id">
          <td>{{ transaction.date | date }}</td>
          <td>{{ transaction.share }}</td>
          <td>{{ transaction.quantity }}</td>
          <td>{{ transaction.price | currency }}</td>
          <td>{{ transaction.quantity * transaction.price | currency }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import format from "date-fns/format";

export default {
  name: "UserTransactions",
  data() {
    return {
      allActive: true,
      boughtActive: false,
      soldActive: false,
      showAll: true,
      showBought: false,
      showSold: false
    };
  },
  props: ["transactions"],
  computed: {
    filterBuyOrders() {
      const type = "buy";
      return this.transactions.filter(el => el.action.match(type));
    },
    filterSellOrders() {
      const type = "sell";
      return this.transactions.filter(el => el.action.match(type));
    }
  },
  filters: {
    date(val) {
      return format(val, "DD MMM YYYY, h:mm A");
    }
  },
  methods: {
    allSharesToggle() {
      this.showAll = !this.showAll;
      this.allActive = !this.allActive;
      this.showBought = false;
      this.boughtActive = false;
      this.showSold = false;
      this.soldActive = false;
    },
    boughtSharesToggle() {}
  }
};
</script>

<style lang="scss" scoped>
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
