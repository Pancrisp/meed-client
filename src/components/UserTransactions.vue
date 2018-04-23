<template>
  <div>
    <div class="toggleFilter">
      <button class="btn btn-filter" :class="{ active: allActive }" @click="allSharesToggle">All Shares</button>
      <button class="btn btn-filter" :class="{ active: boughtActive }" @click="boughtSharesToggle">Bought Shares</button>
      <button class="btn btn-filter" :class="{ active: soldActive }" @click="soldSharesToggle">Sold Shares</button>
    </div>
    <div class="wrap" v-if="showAll || showBought">
      <h3 class="sharesBought">Shares Bought</h3>
      <table>
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
    </div>

    <div class="wrap" v-if="showAll || showSold">
      <h3 class="sharesSold">Shares Sold</h3>
      <table>
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
    boughtSharesToggle() {
      this.showBought = !this.showBought;
      this.boughtActive = !this.boughtActive;
      this.showAll = false;
      this.allActive = false;
      this.showSold = false;
      this.soldActive = false;
    },
    soldSharesToggle() {
      this.showSold = !this.showSold;
      this.soldActive = !this.soldActive;
      this.showAll = false;
      this.allActive = false;
      this.showBought = false;
      this.boughtActive = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.btn,
.btn-filter {
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

.toggleFilter {
  margin-top: 1rem;
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
