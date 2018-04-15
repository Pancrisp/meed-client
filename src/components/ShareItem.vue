<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ symbol }}</td>
    <td>{{ price | currency }}</td>
    <td>{{ timestamp }}</td>

    <div class="container" id="app">
      <div class= "buy-share" :class="{'open': formOpen}">
        <div class="button-copy" v-show="!formBuyOpen" @click="formOpen = true">Buy Share/s</div>
      <!-- <form @submit = "cancel()"> -->
      </div>

      <div class= "sell-share" :class="{'open': formOpen}">
        <div class="button-copy" v-show="!formSellOpen" @click="formOpen = true">Sell Share/s</div>
      <!-- <form @submit = "cancel()"> -->
      </div>
    </div>
  </tr>
</template>

<script>
export default {
  name: "ShareItem",
  data() {
    return {
      formBuyOpen: false,
      formSellOpen: false
    };
  },
  props: ["symbol", "name", "price", "timestamp"],
  filters: {
    currency(price) {
      return price.toLocaleString("en-AU", {
        style: "currency",
        currency: "AUD"
      });
    },
    number(value) {
      return value.toLocaleString();
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

.buy-share,
.sell-share {
  &.open {
    background-color: #fafafa;
    padding: 18px 32px;
    border-radius: 5px;
    width: 420px;
    height: 398px;
    cursor: default;
  }
}

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

td {
  padding: 1rem;
  font-weight: 500;
}
</style>
