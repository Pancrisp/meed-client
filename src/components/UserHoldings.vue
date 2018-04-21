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
        <td>{{ holding.name }}</td>
        <td>{{ holding.price | currency }}</td>
        <td>{{ holding.quantity }}</td>
        <td>{{ holding.quantity * holding.price | currency }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "UserHoldings",
  data() {
    return {
      holdings: [
        {
          _id: "5ad4741c8d64a30aea17bc44",
          symbol: "MQG",
          price: 104.62,
          quantity: 500,
          date: "2018-04-16T09:59:56.279Z",
          name: "Macquarie Group Limited",
          __v: 1
        },
        {
          _id: "5ad474448d64a30aea17bc49",
          symbol: "NAB",
          price: 28.66,
          quantity: 2000,
          date: "2018-04-16T10:00:36.917Z",
          name: "National Australia Bank",
          __v: 1
        },
        {
          _id: "5ad45eed7997180abdfd21f1",
          symbol: "CBA",
          price: 72.63,
          quantity: 1000,
          date: "2018-04-16T08:29:33.439Z",
          name: "Commonwealth Bank",
          __v: 1
        }
      ]
    };
  },
  // props: ["holdings"],
  filters: {
    currency(price) {
      return price.toLocaleString("en-AU", {
        style: "currency",
        currency: "AUD"
      });
    }
  }
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
  text-transform: uppercase;
}

td {
  padding: 1rem;
  font-weight: 500;
}
</style>
