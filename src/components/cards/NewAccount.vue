<template>
  <div class="card">
    <div class="card-container">
      <form @submit.prevent="createNewAccount">
        <label class="label">Trading account name</label>
        <input class="namefield" v-model="name" type="text">
        <button class="btn btn-create" :class="{ disabled: isDisabled }" :disabled="isDisabled">Create a trading account</button>
      </form>
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
  },
  computed: {
    isDisabled() {
      if (this.name.length >= 3) {
        return false;
      } else {
        return true;
      }
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
  width: 100%;
  font-size: 14px;
  padding: 1rem;
  color: #fff;
  background: var(--primary-color);
  transition: 150ms ease;
  letter-spacing: 1px;
}

.disabled {
  color: #969696;
  background: #e8e8e8;
  cursor: default;
}
</style>
