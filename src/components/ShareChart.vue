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
    $(function() {
      var chart = Highcharts.chart("container", {
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
            text: "Share Prices"
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

<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>

<style lang="scss" scoped>
#container {
  min-width: 310px;
  max-width: 800px;
  height: 400px;
  margin: 0 auto;
}
</style>


