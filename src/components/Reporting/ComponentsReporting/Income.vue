<template>
  <v-card
    rounded="lg"
    class=" mb-5 pa-4"
    elevation="0"
    min-height="400px"
  >
    <div>
      <p class="text-h5 " id="income" style="padding-top: 80px; margin-top: -80px;">Чистая Прибыль: Растущая</p>
      <Bar :chartdata="chartdata" :options="options" ></Bar>
      <div class="mt-4">
        <p class="text-h6 mb-2" >Что это значит:</p>
        При растущей выручке <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit, quasi accusamus quae sunt veritatis alias, necessitatibus recusandae dignissimos optio eligendi vitae illum. Eaque, maxime! Provident nihil impedit porro vel.
      </div>
    </div>
  </v-card>
</template>
  
<script>
  import Bar from '@/components/Reporting/ComponentsReporting/BarChart'

 export default {
  components: {
    Bar,
  },
  data: () => ({
    chartdata: {
      labels: ['2015', '2016', '2017', '2018', '2019'],
      datasets: [
        {
          label: "",
          backgroundColor: 'rgba(31, 69, 98, 0.65)',
          data: [100, 120, 150, 140, 165], 
          categoryPercentage: 1,
        }
      ]
    },
    options: {
      animation: {
            duration: 2000,
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
    layout: {
      padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 0,
        }
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
  .overflow{
    overflow-x: auto;
  }
</style>


