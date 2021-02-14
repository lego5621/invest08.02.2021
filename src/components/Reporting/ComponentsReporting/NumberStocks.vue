<template>
   <v-card
    rounded="lg"
    class=" mb-5 pa-4"
    elevation="0"
  >
  <p class="text-h5">Количество акций: Уменьшается</p>
  <LineChart :chartdata="chartdata" :options="options" class="height200px"/>
  <p class="text-h6 mb-2">Что это значит:</p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit, quasi accusamus quae sunt veritatis alias, necessitatibus recusandae dignissimos optio eligendi vitae illum. Eaque, maxime! Provident nihil impedit porro vel.
  </v-card>
</template>

<script>
import LineChart from '@/components/Reporting/ComponentsReporting/LineChart'

 export default {
   components: {
    LineChart,
  },
    name: 'PE',
    data: () => ({
    chartdata: {
      labels: ['2015', '2016', '2017', '2018', '2019'],
      datasets: [
        {
          label: "",
          data: [12, 13, 12, 10, 9], 
          fill: false,
          borderColor:'rgba(31, 69, 98, 0.65)',
          borderWidth:10,
        }
      ]
    },
    options: {
      animation: {
          duration: 2000,
        },
      elements: {
        point:{
          radius: 2,
          borderColor:'rgba(31, 69, 98, 0.65)',
        }
      },
     scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
        }],
        yAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            ticks: {
              beginAtZero: true,
            },
        }]
    },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
    }
  }),

  }
</script>

<style lang="css" scoped>
  .height200px{
    height: 210px !important;
  }
  .v-expansion-panel::before{
    box-shadow:none !important;
  }
</style>


