<template>
  <modal :show="show" @close="close">
    <form class="flex" @submit.prevent="buy">
      <div class="quantity flex-2">
        <div class="quantity-field">
          <label class="label">Name</label>
          <input type="text" :value="name" disabled>
        </div>

        <div class="flex">
          <div class="field">
            <label class="label">Price</label>
            <input type="text" :value="price" disabled>
          </div>
          <div class="field">
            <label class="label">Quantity</label>
            <input type="text" v-model="quantity" @keyup="calcCost" required>
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
          <input type="button" class="btn btn-submit" value="Buy">
        </div>
      </div>
    </form>
  </modal>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "NewOrderModal",
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      quantity: "",
      brokerage: 0,
      cost: 0
    };
  },
  props: ["symbol", "name", "price", "timestamp", "show"],
  methods: {
    close() {
      this.$emit("close");
    },
    calcCost() {
      this.brokerage = this.price * this.quantity * 0.01 + 50;
      this.cost = this.price * this.quantity * 1.01 + 50;
    },
    buy() {
      this.close();
    }
  },
  filters: {
    currency(price) {
      return price.toLocaleString("en-AU", {
        style: "currency",
        currency: "AUD"
      });
    }
  },
  mounted: function() {
    document.addEventListener("keydown", e => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
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
