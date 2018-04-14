<template>
  <div>
    <ul v-for="share in shares" :key="share.symbol">
      <ShareItem :symbol="share.symbol" :name="share.name" :price="share.price" />
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import ShareItem from "./ShareItem.vue";

export default {
  name: "ShareList",
  components: {
    ShareItem
  },
  data() {
    return {
      shares: [
        {
          symbol: "MSFT",
          name: "Microsoft",
          price: "90.6900",
          volume: "31501471",
          timestamp: "2018-04-09 16:27:42"
        },
        {
          symbol: "FB",
          name: "Facebook",
          price: "157.8500",
          volume: "34682258",
          timestamp: "2018-04-09 16:46:39"
        },
        {
          symbol: "AAPL",
          name: "Apple",
          price: "170.1800",
          volume: "28971635",
          timestamp: "2018-04-09 16:14:50"
        },
        {
          symbol: "NVDA",
          name: "NVIDIA",
          price: "217.4000",
          volume: "12429542",
          timestamp: "2018-04-09 17:00:00"
        },
        {
          symbol: "TSLA",
          name: "TESLA",
          price: "289.6300",
          volume: "10241500",
          timestamp: "2018-04-09 16:00:00"
        }
      ]
    };
  },
  props: {},
  computed: {},
  created() {
    // axios
    //   .get(
    //     "https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=MSFT,FB,AAPL,NVDA,TSLA&apikey=Z0JEM1GFP37D111E"
    //   )
    //   .then(res => {
    //     console.log(res);
    //     this.shares.push(res.data["Stock Quotes"]);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
};
</script>

<style lang="scss" scoped>

</style>
