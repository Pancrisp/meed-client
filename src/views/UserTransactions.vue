<template>
  <div class="sharesBought">Shares Bought</div>
        <table>
          <thead>
            <tr>
              <th class="thead-1">Date </th>
              <th class="thead-2">Company Name </th>
              <th class="thead-3">Quantity</th>
              <th class="thead-4">Price </th>
              <th class="thead-5">Cost </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactions" :key="transaction._id">
              <td>{{transaction.id}}</td>
              <td>{{transaction.share}}</td>
              <td>{{transaction.quantity}}</td>
              <td>{{transaction.price}}</td>
              <td>{{transaction.quantity * transaction.price | currency }}</td>
            </tr>
          </tbody>
        </table>

        <div class="sharesSold">Shares Sold</div>
        <table>
          <thead>
            <tr>
              <th class="thead-1">Date </th>
              <th class="thead-2">Company Name </th>
              <th class="thead-3">Quantity </th>
              <th class="thead-4">Price </th>
              <th class="thead-5">Cost </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="transaction in transactions" :key="transaction._id">
              <td>{{transactions.id}}</td>
              <td>{{transaction.share}}</td>
              <td>{{transaction.quantity}}</td>
              <td>{{transaction.price}}</td>
              <td>{{transaction.quantity * transaction.price | currency }}</td>
            </tr>
          </tbody>
    </table>

</template>

<script>
export default {
  name: "UserTransactions",
  data() {
    return {};
  },
  props: ["transactions"]
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

td {
  padding: 0.5rem;
  font-size: 13px;
  font-weight: 500;
}
</style>
