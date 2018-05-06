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
  // props: ["shares"],
  ready() {
    $(function(data) {
      var chart = Highcharts.stockChart("container", {
        rangeSelector: {
          selected: 4
        },

        xAxis: {
          // categories: ["Mon", "Tues", "Wed", "Thurs"],
          type: "datetime",
          dateTimeLabelFormats: {
            day: "%e of %b"
          },
          visibile: true
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
            data: createData()
            // pointInterval: 24 * 3600 * 1000 // one day
          }
        ]
      });
    });
  },

  computed: {
    function() {
      startDate = Date.UTC(2018, 5, 1);
      (createData = function(beginDate) {
        shares = [];
        for (var i = 0; i < 11; i++) {
          shares.push([beginDate + 3600 * 1000 * 24 * i, Math.random() * 100]);
        }
        return shares;
      }),
        (nextDay = function() {
          startDate += 3600 * 1000 * 24;
          chart.series[0].setData(createData(startDate), true);
          setTimeout(nextDay, 2000);
        });

      setTimeout(nextDay, 2000);
    }
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


