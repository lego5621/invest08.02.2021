<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >
    <!-- <SkeletonReasons  v-if="Object.keys(this.$store.state.reporting.description).length == 0"></SkeletonReasons> -->
    <v-row v-if="!Object.keys(this.$store.state.reporting.debtRatio).length == 0">
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <!-- <h1>Уровень задолженности компании</h1> -->
        <h1>Устойчивость компании</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
         <v-card
          rounded="xl"
          class=" mb-2 pa-4 specialColor widthBar"
          elevation="0"
        >
          <div>
            <apexchart id="test" width="100%" height="300px" type="line" :options="chartOptions" :series="debtRatio"></apexchart>
          </div>
        </v-card>
        <div>
          <p class="mb-0" v-if="debtRatio[0].data[3] < 75">
             У компании {{description.name}}  <span class="goodNumColor">адекватная долговая нагрузка </span>, компания менее чувствительна к воздействию внешних негативных факторов — будь то масштабный кризис или вялая стагнация.
          </p>
          <p class="mb-0" v-if="debtRatio[0].data[3] > 75">
            У компании {{description.name}} <span class="badNumColor">высокая долговая нагрузка </span>, компания крайне чувствительна к воздействию внешних негативных факторов — будь то масштабный кризис или вялая стагнация.
          </p>
        </div>
       
        <!-- Более независима от кредиторов, и мене подвержена влеянию негативных факторо буть то...  -->
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
          id:'debtRatio',
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
          categories: this.$store.state.reporting.year,
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
              y: 75,
              y2: 100,
              // borderColor: '#000', 
              fillColor: '#e46065',
              // label: {
              //   borderColor: 'RGBA(102, 184, 250, 0.0)',
              //   style: {
              //     background: 'RGBA(102, 184, 250, 0.0)',
              //     fontSize: '18px',
              //   },
              //   text: 'Высокий уровень закредитованости'
              // }
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
      'description',
    ]),
  }
}
</script>

<style lang="css" scoped>

</style>


