<template>
  <div class="landing">
    <Header/>
    <div>
      <img src="../assets/logo.png">
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/partials/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  margin: 2rem auto;
}
</style>

