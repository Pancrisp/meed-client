<template>
  <div class="container flex px3">
    <NavApp/>
    <div class="workspace">
      <div>
        <h3 class="adminHeader">Admin Control</h3>
      </div>
      <input type="text" class="searchbar" v-model="search" placeholder="Search for players...">
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Email</th>
            <th>Last Login
              <img @click="sortLastLogin" src="../assets/icons8-sort-18.png" alt="sort players last login date by ascending or descending order">
            </th>
            <th>Admin Action</th>
          </tr>
        </thead>

      <tbody>
          <tr v-for="admin in filterRank" :key="admin.user">
            <td>{{ admin.user}} </td>
            <td>{{ admin.name }} </td>
            <td>{{ admin.lastLogin }} </td>
            <!-- two buttons to fill td below -->
            <td> {{admin.action}} </td>
          </tr>
      </tbody>

      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import NavApp from "@/components/partials/NavApp.vue";

export default {
  name: "admin",
  components: {
    NavApp
  },
  data() {
    return {
      users: [],
      search: ""
    };
  },
  created() {
    axios.get("https://fierce-lake-99257.herokuapp.com/users").then(res => {
      this.users = res.data.users;
    });
  },
  methods: {
    sortNameByAlpha() {
      this.lastLogin.sort((a, b) => (a.date > b.date ? 1 : -1));
    }
  }
};
</script>

<style lang="scss" scoped>
.adminHeader {
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

.searchbar {
  width: 100%;
  max-width: 100%;
}

img {
  float: right;
  padding-top: 3px;
  cursor: pointer;
}
</style>
