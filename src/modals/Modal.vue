<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <form class="flex" @submit.prevent="buy">
            <div class="quantity flex-2">
              <div class="flex">
              <label>Name</label>
              <input type="text" :value="name" disabled>
              </div>

              <div class="flex">
                <label>Price</label>
                <input type="text" :value="price" disabled>
              </div>

              <div class="flex">
                <label>Quantity</label>
                <input type="text" v-model="quantity" @keyup="calcCost" required>
              </div>
            </div>
            <div class="pricing flex-1">
              <div class="pricing-fields">
                <p>Brokerage: {{ brokerage | currency }}</p>
                <p>Total cost: {{ cost | currency }}</p>
              </div>
              <div class="pricing-fields">
                <input type="button" class="btn btn-submit" value="Buy">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      showModal: false,
      quantity: "",
      brokerage: 0,
      cost: 0
    };
  },
  props: ["symbol", "name", "price", "timestamp"],
  methods: {
    close() {
      this.$emit("close");
    },
    calcCost() {
      this.brokerage = this.price * this.quantity * 0.01 + 50;
      this.cost = this.price * this.quantity * 1.01 + 50;
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
  mounted: () => {
    document.addEventListener("keydown", e => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 480px;
  margin: 0 auto;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 300ms ease;
}

.quantity {
  padding: 20px 30px;
}

.pricing {
  background: #fbab39;
}

.pricing-fields {
  padding: 16px;
}

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}

.btn {
  color: #fbab39;
  background: #fff;
  border: none;
  border-radius: 0;
}

label {
  flex: 1;
}

input {
  flex: 1;
}
</style>
