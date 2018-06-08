<template>
  <modal :show="show" @close="close">
    <div class="blockModal">
      <img src="../../../public/block_icon.svg" alt="blockicon">
      <h2 class="label">Are you sure you want to block <b>{{ name }}</b>?</h2>
      <div class="btn-container">
        <input type="button" class="btn btn-cancel" value="Cancel" @click="cancel">
        <input type="button" class="btn btn-block" value="Block" @click="block">
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
  data: {
    disabled: false
  },
  props: ["name", "show"],
  methods: {
    close() {
      this.$emit("close");
    },
    cancel() {
      this.close();
    },
    disabled() {
      this.$emit("!disabled");
    },
    block() {
      this.disabled();
    }
  }
};
</script>

<style scoped>
.blockModal {
  text-align: center;
  width: 60%;
  margin: 0 auto;
}

.blockModal img {
  width: 120px;
  display: block;
  margin: 2rem auto;
}

.btn {
  color: #fff;
  margin: 0 1rem;
  flex: 1;
}

.btn-block {
  background: #ff2c2c;
}

.btn-cancel {
  background: #bbbbbb;
}

.btn-container {
  display: flex;
  margin: 2rem;
}
</style>
