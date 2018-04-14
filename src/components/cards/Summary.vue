<template>
  <div>
    <p>{{ value | currency }}</p>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Summary",
  props: {
    value: {
      type: Number,
      default: 0
    },
    title: {
      required: true
    }
  },
  filters: {
    currency(value) {
      return value.toLocaleString("en-AU", {
        style: "currency",
        currency: "AUD"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 320px;
  padding: 1rem 0;
  text-align: center;
  background: #fff;
  border: 1px solid #afafaf;
  border-radius: 4px;
}

p {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
  font-weight: 700;
}

h3 {
  margin: 0.5rem 0 0 0;
  color: lighten(#333, 30%);
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
