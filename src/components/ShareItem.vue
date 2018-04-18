<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ symbol }}</td>
    <td>{{ price | currency }}</td>
    <td class="action">
      <div class="btn btn-buy" @click="showModal = true">Buy</div>

      <!-- modal that allows users purchase or sell shares -->
      <new-order-modal
        :show="showModal" @close="showModal = false"
        :symbol="symbol" :name="name" :price="price"
      ></new-order-modal>
    </td>
  </tr>
</template>

<script>
import NewOrderModal from "./modals/NewOrderModal.vue";

export default {
  name: "ShareItem",
  components: {
    NewOrderModal
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
}

.btn-buy {
  background: #38be0f;
}
</style>
