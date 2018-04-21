<template>
  <tr>
    <td>{{ shares.name }}</td>
    <td>{{ shares.symbol }}</td>
    <td>{{ shares.price | currency }}</td>
    <td class="action">
      <div class="btn btn-buy" @click="showModal = true">Buy</div>
      <!-- modal that allows users purchase or sell shares -->
      <new-order-modal
        :show="showModal" @close="showModal = false"
        :name="shares.name" :price="shares.price"
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
  props: ["shares"]
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
  color: #fff;
}

.btn-buy {
  background: #38be0f;
}
</style>
