<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >
    <!-- <SkeletonReasons  v-if="Object.keys(this.$store.state.reporting.description).length == 0"></SkeletonReasons> -->
    <!-- <v-row v-if="!Object.keys(this.$store.state.reporting.description).length == 0"> -->
    <v-row>
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Бизнес компании</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
         <v-card
          rounded="xl"
          class=" mb-2 pa-4 specialColor widthBar"
          elevation="0"
        >
          <div>
            <!-- <div class="d-flex justify-end">
              <a class="mr-5 " href="javascript:void(0)" v-on:click="changeChart(1)">Чистая прибыль</a>
              <a class="mr-5 " href="javascript:void(0)" v-on:click="changeChart(0)">Выручка</a>
            </div> -->
            <v-tabs background-color="transparent">
              <v-tab v-on:click="changeChart(1)">Чистая прибыль</v-tab>
              <v-tab v-on:click="changeChart(0)">Выручка</v-tab>
            </v-tabs>
            <apexchart ref="chart1" id="test" width="100%" height="300px" type="bar" :options="chartOptions" :series="earnings"></apexchart>
            <!-- <p class="caption mb-0 text--disabled text-right">*чистая прибыль компании</p> -->
          </div>
        </v-card>
        <div v-if="earnings[0].data.length !== 0">
          <!-- <p class="mb-0" v-if="earnings[0].data[3] < earnings[0].data[5]">
            <span class="goodNumColor"> Позитивный прогноз чистой прибыли</span> говорит об отсутствии значительных проблем в бизнесе компании. Согласно прогнозам аналитиков <span class="goodNumColor">рост</span> чистой прибыли ближайшие 2 года составит {{ earningsText }}%.
          </p>
          <p class="mb-0" v-if="earnings[0].data[3] > earnings[0].data[5]">
            <span class="badNumColor"> Негативный прогноз чистой прибыли</span> говорит о возможном присутствии проблем в бизнесе компании. Согласно прогнозам аналитиков <span class="badNumColor">падение</span> чистой прибыли ближайшие 2 года составит {{ earningsText }}%.
          </p> -->
          <p>
            {{description.fullDescription}}
          </p>
        </div>
        <v-skeleton-loader
          type="list-item-three-line"
          class="cartItem2 "
          v-if="earnings[0].data.length == 0"
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
    changeChart:function(p){
      if(p==1){
        this.$refs.chart1.updateSeries(
          this.earnings
        )
      }else{
       this.$refs.chart1.updateSeries(
         this.revenue
        )
      }
    },
  },

  data: () => ({  
    v:'',
  }),

  computed: {

    chartOptions:function(){
      const theme = localStorage.getItem("dark_theme");
      let settingObj ={

        colors:[ '#51a9f0', '#51a9f0', '#51a9f0', '#51a9f0','RGBA(102, 184, 250, 0.4)','RGBA(102, 184, 250, 0.4)'],

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
          id:'test',
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
          categories: this.$store.state.reporting.year,
          show: false,
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

        plotOptions: {
            bar: {
                distributed: true,
                horizontal: false,
                columnWidth: '90%'
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
    earningsText:function(){

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

      var calcPercent = function(v, t) {
        return 100*v/t;
      };

      // return `За ${this.$store.state.reporting.year[3]} год компания ${this.description.name} заработала ${format(this.earnings[0].data[4])}, что на ${Math.round(calcPercent(this.earnings[0].data[3], this.earnings[0].data[2]) - 100)}% больше чем годом ранее. За последние 4 года чистая прибыль компании выросла на ${Math.round(calcPercent(this.earnings[0].data[3], this.earnings[0].data[0]) - 100)}%, в ближайшие 2 года прогназируется рост чистой прибыли на ${Math.round(calcPercent(this.earnings[0].data[5], this.earnings[0].data[3]) - 100)}%.`
      return Math.abs(Math.round(calcPercent(this.earnings[0].data[5], this.earnings[0].data[3]) - 100))

    },

    ...mapGetters([
      'yearRevenueEarning',
      'earnings',
      'dividendsPaidYear',
      'description',
      'revenue'
    ]),
  }
}
</script>

<style lang="css" scoped>

</style>


