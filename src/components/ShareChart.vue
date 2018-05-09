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
                  <th><vue-highcharts :options= "options" ref="stockCharts"></vue-highcharts></th>
                  <th><button @click="load">Load Chart</button></th>
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

var ShareChart;

ShareChart = Highcharts.stockChart("container", {

  //format stockchart
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
    borderWidth: 0
  },

  xAxis: {
    type: "datetime",
    visibile: true,
    units: ["day", [1, 4]],
    tickInterval: 4 * 24 * 3600 * 1000,
    showFirstLabel: true,
    startOnTick: false
  },

  yAxis: {
    title: {
      text: "Share Prices"
    }
  },

  plotOptions: {},
  series: [
    {
      name: "sharesItem",
      data: []
      //           {
      // //         //   // generate an array of shares data
      // //         shares: []
      // //         // time = new Date().getTime(),
      // //         // i;
      // //         // for (i = -999; i <= 0; i += 1) {
      // //         //   shares.push([time + i * 1000, Math.round(Math.random() * 100)]);
      // //         // }
      // //         // return shares;
    }
  ]
});

export default {
  name: "ShareChartItem",
  components: {
    VueHighcharts
  },
  data() {
    return {
      options: {
        ShareChart
      }
    };
  },
  props: ["shares"]
};
  methods: {
    load () {
      let stockCharts = this.$refs.stockCharts;
      setTimeout(() => {
        stockCharts.addSeries(ShareChart);
      });
    };
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


