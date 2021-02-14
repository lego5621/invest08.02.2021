<template>
  <v-card
    rounded="lg"
    class=" mb-5 pa-4"
    elevation="0"

  >
    <p class="text-h5 " id="debit" style="padding-top: 80px; margin-top: -80px;">Уровень долга: Низкий, и растет\падает</p>
    <LineChart :chartdata="chartdata" :options="options" class="height210px"/>
    <p class="text-h6 mb-2">Что это значит:</p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit, quasi accusamus quae sunt veritatis alias, necessitatibus recusandae dignissimos optio eligendi vitae illum. Eaque, maxime! Provident nihil impedit porro velProvident nihil impedit porro vel.
  </v-card> 
</template>
  
<script>
  import LineChart from '@/components/Reporting/ComponentsReporting/LineChart'

  export default {
    components: {
      LineChart,
    },
    name: 'Debit',
    data: () => ({
      chartdata: {
        labels: ["2015", "2016", "2017", "2018", "2019",],
        datasets: [{
            label: 'Закредитованость',
            data: [10, 20, 25, 20, 30,],
            fill: false,
            borderColor:'rgba(31, 69, 98, 0.65)',
            borderWidth: 3,
          },
        ]
      },
      options: {
        responsive: true,
        animation: {
          duration: 2000,
        },
        layout: {
          padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }
        },
        maintainAspectRatio: false,
        legend: {
          display: false
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
      }
    }),
  }
</script>

<style lang="css" scoped>
  .overflow{
    overflow-x: auto;
  }
</style>


