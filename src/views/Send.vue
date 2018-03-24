<template>
  <div class="container flex">
    <NavApp/>
    <div class="workspace">
      <h1>Send money</h1>
    </div>
  </div>
</template>

<script>
import NavApp from "@/components/NavApp.vue";

export default {
  name: "send",
  components: {
    NavApp
  }
};
</script>
