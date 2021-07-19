<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >
    <SkeletonReasons  v-if="Object.keys(this.$store.state.reporting.description).length == 0"></SkeletonReasons>
    <v-row v-if="!Object.keys(this.$store.state.reporting.description).length == 0">
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Прогонозы аналитиков</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
         <v-card
          rounded="lg"
          class=" mb-2 pa-4 specialColor widthBar"
          elevation="0"
        >
          <div>
            <apexchart id="test" width="100%" height="300px" type="bar" :options="chartOptions" :series="earnings"></apexchart>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Эффективность компании</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
         <v-row v-if="description.multipliers" class="justify-space-around ">
          <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-2">
            <p class="mb-2 text-center">ROA <a href="#"><v-icon size="19" class="mr-2"> mdi-progress-question </v-icon></a></p>
            <p class="mb-2 text-center text-h4 goodNumColor">{{description.multipliers.ROA.toFixed(1)}}<span class="text-h6">/52</span></p>
            <p class="mb-2 text-center text-caption">Компания лучше конкурентов управляет активами</p>
          </v-col>
          <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-2">
            <p class="mb-2 text-center">ROE <a href="#"><v-icon size="19" class="mr-2"> mdi-progress-question </v-icon></a></p>
            <p class="mb-2 text-center text-h4 goodNumColor">{{description.multipliers.ROE.toFixed(1)}}<span class="text-h6">/520</span></p>
            <p class="mb-2 text-center text-caption">Компания лучше конкурентов управляет капиталом</p>
          </v-col>
          <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-2">
            <p class="mb-2 text-center">ROS <a href="#"><v-icon size="19" class="mr-2"> mdi-progress-question </v-icon></a></p>
            <p class="mb-2 text-center text-h4 badNumColor">{{description.multipliers.ROS.toFixed(1)}}<span class="text-h6">/52</span></p>
            <p class="mb-2 text-center text-caption">Компания хуже конкурентов управляет издержками</p>
          </v-col>
          <v-col cols="12" class="pa-3 mt-sm-0 mb-5" >
            <p v-html="QAnalysisText"></p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Устойчивость компании</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5 ">
         <v-row>
        <v-card
          rounded="lg"
          class=" mb-2 pa-4 specialColor widthBar"
          elevation="0"
        >
          <div id="chart" v-if="liabCapital">
            <apexchart type="area" height="300" :options="chartOptions2" :series="liabCapital"></apexchart>
          </div>
          </v-card>
          <!-- <p> Активы компании за последние 4 года <span class="goodNumColor">выросли</span>, и состовляют 100 млрд. Задолжность компании за последние 5 лет <span class="badNumColor">выросла на 20%</span>. <span class="goodNumColor">Закредитованость компании меньше</span> чем конкурентов по сектору, компания устойчивей своих конкурентов</p> -->

            <v-col cols="12"  class="pa-3 mt-sm-0">
              <!--<p>Отношение долга к собственному капиталу AAPL увеличилось на 25% за последние 5 лет. Заемный капитал состовляет 80% от активов компании, что больше чем у конкурентов.</p>-->
              <p><span class="badNumColor">Закредитованость более 60%</span>, что говорит об увеличином риске для акционеров, и зависимости от кредиторов, в среднем по сектору закредитованость состовляет 80%</p>
              
            </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Стоймость компании</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
         <v-row v-if="description.multipliers" class="justify-space-around ">
          <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-2">
            <p class="mb-2 text-center">P\E  <a href="#"><v-icon size="19" class="mr-2"> mdi-progress-question </v-icon></a></p>
            <p class="mb-2 text-center text-h4 goodNumColor">{{description.multipliers.PE.toFixed(1)}}<span class="text-h6">/52</span></p>
            <p class="mb-2 text-center text-caption">Чистая прибыль компании оцениваются дешевле чистой прибыли конкурентов</p>
          </v-col>
          <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-2">
            <p class="mb-2 text-center">P/B  <a href="#"><v-icon size="19" class="mr-2"> mdi-progress-question </v-icon></a></p>
            <p class="mb-2 text-center text-h4 badNumColor">{{description.multipliers.PB.toFixed(1)}}<span class="text-h6">/52</span></p>
            <p class="mb-2 text-center text-caption">Активы компании оцениваются дороже активов конкурентов</p>

          </v-col>
          <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-2">
            <p class="mb-2 text-center">P/S  <a href="#"><v-icon size="19" class="mr-2"> mdi-progress-question </v-icon></a></p>
            <p class="mb-2 text-center text-h4 goodNumColor">{{description.multipliers.PS.toFixed(1)}}<span class="text-h6">/52</span></p>
            <p class="mb-2 text-center text-caption">Выручка компании оцениваются дешевле выручки конкурентов </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Подробнее о компании</h1>
        <!-- добавить сайт и тд к подробнее о компании -->
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
        {{description.fullDescription}}
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Мнение аналитиков</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
        тут мнение аналитиков, согласен ли он с данным анализом или нет, если нету опроса тогда так и пиши мы еще не опрашивали аналитиков( можно сделать чтобы они пиарились, за счет мнений)
      </v-col>
    </v-row> -->
  </v-card>
</template>

// процентное соотношение за покупку
  
<script>
import { mapGetters } from "vuex"
import store from '@/store/index'

import SkeletonAbout from '@/components/AnalysisSinglePageThesisSkeletonAbout'
import SkeletonReasons from '@/components/AnalysisSinglePageThesisSkeletonReasons'

 export default {
  components: {
    SkeletonAbout,
    SkeletonReasons,
  },


  methods:{
    changeTab(tab){
     this.tab=tab
    },
  },

  data: () => ({
    clicked: false,
    tab: '0',
     Options: {
               colors:[ '#e0656a','#51a9f0'],

            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: true
              },
              zoom: {
                enabled: true
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
                horizontal: false,
                borderRadius: 10
              },
            },
            xaxis: {
              type: 'datetime',
              categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
               
              ],
            },
            legend: {
              position: 'right',
              offsetY: 40
            },
            fill: {
              opacity: 1
            }
          },
  }),

  computed: {
    classTabs:function(){
      if(this.tab==0){
        return 0
      }
      return 1
    },

    chartOptions:function(){
      const theme = localStorage.getItem("dark_theme");
      let settingObj ={

        colors:[ '#51a9f0', '#51a9f0', '#51a9f0', '#51a9f0','RGBA(102, 184, 250, 0.4)'],

        legend: {
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



chartOptions2:function(){
  const theme = localStorage.getItem("dark_theme");
      let settingObj ={

        colors:[ '#e0656a','#51a9f0'],

        legend: {
          fontSize: '18px',
          horizontalAlign: 'left',
          position: 'top',
          // colors:'#51a9f0',
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
          height: 350,
          id:'test1',
          background: 'transparent',
          stacked: true,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
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
      //'recommendationTrend',
      'yearDebtRatioDividend',
      'yearRevenueEarning',
      'revenue',
      'earnings',
      //'debtRatio',
      //'dividendsPaid',
      'description',
      'recommendationTrendSetting', 
      'liabCapital',
      'QAnalysis',
    ]),

    QAnalysisText: function () {
      if(this.QAnalysis[0].epsActual > this.QAnalysis[0].epsActual ){
        return `Компания в прошлом квартале <span class="goodNumColor"> превзошла ожидания аналитиков</span>, прибыль на акцию прогнозировалось в районе ${this.QAnalysis[0].epsActual}, фактическое значение составило ${this.QAnalysis[0].epsEstimate}, что на ${Math.round(this.QAnalysis[0].surprisePercent * 100)}% больше ожидаемого.`
      }else{
        return `Компания в прошлом квартале <span class='badNumColor'> не оправдала ожидания аналитиков </span>, прибыль на акцию прогнозировалось в районе ${this.QAnalysis[0].epsActual}, фактическое значение составило ${this.QAnalysis[0].epsEstimate}, что на ${Math.round(this.QAnalysis[0].surprisePercent * 100)}% меньше ожидаемого.`
      }
    },

    earningsGrowthPercent: function () {
      if( this.earnings[0].data.length == 5 ){
        if( this.earnings[0].data[this.earnings[0].data.length -1] > this.earnings[0].data[this.earnings[0].data.length - 2]){
          return {
            show:1,
            text: "<span class='goodAnalysis'>Большенство аналитиков ожидают увеличение чистой прибыли компании</span><br> Ожидается увеличение чистой прибыли компании на "+  Math.abs(Math.round(100 * this.earnings[0].data[this.earnings[0].data.length -1]/this.earnings[0].data[this.earnings[0].data.length -2] -100))+"% относительно предыдущего года. Рост чистой прибыли является одним из главных факторов роста стоймости акций компании",
          }
        }
      }
      return {
        show: 0
      }
    },

    revenueGrowthPercent: function () {
      if( this.revenue[0].data.length == 5 ){
        if( this.revenue[0].data[this.revenue[0].data.length -1] > this.revenue[0].data[this.revenue[0].data.length - 2]){
          return {
            show: 1,
            text: "<span class='goodAnalysis'>Большенство аналитиков ожидают увеличение выручки компании</span><br> Ожидается увеличение выручки на "+ Math.round(100 * this.revenue[0].data[this.revenue[0].data.length -1]/this.revenue[0].data[this.revenue[0].data.length -2] -100)+"% относительно предыдущего года. Рост выручки является одним из главных факторов роста стоймости акций компании",
          }
        }
      }
      return {
        show:0
      }
    },
  },
  
}
</script>

<style lang="css" scoped>


  /* .maxHeight{
    height: 400px;
    overflow-y: hidden;
  } */


  .maxHeight2{
    height: auto;
  }

  .sticky{
    position: sticky;
    top: 0;
  }


  .flex44{
    align-self: center !important;
    flex-grow: 1;
  }

  .colorDivText{
    color: #51a9f0;
    align-items: center;
    display: flex;
  }

  .overflow{
    overflow-x: auto;
  }

  .wrapFinAnal2{
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .widthBar{
    width: 100%;
  }

  @media only screen and (max-width: 657px)  {
    .wrapFinAnal2{
      flex-wrap: wrap;
    }

    .widthBar{
      width: 100%;
    }

    .d-flexCustom{
      display: block;
      margin-bottom: 12px;
    }
  }


  /* @media only screen and (max-width: 657px)  {
    .maxHeight{
      height: 600px;
      overflow-x: hidden;
    }
  } */

</style>


