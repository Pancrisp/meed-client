<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ symbol }}</td>
    <td>{{ price | currency }}</td>
    <td class="action">
      <div class="btn btn-buy" @click="showModal = true">Buy</div>
      <Modal v-if="showModal" @close="showModal = false"
      :symbol="symbol" :name="name" :price="price" />
    </td>
  </tr>
</template>

<script>
import Modal from "../modals/Modal.vue";

export default {
  name: "ShareItem",
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    };
  },
  props: ["symbol", "name", "price", "timestamp"],
  methods: {},
  filters: {
    currency(price) {
      return price.toLocaleString("en-AU", {
        style: "currency",
        currency: "AUD"
      });
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
.btn-cancel {
  color: red;
  border: 1px solid red;
  background: #fff;
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
