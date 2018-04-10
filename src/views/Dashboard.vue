<template>
  <div class="container flex">
    <NavApp/>
    <main class="workspace">
      <div class="summary">
        <div class="fields card">Balance</div>
        <div class="fields card">This period change</div>
        <div class="fields card">Net worth</div>
      </div>
      <div class="chart card">Big ass chart</div>
      <ShareList/>
    </main>
  </div>
</template>

<script>
import NavApp from "@/components/NavApp.vue";
import ShareList from "@/components/ShareList.vue";

export default {
  name: "dashboard",
  components: {
    NavApp,
    ShareList
  }
};
</script>

<style lang="scss" scoped>
.workspace {
  width: 80%;
}

.grid {
  display: grid;
  grid-template-columns: 20% 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "nav dashboard bashboard";
}

.chart {
  height: 400px;
  width: 100%;
  padding: 10rem;
  font-weight: 500;
  font-size: 3rem;
  text-align: center;
}

.card {
  background-color: #afafaf;
  border-radius: 4px;
}

.summary {
  display: flex;
  margin-bottom: 2rem;
}

.fields {
  flex: 1;
  margin-right: 1rem;
  padding: 1rem;
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;

  &:last-of-type {
    margin-right: 0;
  }
}
</style>
