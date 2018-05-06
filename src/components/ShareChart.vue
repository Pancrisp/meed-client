<template>
  <div class="container flex px3">
    <NavApp/>
    <div class="workspace">

      <div id ="container">

     </div>
    </div>
  </div>
</template>

<script>
import NavApp from "@/components/partials/NavApp.vue";
import Highcharts from "highcharts";
import highcharts from "commonjs-highcharts";

export default {
  name: "ShareChart",
  components: {
    ShareItem
  },
  data() {
    return {
      shares: []
    };
  },
  props: ["shares"],
  ready() {
    $(function(data) {
      var chart = Highcharts.stockChart("container", {
        rangeSelector: {
          selected: 1
        },
        xAxis: {
          // categories: ["Mon", "Tues", "Wed", "Thurs"],
          type: "datetime",
          dateTimeLabelFormats: {
            day: "%e of %b"
          }
        },
        yAxis: {
          title: {
            text: shares.name + "Prices"
          }
        },
        plotOptions: {},
        series: [
          {
            name: "shares",
            data: this.price,
            pointStart: Date.UTC(2018, 05, 02),
            pointInterval: 24 * 3600 * 1000 // one day
          }
        ]
      });
    });
  }
};
</script>


<style lang="scss" scoped>
#container {
  min-width: 310px;
  max-width: 800px;
  height: 400px;
  margin: 0 auto;
}
</style>


