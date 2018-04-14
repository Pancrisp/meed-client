<template>
  <div class="container">
    <input type="text" class="searchbar" v-model="search" placeholder="Search for shares...">
    <table>
      <thead>
        <tr>
          <th class="thead-3">Name
            <img @click="sortNameByAlpha" src="../assets/icons8-sort-18.png" alt="sort names by ascending or descending order">
          </th>
          <th class="thead-1">Symbol
            <img @click="sortSymbolByAlpha" src="../assets/icons8-sort-18.png" alt="sort symbols by ascending or descending order">
          </th>
          <th class="thead-1">Price
            <img @click="sortPrice" src="../assets/icons8-sort-18.png" alt="sort prices by ascending or descending order">
          </th>
          <th class="thead-2">Volume
            <img @click="sortVolume" src="../assets/icons8-sort-18.png" alt="sort prices by ascending or descending order">
          </th>
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
          symbol: "CBA",
          name: "Commonwealth Bank of Australia",
          price: 73.16,
          volume: 1252551,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "NAB",
          name: "National Bank Australia",
          price: 28.52,
          volume: 4470806,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "WBC",
          name: "Westpac Banking Corporation",
          price: 28.89,
          volume: 2851137,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "ANZ",
          name: "Australia and New Zealand Banking Group Limited",
          price: 26.71,
          volume: 3619196,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "MQG",
          name: "Macquarie Group Limited",
          price: 104.21,
          volume: 430244,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "TLS",
          name: "Telstra Corporation Limited",
          price: 3.1,
          volume: 21590421,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "BHP",
          name: "BHP Billiton Limited",
          price: 29.73,
          volume: 4171387,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "RIO",
          name: "Rio Tinto Limited",
          price: 78.21,
          volume: 2088928,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "CSL",
          name: "CSL Limited",
          price: 160.35,
          volume: 552506,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "WES",
          name: "Wesfarmers Limited",
          price: 41.04,
          volume: 1459299,
          timestamp: "2018-04-13 16:00:00"
        }
      ]
    };
  },
  methods: {
    sortNameByAlpha() {
      this.shares.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    sortSymbolByAlpha() {
      this.shares.sort((a, b) => (a.symbol > b.symbol ? 1 : -1));
    },
    sortPrice() {
      this.shares.sort((a, b) => a.price - b.price);
    },
    sortVolume() {
      this.shares.sort((a, b) => (a.volume > b.volume ? 1 : -1));
    }
  },
  computed: {
    filterByName() {
      let filter = new RegExp(this.search, "i");
      return this.shares.filter(el => el.name.match(filter));
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.searchbar {
  width: 100%;
  max-width: 100%;
}

table {
  width: 100%;
  background: #fff;
  border: 2px solid #afafaf;
  border-radius: 2px;
}

th {
  padding: 1rem;
}

thead {
  text-align: left;
  margin-right: 1rem;
}

img {
  float: right;
  padding-top: 3px;
  cursor: pointer;
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
