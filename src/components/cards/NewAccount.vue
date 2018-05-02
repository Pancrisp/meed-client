<template>
  <div class="card">
    <div class="card-container">
      <label class="label">Trading account name</label>
      <input class="namefield" v-model="name" type="text">
      <div class="btn btn-create" @click="createNewAccount">Create a trading account</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewAccount",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    createNewAccount() {
      this.$store.dispatch("createNewAccount", {
        userId: this.$store.getters.userId,
        name: this.name
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 560px;
  margin: 1rem;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.05);
  transition: 250ms ease;
  border-radius: 4px;
  background: #fff;
  overflow: hidden;
}

.card-container {
  margin: 1rem auto;
  max-width: 400px;
}

.namefield {
  margin-top: 0.5rem;
}

.btn-create {
  margin: 0 auto;
  padding: 1rem;
  background: #e8e8e8;
  cursor: pointer;

  &:hover {
    background: darken(#e8e8e8, 5%);
  }
}
</style>
