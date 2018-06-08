<template>
  <div class="container flex px3">
    <NavApp/>
    <div class="workspace">
      <div>
        <h3 class="adminHeader">Admin Control</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Email</th>
            <th>Last Login
              <img @click="mostRecentActivity" src="../assets/icons8-sort-18.png" alt="sort players on recent activity by ascending or descending order">
            </th>
            <th>Admin Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.mostRecentActivity | date }} </td>

            <td class="action">
              <span class="btn btn-notify">Notify</span>
              <span class="btn btn-block" @click="showModal = true" :disabled="disabled">Block</span>
              <confirmation
                :name="user.name"
                :show="showModal" @close="showModal = false"
                >
              </confirmation>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import format from "date-fns/format";

import NavApp from "@/components/partials/NavApp.vue";
import Confirmation from "@/components/modals/Confirmation.vue";

export default {
  name: "admin",
  components: {
    NavApp,
    Confirmation
  },
  data() {
    return {
      showModal: false,
      users: []
    };
  },
  created() {
    axios.get("https://fierce-lake-99257.herokuapp.com/users").then(res => {
      this.users = res.data;
    });
  },
  methods: {
    mostRecentActivity() {
      this.users.sort((a, b) => (a.date > b.date ? 1 : -1));
    },
    filters: {
      date(val) {
        return format(val, "DD MMM YYYY, h:mm A");
      }
    },
    computed: {}
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

.action {
  padding: 1rem 0;
}

.btn-notify {
  background: #38be0f;
  margin: 4px;
  color: #fff;
}

.btn-block {
  background: rgb(231, 43, 43);
  margin: 4px;
  color: #fff;
}

.disabled {
  color: #969696;
  background: #e8e8e8;
}
</style>
