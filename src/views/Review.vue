<template>
  <div class="container flex px3">
    <NavApp/>
    <div class="workspace">
      <div class="toggle">
        <button class="btn btn-large" :class="{ active: holdingsActive }" @click="holdingsToggle">Current Holdings</button>
        <button class="btn btn-large" :class="{ active: historyActive }" @click="historyToggle">Transaction History</button>
      </div>

      <div class="historyToggle">
        <label onclick="" class="historyFilter-btn"><input type="radio" name="allShares"/>All Shares</label>
        <label onclick="" class="historyFilter-btn"><input type="radio" name="sharesBought"/>Shares Bought</label>
        <label onclick="" class="historyFilter-btn"><input type="radio" name="sharesSold"/>Shares Sold</label>
      </div>



      <!-- Current holdings -->
      <div v-if="showHoldings">
        <user-holdings :holdings="holdings"></user-holdings>
      </div>
      <!-- Transaction history -->
      <div v-if="showHistory">
        <user-transactions :transactions="transactions"></user-transactions>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserTransactions from "@/components/UserTransactions.vue";
import NavApp from "@/components/partials/NavApp.vue";
import UserHoldings from "@/components/UserHoldings.vue";

export default {
  name: "Review",
  components: {
    NavApp,
    UserHoldings,
    UserTransactions
  },
  data() {
    return {
      holdingsActive: true,
      historyActive: false,
      showHoldings: true,
      showHistory: false,
      holdings: [],
      transactions: []
    };
  },
  methods: {
    holdingsToggle() {
      this.showHoldings = !this.showHoldings;
      this.holdingsActive = !this.holdingsActive;
      this.showHistory = false;
      this.historyActive = false;
    },
    historyToggle() {
      this.showHistory = !this.showHistory;
      this.historyActive = !this.historyActive;
      this.showHoldings = false;
      this.holdingsActive = false;

      $(".historyFilter-btn:not('.noscript') input[type=radio]").addClass(
        "visuallyhidden"
      );
      $(".historyFilter-btn:not('.noscript') input[type=radio]").change(
        function() {
          if ($(this).attr("name")) {
            $(this)
              .parent()
              .addClass("success")
              .siblings()
              .removeClass("success");
          } else {
            $(this)
              .parent()
              .toggleClass("success");
          }
        }
      );
    }
  },
  created() {
    axios
      .get(
        "https://fierce-lake-99257.herokuapp.com/accounts/5adb15fd81c30b4847fdae24"
      )
      .then(res => {
        this.holdings = res.data.shares;
        this.transactions = res.data.transactions;
      });
  }
};
</script>

<style lang="scss" scoped>
.toggle {
  margin: 0 auto;
}

.btn {
  margin-right: 1rem;
  padding: 16px;
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px hsl(40, 100%, 50%);
  transition: box-shadow 400ms ease;
  outline: none;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    box-shadow: inset 0 0 0 2px var(--primary-color);
  }
}

.active {
  color: #fff;
  background: var(--primary-color);
  box-shadow: none;
}

label {
  padding: 0.4em 2em 0.3em 0;
}
.historyToggle {
  margin-right: 2rem;
  padding: 10px;
}
.historyFilter-btn {
  text-align: centre;
  font-size: 14px;
  font-weight: 500;
  margin: 5px 2px;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  display: inline-block;
  border: solid 1px rgb(255, 196, 34);
  cursor: pointer;
}

.historyToggle .historyFilter-btn {
  margin: 5px 0;
  padding: 0.01em 2.5em;
  border-radius: 0;
  border-right-color: white;
}
.historyToggle .historyFilter-btn:first-child {
  margin-left: 2px;
  border-radius: 10px 0px 0px 10px;
}
.historyToggle .historyFilter-btn:last-child {
  margin-right: 2px;
  border-radius: 0px 5px 5px 0px;
  border-right: solid 1px #ccc;
}

.historyFilter-btn:hover {
  border: solid 1px #f1a155 !important;
  background: #f1a155;
  color: rgb(255, 255, 255);
}

.historyFilter-btn.success {
  background: #f1a155;
  border: solid 1px #f1a155 !important;
}

.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.visuallyhidden.focusable:active,
.visuallyhidden.focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}
</style>
