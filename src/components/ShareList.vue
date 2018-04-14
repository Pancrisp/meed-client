<template>
  <div class="container">
    <input type="text" class="searchbar" v-model="search" placeholder="Search for shares...">
    <table>
      <thead>
        <tr>
          <th class="thead-3">Name</th>
          <th class="thead-1">Symbol</th>
          <th class="thead-1">Price</th>
          <th class="thead-2">Volume</th>
        </tr>
      </thead>
      <tbody v-for="share in filterByName" :key="share.symbol">
        <ShareItem :symbol="share.symbol" :name="share.name" :price="share.price" :volume="share.volume" />
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import ShareItem from "./ShareItem.vue";

export default {
  name: "ShareList",
  components: {
    ShareItem
  },
  data() {
    return {
      search: "",
      shares: [
        {
          symbol: "MSFT",
          name: "Microsoft",
          price: 90.69,
          volume: "31,501,471",
          timestamp: "2018-04-09 16:27:42"
        },
        {
          symbol: "FB",
          name: "Facebook",
          price: 157.85,
          volume: "34,682,258",
          timestamp: "2018-04-09 16:46:39"
        },
        {
          symbol: "AAPL",
          name: "Apple",
          price: 170.18,
          volume: "28,971,635",
          timestamp: "2018-04-09 16:14:50"
        },
        {
          symbol: "NVDA",
          name: "Nvidia",
          price: 217.4,
          volume: "12,429,542",
          timestamp: "2018-04-09 17:00:00"
        },
        {
          symbol: "TSLA",
          name: "Tesla",
          price: 289.63,
          volume: "10,241,500",
          timestamp: "2018-04-09 16:00:00"
        },
        {
          symbol: "CBA",
          name: "Commonwealth Bank",
          price: 73.16,
          volume: "1,252,551",
          timestamp: "2018-04-09 16:00:00"
        }
      ]
    };
  },
  computed: {
    filterByName() {
      let filter = new RegExp(this.search, "i");
      return this.shares.filter(el => el.name.match(filter));
    }
  },
  created() {
    // axios
    //   .get(
    //     "https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=MSFT,FB,AAPL,NVDA,TSLA&apikey=Z0JEM1GFP37D111E"
    //   )
    //   .then(res => {
    //     console.log(res);
    //     this.shares.push(res.data["Stock Quotes"]);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
};
</script>

<style lang="scss" scoped>
.searchbar {
  width: 100%;
  max-width: 100%;
}

table {
  width: 100%;
  text-align: center;
}

.thead-1 {
  width: 15%;
}

.thead-2 {
  width: 20%;
}

.thead-3 {
  width: 50%;
}
</style>
