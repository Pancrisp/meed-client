<template>
  <div class="container flex px3">
    <NavApp/>
    <div class="workspace">
      <div class="toggle">
        <button class="btn btn-large" @click="showHoldings = true">Current Holdings</button>
        <button class="btn btn-large" @click="showHistory = true">Transaction History</button>
      </div>
      <!-- Current holdings -->
      <div v-if="showHoldings"></div>
      <!-- Transaction history -->
  <div class = "container">

    <div class="sharesBought"> Shares Bought
          </div>

    <table>
      <thead>
        <tr>
          <th class="thead-1">Date

          </th>
          <th class="thead-2">Company Name

          </th>
          <th class="thead-3">Quantity

          </th>
          <th class="thead-4">Share Price

          </th>
          <th class="thead-5">Cost

          </th>
        </tr>
      </thead>
    </table>

    <div class="sharesSold"> Shares Sold
    </div>

    <table>
      <thead>
        <tr>
          <th class="thead-1">Date

          </th>
          <th class="thead-2">Company Name

          </th>
          <th class="thead-3">Quantity

          </th>
          <th class="thead-4">Share Price

          </th>
          <th class="thead-5">Cost

          </th>
        </tr>
      </thead>
    </table>


  </div>

      <div v-if="showHistory"></div>
    </div>
  </div>
</template>

<script>
import NavApp from "@/components/partials/NavApp.vue";

export default {
  name: "Review",
  components: {
    NavApp
  },
  data() {
    return {
      showHoldings: false,
      showHistory: false
    };
  }
};
</script>

<style lang="scss" scoped>
.toggle {
  margin: 0 auto;
}

.btn {
  margin: 50px;
  margin-right: 1rem;
  padding: 16px;
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px hsl(40, 100%, 50%);
  transition: box-shadow 400ms ease;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    box-shadow: inset 0 0 0 2px var(--primary-color);
  }
}

.sharesBought,
.sharesSold {
  width: 100%;
  max-width: 100%;
  background-color: #f99f46;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 10px;
  letter-spacing: 0.5px;
  border-radius: 4px;
  padding: 10px;
}

table {
  width: 100%;
  background: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  margin: 10px;
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
</style>
