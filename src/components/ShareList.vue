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
        <ShareItem :symbol="share.symbol" :name="share.name" :price="share.price" :timestamp="share.date" />
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
  created() {
    axios
      .get("http://localhost:5000/shares")
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
