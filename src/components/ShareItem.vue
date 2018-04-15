<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ symbol }}</td>
    <td>{{ price | currency }}</td>
    <td>{{ timestamp }}</td>

    <div class="containerBuy" id="app">
        <div class= "buy-share" :class="{'open': formOpen}">
          <div class="button-copy" v-show="!formBuyOpen" @click="formOpen = true">Buy Share/s</div>
        <!-- <form @submit = "cancel()"> -->


      <div class="containerSell" id="app">
        <div class= "sell-share" :class="{'open': formOpen}">
          <div class="button-copy" v-show="!formSellOpen" @click="formOpen = true">Sell Share/s</div>
        <!-- <form @submit = "cancel()"> -->

      <div class="form--field">
        <label>Company Name</label>
        <span>{{name}}</span>
        <class="form--element" name="name" v-model="data.name" placeholder="Company Name">
      </div>

      <div class="form--field -short">
          <label>Symbol</label>
          <span>{{symbol}}</span>
          <class="form--element" name="price" v-model="data.price"
           placeholder="Price"  pattern="\d+(\.\d{2})?">
        </div>

      <div class="form--field -short">
          <label>Price</label>
          <span>{{price}}$</span>
          <class="form--element" name="price" v-model="data.price"
           placeholder="Price"  pattern="\d+(\.\d{2})?">
        </div>

      <div class="form--field">
        <label>Time Stamp</label>
        <span>{{timestamp}}</span>
        <class="form--element" name="timestamp" v-model="data.timestamp" placeholder="Time Stamp">
      </div>

      <div class="form--field -short">
        <label>Quantity</label>
         <input type="number" class="form--element" name="quantity" v-model="data.quantity">
         <!-- needs to be know to users current share holdings v-model -->
        <placeholder="Quantity" required="" min="0" max="6" step="1.0">
      </div>

      <button type="submit" class="submit-button">Buy Share</button>
      <!-- <div class="cancel">
      <span @click="cancel()">Cancel</span></div> -->



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
  },
  methods: {
    resetForm: function() {
      this.data = {
        symbol: "",
        name: "",
        price: "",
        timestamp: "",
        quantity: ""
      };
    }
    // cancel: function() {
    //   this.formOpen = false;
    //   this.resetForm();
    // }
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
