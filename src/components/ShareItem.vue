<template>
  <tr>
    <td>{{ shares.name }}</td>
    <td>{{ shares.symbol }}</td>
    <td>{{ shares.price | currency }}</td>
    <td class="action">
      <div class="btn btn-buy" @click="showModal = true">Buy</div>
      <!-- modal that allows users purchase or sell shares -->
      <new-order-modal
        :shares="shares" :show="showModal" @close="showModal = false"
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
  props: ["shares"],
  data() {
    return {
      showModal: false
    };
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
  color: #fff;
}

.btn-buy {
  background: #38be0f;
}

.btn-chart {
  background: #a8a8a8;
  width: auto;
}
</style>

