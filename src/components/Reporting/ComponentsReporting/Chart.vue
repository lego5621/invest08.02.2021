<template>
  <v-card
    rounded="lg"
    class="mx-auto mb-5 pa-4"
    elevation="0"
  >
    <p class="text-h5 ">Волотильность: Низкая</p>
    <LineChart :chartdata="chartdata" :options="options" class="height210px"/>
    <div class="mt-4">
      <p class="text-h6 mb-2">Что это значит:</p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit, quasi accusamus quae sunt veritatis alias, necessitatibus recusandae dignissimos optio eligendi vitae illum. Eaque, maxime! Provident nihil impedit porro vel.
    </div>
  </v-card>
</template>

<script>
  import LineChart from '@/components/Reporting/ComponentsReporting/LineChart'

 export default {
   components: {
    LineChart,
  },
    name: 'Chart',
    data: () => ({
    chartdata: {
      labels: ['2005', '2006', '2007', '2008', '2009','2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019'],
      datasets: [
        {
          label: "",
          data: [21, 12, 50, 33, 22, 50, 13, 39, 25, 32, 21, 43, 23, 59, 42],
          backgroundColor: 'rgba(31, 69, 98, 0.65)',
        }
      ]
    },
    options: {
      animation: {
            duration: 2000,
        },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      elements: {
        point:{
          radius: 1
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
    }
    }
  }),

  }
</script>

<style lang="css" scoped>
  .overflow{
    overflow-x: auto;
  }
  .height210px{
    height: 210px !important;
  }
</style>


