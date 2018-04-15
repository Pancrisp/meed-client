<template>
  <tr @mouseenter="hover">
    <td>{{ name }}</td>
    <td>{{ symbol }}</td>
    <td>{{ price | currency }}</td>
    <td class="action">
      <div class="btn btn-buy" v-if="formBuyOpen" @click="buy">Buy</div>
      <div class= "buy-share" v-if="formOpen">
        <form @submit.prevent="buy">
          <div>
            <label>Symbol</label>
            <input type="text" :value="symbol" disabled>
          </div>

          <div>
            <label>Company Name</label>
            <input type="text" :value="name" disabled>
          </div>

          <div>
            <label>Price</label>
            <input type="text" :value="price" disabled>
          </div>

          <div>
            <label>Quantity</label>
            <input type="text" v-model="quantity" required>
          </div>

          <button type="submit" class="submit-button">Buy</button>
        </form>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ShareItem",
  data() {
    return {
      formBuyOpen: false,
      formOpen: false,
      quantity: ""
    };
  },
  props: ["symbol", "name", "price", "timestamp"],
  methods: {
    hover() {
      this.formBuyOpen = !this.formBuyOpen;
    },
    buy() {
      this.formBuyOpen = false;
      this.formOpen = true;
    }
  },
  filters: {
    currency(price) {
      return price.toLocaleString("en-AU", {
        style: "currency",
        currency: "AUD"
      });
    },
    date(value) {
      return value.toDateString();
    }
  }
};
</script>

<style lang="scss" scoped>
tr:hover {
  background: darken(#fff, 5%);
}

td {
  padding: 1rem;
  font-weight: 500;
}

.action {
  padding: 0;
}

.btn-buy {
  width: 80px;
  background: #38be0f;
  padding: 0.5rem;
  color: #fff;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
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
</style>
