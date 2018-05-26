<template>
  <modal :show="show" @close="close">
    <div class="shareChart">
      <table>
        <thead>
          <tr v-for="share in shares.priceHistory" :key="share._id">
            <h3> Previous prices of <b>{{ shares.name }}</b> </h3>
            <th>{{ share.date | date }}</th>
            <th>{{ share.date | date }}</th>
            <th>{{ share.date | date }}</th>
            <th>{{ share.date | date }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="share in shares" :key="share._id">
            <td>{{ share.priceHistory.price | currency}}</td>
            <td>{{ share.priceHistory.price | currency}}</td>
            <td>{{ share.priceHistory.price | currency}}</td>
            <td>{{ share.priceHistory.price | currency}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </modal>
</template>

<script>
import axios from "axios";
import format from "date-fns/format";
import Modal from "./Modal.vue";

export default {
  name: "ShareChartModal",
  components: {
    Modal
  },
  props: ["show", "shares"],
  methods: {
    close() {
      this.$emit("close");
    },
    cancel() {
      this.close();
    }
  },
  filters: {
    date(val) {
      return format(val, "DD MMM YYYY, h:mm A");
    }
  },
  computed: {
    twoDecimals() {
      return this.shares.price.toLocaleString("en-AU", {
        style: "currency",
        currency: "AUD"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  padding: 1rem;
  font-weight: 500;
}
.shareChart {
  text-align: center;
  width: 60%;
  margin: 0 auto;
}
</style>

