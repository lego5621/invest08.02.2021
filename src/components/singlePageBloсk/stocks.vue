<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >
    <!-- <SkeletonReasons  v-if="Object.keys(this.$store.state.reporting.description).length == 0"></SkeletonReasons> -->
    <v-row v-if="!Object.keys(this.$store.state.reporting.stocksCaunt).length == 0">
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Выкуп акций</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
         <v-card
          rounded="lg"
          class=" mb-2 pa-4 specialColor widthBar"
          elevation="0"
        >
          <div>
            <apexchart  width="100%" height="300px" type="line" :options="chartOptions" :series="getStocksCaunt"></apexchart>
          </div>
        </v-card>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam soluta sit officiis iusto aliquam pariatur est earum, dignissimos dolore. Vitae atque tempore voluptatum quia esse amet nulla corporis quo!</p>
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
    series: [{
      data: [400, 430, 448, 470]
    }],
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
            show: false,
            labels: {
              formatter: function (value) {
                var pow = Math.pow, floor = Math.floor, abs = Math.abs, log = Math.log;
                var abbrev = [' тыс', ' милл', ' млрд']; // could be an array of strings: [' m', ' Mo', ' Md']

                function round(n, precision) {
                    var prec = Math.pow(10, precision);
                    return Math.round(n*prec)/prec;
                }

                function format(n) {
                    var base = floor(log(abs(n))/log(1000));
                    var suffix = abbrev[Math.min(2, base - 1)];
                    base = abbrev.indexOf(suffix) + 1;
                    return suffix ? round(n/pow(1000,base),2)+suffix : ''+n;
                }

                return format(value)
              }
            },
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
      'getStocksCaunt'
    ]),
  }
}
</script>

<style lang="css" scoped>

</style>


