<template>
  <div class="landing">
    <Header/>
    <img src="../assets/logo.png">
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>

</style>

