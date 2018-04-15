<template>
  <tr>
      <td> {{symbol}} </td>
      <td> {{name}} </td>
      <td> {{price | currency}} </td>
      <td> {{timestamp}} </td>

      <div class="container" id="app">
        <div class= "buy-share" :class="{'open': formOpen}">
          <div class="button-copy" v-show="!formBuyOpen" @click="formOpen = true">Buy Share/s</div>
        <form @submit = "cancel()">
        </div>

        <div class= "sell-share" :class="{'open': formOpen}">
          <div class="button-copy" v-show="!formSellOpen" @click="formOpen = true">Sell Share/s</div>
        <form @submit = "cancel()">
        </div>
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

.container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}


.buy-share, .sell-share {
  &.open {
    background-color: #FAFAFA;
    padding: 18px 32px;
    border-radius: 5px;
    width: 420px;
    height: 398px;
    cursor: default;

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
