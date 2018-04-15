<template>
  <tr>
    <div class id = "app">
      <td> {{symbol}} </td>
      <td> {{name}} </td>
      <td> {{price | currency}} </td>
      <td> {{timestamp}} </td>
      <div class= "buy-share" v-show="!formBuyOpen" @click="formOpen= true"> Buy
        <form @submit = "cancel()">
      <div class= "sell-share" v-show="!formSellOpen" @click="formOpen= true"> Sell
        <form @submit = "cancel()">
      </div>
  </tr>

</template>

<script>
export default {
  name: ShareItem,
  data() {
    return {
      formBuyOpen: false,
      formSellOpen: false,
      symbol: "",
      name: "",
      price: "",
      timestamp: ""
    };
  },

  props: ["symbol", "name", "price", "timestamp"],
  computed: {},
  filters: {
    currency(price) {
      return price.toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
  margin: 0;
}

body {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  background-color: #f3f4f5;
  cursor: default;
}
</style>
