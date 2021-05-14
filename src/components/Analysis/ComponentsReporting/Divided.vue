<template>
  <v-card
    rounded="xl"
    class="pa-4 mb-5 specialColor"
    elevation="0"
    min-height="400px"
  >
    <div>
      <p class="text-h5 mb-0 font-weight-medium">
        <v-icon size="50" class="mr-2"> mdi-arrow-top-right </v-icon>
        Дивиденды
      </p>
      <div class="mt-3">
        Компания собираеться направлять на дивиденды 60% своей чистой прибыли. <span class="goodAnalysis">Прогназируемая доходность 7% </span>
      </div>
      <div>
        <apexchart width="100%" height= "400px"  type="bar" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
  </v-card>
</template>
  
<script>
  import { mapGetters } from "vuex";

  export default {

    computed: {
      ...mapGetters([
        'DividendHistorical',
        'loaded'
      ])
    },

  data: () => ({ 
     series: [{
            name: 'PRODUCT A',
            data: [21, 22, 23, 24, 25]
     }],
          chartOptions: {            
            states: {
              normal: {
                filter: {
                    type: 'none',
                    value: 1,
                }
              },
              hover: {
                  filter: {
                      type: 'darken',
                      value: 1,
                  }
              },
              active: {
                  allowMultipleDataPointsSelection: false,
                  filter: {
                      type: 'darken',
                      value: 1,
                  }
              },
            },
            colors:['#51a9f0', '#57b4ff'],
            tooltip: {
              theme: 'dark',
            },
            grid: { 
              show: false
            },
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: false
              },
              zoom: {
                enabled: false
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
                }
              }
            }],
            plotOptions: {
              bar: {
                borderRadius: 8,
                horizontal: false,
              },
            },
            
            xaxis: {
              categories: [ '2016 ', '2017 ', '2018 ', '2019 ', '2020 '],
              labels: {
                style: {
                    colors: ["#42A5F5","#42A5F5","#42A5F5","#42A5F5","#42A5F5",],
                    fontSize: '15px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
              }
            },
            yaxis: {
              show: false,
            },
            legend: {
               show: false
            },
            fill: {
              opacity: 1,
            }
          },  
  })
}
</script>

<style lang="css" scoped>
  .overflow{
    overflow-x: auto;
  }
</style>


