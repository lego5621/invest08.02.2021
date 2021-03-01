<template>
  <v-card
    rounded="lg"
    class=" mb-4 pa-4 bacMain"
    elevation="0"
    min-height="100px"
  >
  <v-row>
    <v-col cols="12" sm="5" lg="4">
      <v-sheet max-height="240px" id="chart" class="bacMain pt-2">
        <apexchart type="radialBar" height="250px" :options="chartOptions" :series="series"></apexchart>
      </v-sheet>
    </v-col>
     <v-col cols="12" sm="7" lg="8" class="mx-auto d-flex flex-column align-self-center height240px">
       <p class="text-h5">Компания подходит для долгосрочного инвестирования</p>
       Если больше 55% то компания подходит для инвестирования, чем больше тем лучше, если меньше, то компания не подходит для ДОЛГОСРОЧНОГО инвестирования 
       <br>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia cum tempora eligendi enim in excepturi voluptatem minus.
    </v-col>
  </v-row>
  </v-card>
</template>
  
<script>
  import { mapGetters } from "vuex";

 export default {
  computed: {
    ...mapGetters([
      'incomeStatements',
      'loaded'
    ])
  },

  data: () => ({
    series: [74],
    
    chartOptions: {
      fill: {
        opacity: 0.7,
      },
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
      plotOptions: {
        radialBar: {
          track: {
            background: 'rgba(117, 190, 218, 0.0)',
          },
          hollow: {
            margin: 15,
            size: "70%"
          },
          
          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: "#62B8F8",
              fontSize: "14px"
            },
            value: {
              color: "#62B8F8",
              fontSize: "30px",
              show: true
            }
          }
        }
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Рейтинг"],
    },
  }),
}
</script>

<style lang="css" scoped>
  .overflow{
    overflow-x: auto;
  }
</style>


