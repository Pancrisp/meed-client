<template>
  <modal :show="show" @close="close">
    <form class="flex" @submit.prevent="sell">
      <div class="quantity flex-2">
        <div class="quantity-field">
          <label class="label">Name</label>
          <input type="text" :value="holdings.share.name" disabled>
        </div>

        <div class="flex">
          <div class="field">
            <label class="label">Price</label>
            <input type="text" :value="twoDecimals" disabled>
          </div>
          <div class="field">
            <label class="label">Quantity</label>
            <input type="text" v-model.number="quantity" @keyup="calcCost" required>
          </div>
        </div>

      </div>
      <div class="pricing flex-1">
        <div class="pricing-field">
          <p class="label">Brokerage</p>
          <p class="label-data">{{ brokerage | currency }}</p>
          <p class="label">Total cost</p>
          <p class="label-data">{{ cost | currency }}</p>
        </div>
        <div class="pricing-field">
          <input type="button" class="btn btn-submit" value="Sell" @click="sell">
        </div>
      </div>
    </form>
  </modal>
</template>

<script>
import axios from "axios";

import Modal from "./Modal.vue";

export default {
  name: "SellOrderModal",
  components: {
    Modal
  },
  data() {
    return {
      quantity: "",
      brokerage: 0,
      cost: 0
    };
  },
  props: ["holdings", "show"],
  methods: {
    close() {
      this.$emit("close");
      this.quantity = "";
      this.brokerage = 0;
      this.cost = 0;
    },
    calcCost() {
      this.brokerage = this.holdings.share.price * this.quantity * 0.0025 + 50;
      this.cost = this.holdings.share.price * this.quantity - this.brokerage;
    },
    sell() {
      axios
        .post("https://fierce-lake-99257.herokuapp.com/accounts/sell", {
          accountId: "5adc38024e5991001583895d",
          symbol: this.holdings.share.symbol,
          quantity: this.quantity
        })
        .then(res => {
          console.log(res);

          if (res.status == 200) {
            this.close();
            this.$router.push("/review");
          }
        });
    }
  },
  computed: {
    twoDecimals() {
      return this.holdings.share.price.toLocaleString("en-AU", {
        style: "currency",
        currency: "AUD"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.quantity {
  padding: 24px 32px;
}

.quantity-field {
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 0;
  }
}

.pricing {
  padding: 24px 32px;
  background: #fbab39;
}

.field {
  flex: 1;
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }
}

.btn-submit {
  color: #fbab39;
  background: #fff;
  transition: all 300ms ease;

  &:hover {
    transform: scale(1.025);
  }
}

input {
  flex: 1;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
}
</style>
