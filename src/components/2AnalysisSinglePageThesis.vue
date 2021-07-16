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
          <v-col cols="12" class="pa-3 mt-sm-0 mb-5">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, eveniet harum minus earum repellendus debitis fugiat temporibus ipsum totam quibusdam!</p>
          </v-col>
          <!-- <v-col cols="12" sm="3" class="pa-3 mt-sm-0 mb-5">
            <p class="mb-2 text-center">P\E</p>
            <p class="mb-2 text-center text-h4 goodNumColor">{{description.multipliers.PE.toFixed(1)}}<span class="text-caption">/52</span></p>
            <p class="mb-2 text-center text-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </v-col>
          <v-col cols="12" sm="3" class="pa-3 mt-sm-0 mb-5">
            <p class="mb-2 text-center">P/B</p>
            <p class="mb-2 text-center text-h4 badNumColor">{{description.multipliers.PB.toFixed(1)}}<span class="text-caption">/52</span></p>
            <p class="mb-2 text-center text-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </v-col>
          <v-col cols="12" sm="3" class="pa-3 mt-sm-0 mb-5">
            <p class="mb-2 text-center">P/S</p>
            <p class="mb-2 text-center text-h4 goodNumColor">{{description.multipliers.PS.toFixed(1)}}<span class="text-caption">/52</span></p>
            <p class="mb-2 text-center text-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </v-col>
          <v-col cols="12" sm="3" class="pa-3 mt-sm-0 mb-5">
            <p class="mb-2 text-center">D/E</p>
            <p class="mb-2 text-center text-h4 goodNumColor">{{description.multipliers.DE.toFixed(1)}}<span class="text-caption">/52</span></p>
            <p class="mb-2 text-center text-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </v-col> -->
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Устойчивость компании</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5 ">
        <v-card
          rounded="lg"
          class=" mb-2 pa-4 specialColor widthBar"
          elevation="0"
        >
          <div id="chart" >
            <apexchart type="area" height="300" :options="chartOptions1" :series="series"></apexchart>
          </div>
          <p>Задолжность компании за последние 5 лет <span class="badNumColor">выросла на 20%</span>. На тикущий момент компания закреитванна на 80%, это может негативно сказываеться на устойчивости компании<span class="goodNumColor"> </span>  </p>
        </v-card>
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
          <v-col cols="12" class="pa-3 mt-sm-0 mb-5">
            <p>Компания в прошлом квартале <span class="goodNumColor"> превзошла ожидания аналитиков</span>, прогнозировалось 10, фактическое значение составило 12, что на 20% больше</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Подробнее о компании</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
        {{description.fullDescription}}
      </v-col>
    </v-row>
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
     series: [{
        name: 'Капитал',
        data: [31, 40, 28, 51]
      }, {
        name: 'Задолжность',
        data: [11, 32, 45, 32]
      }],
      chartOptions1: {
        colors:[ '#51a9f0','RGBA(102, 184, 250, 0.3)'],

        chart: {
          height: 350,
          type: 'area',
          background: 'transparent',
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },

        dataLabels: {
          enabled: false
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

        yaxis: {
          show: false,
        },


        grid: {
            show: false
        ,},

        states: {
          active: {
            filter: {
              type: 'none'
            }
          }
        },
     
        xaxis: {
          categories: ["2017", "2018", "2019", "2020"]
        },

        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },

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
    ]),
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
    sectorText: function () {
      let text = {}
      switch (this.description.sector) {
        case "Technology":
          text.head = "Технологический сектор"
          text.text = "Компании производодящие электронику, программноу обеспечениу, компьютеры или продукты и услуги, связанные с информационными технологиями."
          break;
        case "Healthcare" :
          text.head ="Сектор здравоохранения"
          text.text = "Состоит из предприятий, производятящих медицинское оборудование или лекарства, предоставляют медицинское страхование или иным образом содействуют оказанию медицинской помощи пациентам.  "
          break;
         case "Basic Materials" :
          text.head ="Сырьевой сектор"
          text.text = "Сектор основных материалов - это отраслевая категория, состоящая из предприятий, занимающихся открытием, разработкой и переработкой сырья."
          break;
        case "Consumer Cyclical" :
          text.head ="Потребительские товары"
          text.text = "Потребительские циклы включают такие отрасли, как автомобилестроение, жилищное строительство, развлечения и розничная торговля."
          break;
        case "Financial Services" :
          text.head ="Финансовый сектор"
          text.text = "Этот сектор включает широкий спектр отраслей, включая банки, инвестиционные компании, страховые компании и фирмы, занимающиеся недвижимостью."
          break;
        case "Real Estate" :
          text.head ="Сектор недвижимости"
          text.text = "Компании их данного сектора обычно покупают и сдают недвижимость различного плана, а также компании, осуществляющие девелопмент в сфере недвижимости."
          break;
        case "Consumer Defensive" :
          text.head ="Потребительские товары первой необходимости"
          text.text = "Сектор защиты потребителей включает компании, производящие продукты питания, напитки, товары для дома, личного пользования и услуги по обучению."
          break;
        case "Utilities" :
          text.head ="Коммунальные услуги"
          text.text = "Сектор коммунальных услуг относится к категории компаний, которые обеспечивают основные удобства, такие как водоснабжение, канализация, электричество, плотины и природный газ."
          break;
        case "Communication Services" :
          text.head ="Коммуникационные услуги"
          text.text = "Сектор электросвязи состоит из компаний, которые делают общение возможным в глобальном масштабе, будь то по телефону или через Интернет."
        case "Industrials" :
          text.head ="Сектор промышленных товаров"
          text.text = "Сектор промышленных товаров включает компании, занимающиеся аэрокосмической и оборонной отраслями, промышленным оборудованием, инструментами, производством пиломатериалов, строительством а также производством цемента и металлов."
          break;
        case "Energy" :
          text.head ="Энергетический сектор"
          text.text = "Энергетический сектор или отрасль включает компании, занимающиеся разведкой, разработкой запасов, бурением и переработкой нефти и газа."
          break;
        default:
          text.head ="Не определен"
          text.text = "Сектор экономики — часть экономики, обладающая сходными общими характеристиками, экономическими целями, функциями и поведением, что позволяет отделить её от других частей экономики в теоретических или практических целях."
      }
      return text
    },
    auditRiskText: function () {
      let text = {}
      text.text= "Это оценка эффективности системы управления организацией, уровня квалификации высшего и среднего управленческого звена, адекватность функционирования системы управления персоналом."
      switch (this.description.overallRisk) {
        case 1:
        case 2:
        case 3:
          text.head= "Превосходное"
          break;
        case 4:
        case 5:
        case 6:
        case 7:
          text.head= "Хорошее"
          break;
        case 8:
        case 9:
        case 10:
          text.head= "Низкое"
          break;
           break;
        default:
          text.head = "Неизвестен"
      }
      return text
    }
  },
}
</script>

<style lang="css" scoped>

  .goodNumColor{
    color: #1c86c7;
  }

  .badNumColor{
    color: #e46065;
  }

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


