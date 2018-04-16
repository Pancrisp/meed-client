<template>
  <div class="container flex px3">
    <NavApp/>
    <div class="workspace">
      <h1 class="page-title">Holdings</h1>
    </div>
  </div>
</template>

<script>
import NavApp from "@/components/partials/NavApp.vue";

export default {
  name: "holdings",
  components: {
    NavApp
  }
};
</script>
