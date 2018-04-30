<template>
  <router-link to="/dashboard">
    <div class="card">
      <div class="card-img">
        <img src="@/assets/uncle_scrooge.png" alt="">
      </div>
      <div class="card-info">
        <div class="card-name">
          <h3 class="card-title">{{ name }}</h3>
          <p class="card-summary">An account summary here, what else can we include?</p>
        </div>
        <div class="card-meta">
          <div class="meta-fields">
            <h3 class="meta-title">Balance</h3>
            <p>{{ balance | currency }}</p>
          </div>
          <div class="meta-fields">
            <h3 class="meta-title">Net worth</h3>
            <p>{{ networth | currency }}</p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import axios from "axios";

export default {
  name: "Account",
  props: {
    name: String,
    account: String
  },
  data() {
    return {
      balance: 1000000,
      networth: 1000000
    };
  },
  mounted() {
    const account = this.account;

    axios
      .get(`https://fierce-lake-99257.herokuapp.com/accounts/${account}`)
      .then(res => {
        this.balance = res.data.balance;
        this.networth = res.data.networth;
      });
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  max-width: 560px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.05);
  transition: 250ms ease;
  border-radius: 4px;
  background: #fff;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.08);
  }
}

.card-img {
  display: block;
  margin: 1rem 2rem 1rem 0;
  max-height: 150px;

  img {
    display: block;
    max-height: 150px;
  }
}

.card-title {
  margin: 0 0 0.5rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.card-summary {
  margin: 0;
}

.card-info {
  margin: 1rem 1rem 1rem 0;
}

.card-name {
  height: 50%;
}

.card-meta {
  display: flex;
  height: 50%;
}

.meta-fields {
  margin-right: 3rem;
  font-weight: 500;
  align-self: flex-end;

  &:last-of-type {
    margin-right: 0;
  }

  p {
    margin: 0;
    color: hsl(145, 65%, 50%);
    font-size: 1.5rem;
  }
}

.meta-title {
  margin: 0 0 0.25rem;
  color: lighten(#333, 30%);
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
