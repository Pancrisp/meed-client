<template>
  <modal :show="show" @close="close">
    <div class="blockModal">
      <img src="../../../public/block_icon.svg" alt="blockicon">
      <h3 class="label">Are you sure</h3>
      <p class="label">Are you sure you want to block {{ name }}?</p>

      <div class="confirm-field">
        <input type="button" class="btn btn-block" value="Block" @click="block">
        <input type="button" class="btn btn-cancel" value="Cancel" @click="cancel">
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "Confirmation",
  components: {
    Modal
  },
  props: ["name", "show"],
  methods: {
    close() {
      this.$emit("close");
    },

    block() {},

    cancel() {}
  }
};
</script>

<style scoped>
.btn-block {
  color: #fff;
  background: rgb(231, 43, 43);
  transition: all 300ms ease;
}

.btn-cancel {
  color: #fff;
  background: #838282;
  transition: all 300ms ease;
}

.blockModal img {
  width: 240px;
}
</style>
