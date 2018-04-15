<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
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

            <div v-if="quantity > 0">
              <p>Brokerage: {{ brokerage | currency }}</p>
              <p>Total cost: {{ cost | currency }}</p>
            </div>
            <div class="flex">
              <input type="button" class="btn btn-submit" value="Buy">
              <input type="button" @click="close" class="btn btn-cancel" value="Cancel">
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
      quantity: ""
    };
  },
  props: ["symbol", "name", "price", "timestamp"],
  methods: {
    close() {
      this.$emit("close");
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
</style>
