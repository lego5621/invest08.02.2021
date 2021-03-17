<template>
  <v-card
    rounded="lg"
    class=" mb-5 pa-4 bacMain"
    elevation="0"
    min-height="400px"
  >
    <div>
      <p class="text-h5 mb-0 font-weight-medium">Дивиденды</p>
      <div>
        <apexchart width="100%" height= "400px" type="bar" :options="chartOptions" :series="series"></apexchart>
      </div>
      <div class="mt-4">
        <p class="text-h6 mb-2">Что это значит:</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit, quasi accusamus quae sunt veritatis alias, necessitatibus recusandae dignissimos optio eligendi vitae illum. Eaque, maxime! Provident nihil impedit porro vel.
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
            name: 'Первые выплаты',
            data: [20, 17, 19, 23, 27, 21]
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
              categories: ['2015 ', '2016 ', '2017 ', '2018 ', '2019 ', '2020 '],
              labels: {
                style: {
                    colors: ["#42A5F5","#42A5F5","#42A5F5","#42A5F5","#42A5F5","#42A5F5","#42A5F5","#42A5F5"],
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


