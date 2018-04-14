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
        },
        {
          symbol: "WOW",
          name: "Woolworths Group Limited",
          price: 26.62,
          volume: 1269465,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "WPL",
          name: "Woodside Petroleum Limited",
          price: 30.32,
          volume: 1255506,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "TCL",
          name: "Transurban Group",
          price: 11.18,
          volume: 2436434,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "SCG",
          name: "Scentre Group",
          price: 3.88,
          volume: 4828362,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "RMD",
          name: "Resmed Inc.",
          price: 12.69,
          volume: 2493978,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "IAG",
          name: "Insurance Australia Group Limited",
          price: 7.53,
          volume: 4038395,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "WFD",
          name: "Westfield Corporation",
          price: 8.68,
          volume: 2900049,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "SUN",
          name: "Suncorp Group Limited",
          price: 13.6,
          volume: 1471270,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "S32",
          name: "South32 Limited",
          price: 3.48,
          volume: 31399213,
          timestamp: "2018-04-13 16:00:00"
        },
        {
          symbol: "AMC",
          name: "Amcor Limited",
          price: 14.06,
          volume: 1188972,
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
table {
  width: 100%;
  background: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
}

th {
  padding: 1rem;
  text-transform: uppercase;
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

.searchbar {
  width: 100%;
  max-width: 100%;
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
