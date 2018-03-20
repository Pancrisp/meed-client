<template>
  <div class="container">
    <div class="accounts-list">
      <div class="card">
        <div class="card-img">
          <img src="../assets/asx.jpg" alt="">
        </div>
        <div class="card-info">
          <div class="card-name">
            <p>Balance</p>
            <p>$1,000,000</p>
          </div>
          <div class="card-meta">

          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="../assets/asx.jpg" alt="">
        </div>
        <div class="card-info">
          <div class="card-name">
            <p>Balance</p>
            <p>$1,000,000</p>
          </div>
          <div class="card-meta">

          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<style lang="scss" scoped>
.accounts-list {
  margin: 3rem 0;
  display: flex;
}

.card {
  display: flex;
  flex: 1;
  margin: 0 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: 200ms ease;
  border-radius: 4px;
  background: #fff;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.07);
  }
}

.card-img img {
  display: block;
  height: 200px;
}
</style>
