<template>
  <table>
    <thead>
      <tr>
        <th>Share</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="holding in holdings" :key="holding._id">
        <td>{{ holding.share.name }}</td>
        <td>{{ holding.share.price | currency }}</td>
        <td>{{ holding.quantity }}</td>
        <td>{{ holding.quantity * holding.share.price | currency }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "UserHoldings",
  data() {
    return {};
  },
  props: ["holdings"]
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  margin-top: 2rem;
  background: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
}

thead {
  text-align: left;
  margin-right: 1rem;
}

th {
  padding: 1rem;
  font-weight: 500;
  color: var(--label-color);
  text-transform: uppercase;
}

td {
  padding: 1rem;
  font-weight: 500;
}
</style>
