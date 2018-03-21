<template>
  <div class="container flex">
    <nav class="menu">
      <div class="ctg">
        <h4 class="ctg-title">Browse</h4>
        <router-link to="/dashboard">Charts</router-link>
        <router-link to="/holdings">View holdings</router-link>
        <router-link to="/leaderboard">Leaderboard</router-link>  
      </div>
      <div class="ctg">
        <h4 class="ctg-title">Trade</h4>
        <router-link to="/buy">Buy</router-link>
        <router-link to="/sell">Sell</router-link>
      </div>
      <div class="ctg">
        <h4 class="ctg-title">Friends</h4>
        <router-link to="/sell">Request money</router-link>
        <router-link to="/buy">Send money</router-link>
      </div>
    </nav>

    <main class="dashboard">
      <div class="summary">
        <div class="fields card">Balance</div>
        <div class="fields card">This period change</div>
        <div class="fields card">Net worth</div>
      </div>
      <div class="chart card">Big ass chart</div>

    </main>
  </div>
</template>

<style lang="scss" scoped>
a {
  display: block;
  padding: .25rem 0;
  color: #333;
  line-height: 1.25;
  font-weight: 500;

  &.router-link-exact-active {
    color: #ecb900;
  }

  &:hover {
    color: #ecb900;
  }
}

.menu {
  width: 20%;
}

.dashboard {
  width: 80%;
}

.ctg {
  margin-bottom: 2rem;
}
.ctg-title {
  margin: 0.5rem 0;
  // color: #4e4e4e;
  color: lighten(#333, 30%);
  font-weight: 500;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.grid {
  display: grid;
  grid-template-columns: 20% 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "nav dashboard bashboard"
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
