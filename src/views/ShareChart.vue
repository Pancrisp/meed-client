<template>
  <div class="container flex px3">
    <NavApp/>
    <div class="workspace">
      <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
      <script src="https://code.highcharts.com/highcharts.js"></script>
      <div id ="container">


     </div>
    </div>
  </div>
</template>

<script>
import NavApp from "@/components/partials/NavApp.vue";
import Highcharts from "highcharts";
import axios from "axios";

export default {
  name: "ShareChart",
  components: {
    ShareItem
  },
  data() {
    return {};
  },
  props: ["shares"],
  ready() {
    $(function() {
      var chart = Highcharts.chart("container", {
        xAxis: {
          categories: ["Mon", "Tues", "Wed", "Thurs"]
        },
        yAxis: {
          title: {
            text: "Share Prices"
          }
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false
            }
          }
        },
        series: [
          {
            name: shares.price,
            data: [29.9, 71.5, 106.4, 129.2]
          }
        ],
        created() {
          axios
            .get("https://fierce-lake-99257.herokuapp.com/leaderboard")
            .then(res => {
              this.shares = res.data;
            })
            .catch(err => {
              console.log(err);
            });
        }
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


