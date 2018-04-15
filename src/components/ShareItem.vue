<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ symbol }}</td>
    <td>{{ price | currency }}</td>
    <td class="action">
      <div class="btn btn-buy" v-if="formBuyOpen" @click="buy">Buy</div>
      <form @submit.prevent="buy" v-if="formOpen">
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

        <div>
          <p v-if="quantity > 0">Brokerage: {{ brokerage | currency }}</p>
          <p v-if="quantity > 0">Total cost: {{ cost | currency }}</p>
        </div>

        <input type="button" class="btn btn-submit" value="Buy">
      </form>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ShareItem",
  data() {
    return {
      formBuyOpen: true,
      formOpen: false,
      quantity: ""
    };
  },
  props: ["symbol", "name", "price", "timestamp"],
  methods: {
    buy() {
      this.formBuyOpen = false;
      this.formOpen = true;
    }
  },
  computed: {
    brokerage() {
      return this.price * this.quantity * 0.01 + 50;
    },
    cost() {
      return this.price * this.quantity * 1.01 + 50;
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
td {
  padding: 1rem;
  font-weight: 500;
}

.action {
  padding: 0 1rem;
}

.btn {
  width: 80px;
  padding: 0.5rem;
  color: #fff;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}
.btn-buy {
  background: #38be0f;
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
