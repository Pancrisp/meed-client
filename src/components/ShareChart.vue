<template>
  <div class="container flex px3">
    <NavApp/>
      <div class="workspace">
        <div id ="container">
          <table>
            <thead>
                <tr>
                  <th>{{shares.name}} Stock Chart</th>
                  <th>Last Four Days</th>
                </tr>
                <tr>
                  <th><highstock :chart="chart"></highstock></th>
                  <th><highcharts :chart="chart"></highcharts></th>
                </tr>
            </thead>
          </table>
        </div>
      </div>
  </div>
</template>

<script>
import NavApp from "@/components/partials/NavApp.vue";
import VueHighcharts from "vue-highcharts";
import Highcharts from "highcharts/highstock";

Vue.use(VueHighcharts, { Highcharts });

var chart = Highcharts.stockChart("container", {
  //format stockchart
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
    borderWidth: 0
  },

  chart: {
    events: {
      load: function(shares) {
        // set up the updating of the chart each second
        var series = this.series[0];
        setInterval(function() {
          var x = new Date().getTime(), // current time
            y = Math.round(Math.random() * 100);
          series.addPoint([x, y], true, true);
        }, 1000);
      }
    },

    xAxis: {
      type: "datetime",
      visibile: true
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
        data: function() {
          // generate an array of shares data
          var shares = [],
            time = new Date().getTime(),
            i;

          for (i = -999; i <= 0; i += 1) {
            shares.push([time + i * 1000, Math.round(Math.random() * 100)]);
          }
          return shares;
        }
      }
    ]
  }
});

export default {
  name: "ShareChart",
  components: {},
  data() {
    return {
      stockChart: chart
    };
  },
  props: ["shares"]
};
</script>


<style lang="scss" scoped>
#container {
  min-width: 310px;
  max-width: 800px;
  height: 400px;
  margin: 0 auto;
}

th {
  padding: 0.5rem 1rem;
  font-weight: 500;
}

thead {
  margin-right: 0.5rem;
  text-align: left;
  text-transform: uppercase;
}

td {
  padding: 0.5rem 1rem;
  font-weight: 500;
}
</style>


