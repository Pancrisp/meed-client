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
        </tr>
      </thead>
      <tbody v-for="share in filterByName" :key="share.symbol">
        <share-item :shares="share"></share-item>
        <div>
          <div>
            {{ share.priceHistory[0].date | date }}
            {{ share.priceHistory[0].price | currency }}
          </div>
          <div>
            {{ share.priceHistory[1].date | date }}
            {{ share.priceHistory[1].price | currency }}
          </div>
          <div>
            {{ share.priceHistory[2].date | date }}
            {{ share.priceHistory[2].price | currency }}
          </div>
          <div>
            {{ share.priceHistory[3].date | date }}
            {{ share.priceHistory[3].price | currency }}
          </div>
          <div>
            {{ share.priceHistory[4].date | date }}
            {{ share.priceHistory[4].price | currency }}
          </div>
        </div>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import format from "date-fns/format";

import ShareItem from "./ShareItem.vue";

export default {
  name: "ShareList",
  components: {
    ShareItem
  },
  data() {
    return {
      search: "",
      shares: []
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
    }
  },
  computed: {
    filterByName() {
      let filter = new RegExp(this.search, "i");
      return this.shares.filter(el => el.name.match(filter));
    }
  },
  filters: {
    date(val) {
      return format(val, "DD MMM YYYY");
    }
  },
  created() {
    axios
      .get("https://fierce-lake-99257.herokuapp.com/shares")
      .then(res => {
        this.shares = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
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
  font-weight: 500;
  color: var(--label-color);
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
