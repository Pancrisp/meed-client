<template>
  <modal :show="show" @close="close">
    <div class="blockModal">
      <br>
      <img src="../../../public/block_icon.svg" alt="blockicon">
      <br>
      <h3 class="label">Are you sure</h3>
      <p class="label">Are you sure you want to block {{ name }}?</p>
      <br>
      <table class="confirm-field" align="center">
        <th>
          <td><input type="button" class="btn btn-cancel" value="Cancel" @click="cancel"></td>
          <td></td>
          <td><input type="button" class="btn btn-block" value="Block" @click="block"></td>
        </th>
      </table>
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
  width: 120px;
}

.btn-cancel {
  color: #fff;
  background: #838282;
  transition: all 300ms ease;
  width: 120px;
}

.blockModal img {
  width: 130px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

td {
  padding: 0.5rem 1rem;
  font-weight: 500;
  width: 10px;
}

.label,
.blockModal img {
  text-align: center;
}
</style>
