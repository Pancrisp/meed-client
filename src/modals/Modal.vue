<template>
  <transition name="modal">
    <div class="modal-mask" @click="close" v-show="show">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop>

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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 250ms ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 720px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  overflow: hidden;
  transition: all 250ms ease;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}

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
  background: #fbab39;
  padding: 24px 32px;
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
