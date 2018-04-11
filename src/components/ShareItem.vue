<template>
  <div>
    <li></li>
  </div>
</template>

<script>
export default {
  name: ShareItem,
  data() {
    return {
      symbol: "",
      name: "",
      price: "",
      timestamp: ""
    };
  },
  props: ["symbol", "name", "price", "timestamp"],
  computed: {}
};
</script>

<style lang="scss" scoped>

</style>
