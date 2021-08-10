<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >
    <v-row>
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Выплаты акционерам</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
        <v-card
          rounded="xl"
          class=" mb-2 pa-4 specialColor widthBar"
          elevation="0"
        >
          <div >
            <apexchart id="test" width="100%" height="300px" type="bar" :options="chartOptions" :series="dividendsPaid"></apexchart>
          </div>
        </v-card>
        <div v-if="dividendsPaid[0].data">
          <!-- <p v-if="dividendsPaid[0].data.length>0">
            Выплаты акционерам (дивиденды) — это часть чистой прибыли компании, которая распределяется между акционерами пропорционально их доле акций. <br>
            Последние выплачиваемые дивиденды состовили <span class="goodNumColor"> {{ (100*dividendsPaid[0].data[ dividendsPaid[0].data.length-1]/description.historicalPrice).toFixed(2)}}%</span> от текущая цены.
          </p> -->
          <p v-if="dividendsPaid[0].data.length>0">
            Последние выплаты состовили {{dividendsPaid[0].data[ dividendsPaid[0].data.length-1]}} доллара на одну акцию компании, что состовляет <span class="goodNumColor"> {{ (100*dividendsPaid[0].data[ dividendsPaid[0].data.length-1]/description.historicalPrice).toFixed(2)}}%</span> от текущая цены. Прогнозы следующих выплат неизвестны.
          </p>
          <p v-if="dividendsPaid[0].data.length <= 0">
            Компания не платит, и не платила дивиденды последние 10 лет. Вся чистая прибыль компании инвестируется в собственное развитие.
          </p>
        </div>
        <v-skeleton-loader
          type="list-item-three-line"
          class="cartItem2 "
          v-if="!dividendsPaid[0].data"
        ></v-skeleton-loader>
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

        noData: {
            text: 'Вся прибыль компании идет на дальнешее развитие',
            align: 'center',
            verticalAlign: 'middle',
            offsetX: 0,
            offsetY: 0,
            style: {
              color: '#51a9f0',
              fontSize: '19px',
              // fontFamily: undefined
            }
        },

        colors:[ '#51a9f0',],

        legend: {
            show: false,
            fontSize: '18px',
            horizontalAlign: 'left',
            position: 'top',
            colors:'#51a9f0',
            markers: {
                width: 3,
                height: 0,

            }
        },

        theme: {
          mode: 'dark', 
          monochrome: {
              enabled: false,
              color: '#1e2022',
              shadeTo: 'dark',
              shadeIntensity: 0.65
          },
        },

        tooltip: {
          theme: 'dark',            
        },

        grid: {
          show: false,
        },

        chart: {
          id:'dividend',
          type: 'bar',
          toolbar: {
              show: false,
          },
          zoom: {
            enabled: false,
          },
          background: 'transparent'
          // sparkline: {
          //    enabled: true
          // },
        },

        dataLabels: {
            style: {
              colors: ['#F44336']
            }
          },

        states: {
            active: {
                filter: {
                  type: 'none'
                }
            }
        },

        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },

        axisBorder: {
          show: false,
        },  

        dataLabels: {
          enabled: false,
        },

        xaxis: {
          // categories: this.$store.state.reporting.dividendsPaidYear,
          categories: this.$store.state.reporting.dividendsPaidYear,
          show: false,
        },

        yaxis: {
            show: false,
            labels: {
              formatter: function (value) {
                var pow = Math.pow, floor = Math.floor, abs = Math.abs, log = Math.log;
                var abbrev = [' тыс', ' милл', ' млрд'];

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

        plotOptions: {
            bar: {
                distributed: true,
                horizontal: false,
            },
        },
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
      'dividendsPaid',
      'description',
      'dividendsPaidYear',
    ]),
  }
}
</script>

<style lang="css" scoped>

</style>


