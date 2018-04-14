<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ symbol }}</td>
    <td>{{ price | currency }}</td>
    <td>{{ volume | number }}</td>
  </tr>
</template>

<script>
export default {
  name: "ShareItem",
  props: ["symbol", "name", "price", "volume"],
  filters: {
    currency(price) {
      return price.toLocaleString("en-AU", {
        style: "currency",
        currency: "AUD"
      });
    },
    number(value) {
      return value.toLocaleString();
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  padding: 1rem;
  font-weight: 500;
}
</style>
