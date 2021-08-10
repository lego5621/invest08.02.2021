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
        <h1>Прогноз выручки</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
         <v-card
          rounded="xl"
          class=" mb-2 pa-4 specialColor widthBar"
          elevation="0"
        >
          <div>
            <apexchart id="test" width="100%" height="300px" type="bar" :options="chartOptions" :series="revenue"></apexchart>
          </div>
        </v-card>
         <v-row>
         <!-- <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
             <v-card
              rounded="lg"
              class=" mb-2 pa-4 specialColor widthBar"
              elevation="0"
            >
              <div>
                <apexchart id="test" width="100%" height="120px" type="bar" :options="chartOptionsProsent" :series="series"></apexchart>
              </div>
              <p class="ma-0 caption text--disabled">Ожидаемый рост выручки в процентах </p>
              <p class="mb-2 text-center text-h3 goodNumColor">24<span class="text-h6"> / 52</span></p>
              <p class="ma-0 caption text--disabled">Компания / Сектор</p>
            </v-card>
          </v-col> -->
          <v-col cols="12" sm="12" class="pa-3 mt-sm-0">
            <div
              v-if="revenue[0].data.length !== 0"
            >
              <p class="mb-0" v-if="revenue[0].data[3] < revenue[0].data[5]">
                <span class="goodNumColor"> Позитивный прогноз выручки</span> говорит о ожидаемом росте спроса на товары и услуги предостовляемые компанией. Согласно прогнозам аналитиков <span class="goodNumColor">рост</span> выручки ближайшие 2 года составит {{ revenueText }}%.
              </p>
              <p class="mb-0" v-if="revenue[0].data[3] > revenue[0].data[5]">
                <span class="badNumColor"> Негативный прогноз выручки</span> говорит о ожидаемом снижении спроса на товары и услуги предостовляемые компанией. Согласно прогнозам аналитиков <span class="badNumColor">падение</span> выручки ближайшие 2 года составит {{ revenueText }}%.
              </p>
            </div>
            <v-skeleton-loader
              type="list-item-three-line"
              class="cartItem2 "
              v-if="revenue[0].data.length == 0"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
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
      name: "",
      data: [10, 41]
    }],
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
            // theme: this.$store.state.reporting.description == true ? 'dark':'light',
        },

        grid: {
          show: false,
        },

        chart: {
          id:'revenue',
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
    chartOptionsProsent:function(){
      const theme = localStorage.getItem("dark_theme");
      let settingObj ={

        colors:[ '#51a9f0', 'RGBA(102, 184, 250, 0.4)'],

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
            // theme: this.$store.state.reporting.description == true ? 'dark':'light',
            
        },

        grid: {
          show: false,
        },

        chart: {
          // id:'test',
          type: 'bar',
          toolbar: {
              show: false,
          },
          zoom: {
            enabled: false,
          },
          background: 'transparent',
          sparkline: {
             enabled: true
          },
        },

        title: {
            text: 'Прогноз роста',
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
          categories: ['Компания','Сектор'],
          show: false,
        },

        yaxis: {
            show: false,
             labels: {
              formatter: function (value) {
                
                return value+'%'
              }
            },
        },

        plotOptions: {
            bar: {
                distributed: true,
                horizontal: false,
                columnWidth: '100%'
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
    revenueText:function(){

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

      // return `В ${this.$store.state.reporting.year[3]} году выручка компании ${this.description.name} составила ${format(this.revenue[0].data[4])}, что на ${Math.round(calcPercent(this.revenue[0].data[3], this.revenue[0].data[2]) - 100)}% больше чем годом ранее. За последние 4 года выручка компании выросла на ${Math.round(calcPercent(this.revenue[0].data[3], this.revenue[0].data[0]) - 100)}%, в ближайшие 2 года прогназируется рост выручки на ${Math.round(calcPercent(this.revenue[0].data[5], this.revenue[0].data[3]) - 100)}%.`
      return Math.abs(Math.round(calcPercent(this.revenue[0].data[5], this.revenue[0].data[3]) - 100))

    },

    ...mapGetters([
      'yearRevenueEarning',
      'revenue',
      'description'
    ]),
  }
}
</script>

<style lang="css" scoped>


</style>


