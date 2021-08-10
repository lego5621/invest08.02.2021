<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >
    <!-- <SkeletonReasons  v-if="Object.keys(this.$store.state.reporting.description).length == 0"></SkeletonReasons> -->
    <v-row v-if="!Object.keys(this.$store.state.reporting.debtRatio).length == 0">
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Эффективность компании</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
         <v-card
          rounded="lg"
          class=" mb-2 pa-4 specialColor widthBar"
          elevation="0"
        >
          <div>
            <apexchart width="100%" height="300px" type="line" :options="chartOptions" :series="debtRatio"></apexchart>
          </div>
        </v-card>
        <p class="mb-0">За 2020 год компания Apple заработала 23 млрд, что на 23% больше чем годом ранее. За последние 4 года чистая прибыль компании выросла на 40%, в ближайшие 2 года прогназируеться рост чистой прибыли на 20%</p>
      </v-col>
    </v-row>
  </v-card>
</template>

// процентное соотношение за покупку
  
<script>
import { mapGetters } from "vuex"
import store from '@/store/index'

 export default {
  components: {

  },


  methods:{

  },

  data: () => ({

  }),

  computed: {
     chartOptions:function(){
      const theme = localStorage.getItem("dark_theme");
      let settingObj ={
        colors:[ '#51a9f0'],

        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          background: 'transparent',
          toolbar: {
              show: false,
          },
        },

        tooltip: {
          theme: 'dark',          
        },

        dataLabels: {
          enabled: false
        },

        grid: {
          show:false,
        },
        
        xaxis: {
          categories: ['2017', '2018', '2019', '2020'],

        },

        yaxis: {
          show:false,
          max: 100,
          min:0,
          labels: {
            formatter: function (value) {
              return value+'%'
            }
          }
        },


        annotations: {
          yaxis: [
            {
              y: 0,
              y2: 30,
              fillColor: '#e46065',
            },
            {
              y: 70,
              y2: 100,
              fillColor: '#1c86c7',
            },
          ]
        },
        

        noData: {
            text: 'Ожидаем данные...',
            align: 'center',
            verticalAlign: 'middle',
            offsetX: 0,
            offsetY: 0,
            style: {
              color: '#51a9f0',
              fontSize: '19px',
              fontFamily: undefined
            }
        }
      }
        if (theme) {
            if (theme == "true") {
              settingObj.theme= {
                  mode: 'dark', 
                  monochrome: {
                      enabled: false,
                      color: '#1e2022',
                      shadeTo: 'dark',
                      shadeIntensity: 0.65
                  },
                } 
              settingObj.tooltip= {
                theme: 'dark',
              }          
            } else {
              settingObj.theme= {
                mode: 'light', 
                monochrome: {
                    enabled: false,
                    color: '#1e2022',
                    shadeTo: 'light',
                    shadeIntensity: 0.65
                },
              }
              settingObj.tooltip= {
                theme: 'light',             
              }     
        }
        return settingObj
      }
    },

    ...mapGetters([
      'yearRevenueEarning',
      'debtRatio',
    ]),
  }
}
</script>

<style lang="css" scoped>

</style>


