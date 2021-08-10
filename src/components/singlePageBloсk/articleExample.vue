<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        lg="10"
        xl="6"
        offset-lg="1"
        offset-xl="3"
      >
        <v-container class="pa-0">
          <v-card
            rounded="lg"
            class="mb-8 pr-4 pl-4 bacMain maxHeight"
            elevation="0"
          >
            <v-row>
              <v-col cols="12" sm="6" class="pa-3 mt-sm-0 mb-5" >
                <div rounded="lg">
                  <v-img
                    class="rounded-xl"
                    max-width="100%"
                    src="https://s3-symbol-logo.tradingview.com/gazprom--600.png"
                  ></v-img>
                </div>
     
              </v-col>
              <v-col cols="12" sm="6" class="pa-3 mt-sm-0 mb-5 wrapPos pb-11">
                <h1>Фундаментальный разбор компании Газпром</h1>
                <div class="">
                  <v-list-item-avatar
                      size="32"
                      class="ml-0"
                  >
                    <img
                        v-if="articles[0].avatar"
                        alt="Avatar"
                        :src= articles[0].avatar
                      >
                      <v-icon
                        v-else
                      >mdi-account</v-icon>
                  </v-list-item-avatar>
                  <strong class="subtitle-1">{{ articles[0].name }}</strong>   
                </div>
                    <p class=" d-flex align-stretch">
                      Вот уже более 7 лет я занимаюсь фондовым рынком, работал в крупнейших брокерских компаниях и банках нашей страны.
                      Для инвестирования я выбираю такие инструменты, как акции, облигации и другие ценные бумаги на Российском рынке и США.
                    </p>

                  <div class="childPos d-flex justify-space-between text-no-wrap overflow">
                    <strong class="align-self-center mr-10 subtitle-1  text--disabled">{{ articles[0].time }}</strong>
                    <div class="align-self-center">
                      <v-rating
                        background-color="grey darken-1"
                        color="textLinkResult"
                        length="5"
                        :value=articles[0].rating
                        readonly
                      ></v-rating>
                    </div>
                  </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
                <h1>Газпром в России.</h1>
              </v-col>
              <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
                <p>
                   Газпром — лидер на российском рынке и ближайший конкурент Новатэк заметно отстает как по капитализации (разница составляет 900 миллиардов рублей), так и по объемам добычи.
                </p>
                <p>Напрямую на фондовой бирже никто не может купить активы. Для этого есть посредник, который предоставляет доступ на биржи. Активы «Газпрома» сегодня на двух российских фондовых биржах: объединенной московской бирже «ММВБ-РТС» и Санкт-Петербургской бирже</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
                <h1>Газпром на мировом рынке.</h1>
              </v-col>
              <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
                <p>
                  На мировом рынке дела у газовой компании обстоят хуже.
                  Так, компания имеет серьезные интересы в Венесуэле, откуда сейчас приходят тревожные для Газпрома новости, связанные с возможным отстранением лидера Венесуэлы от власти. Если это будет сделано, новое правительство, вероятней всего, предоставит газовые контракты не российскому, а американскому бизнесу
                </p>
                <v-img
                    class="rounded-xl"
                    width="100%"
                    src="https://tadviser.ru/images/thumb/5/5d/%D0%AE%D0%B6%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BE%D1%82%D0%BE%D0%BA_%D0%BA%D0%B0%D1%80%D1%82%D0%B0_2011.jpg/840px-%D0%AE%D0%B6%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BE%D1%82%D0%BE%D0%BA_%D0%BA%D0%B0%D1%80%D1%82%D0%B0_2011.jpg"
                  ></v-img>
                <p>
                  Меж тем, Венесуэла — основная сфера интереса Газпрома на мировом уровне. С потерей этого месторождения компания лишится большой потенциальной прибыли
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
                <h1>Чистая прибыль</h1>
              </v-col>
              <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
                <v-card
                  rounded="xl"
                  class=" mb-2 pa-4 specialColor widthBar"
                  elevation="0"
                >
                  <div>
                    <apexchart id="test" width="100%" height="300px" type="bar" :options="chartOptions" :series="series"></apexchart>
                    <p class="caption mb-0 text--disabled text-right">*чистая прибыль компании</p>
                  </div>
                </v-card>
                <p>Чистая прибыль "Газпрома" по международным стандартам (МСФО) в четвертом квартале 2020 года составила 353,719 млрд рублей, что более чем в два раза превзошло результат четвертого квартала 2019 года (154,601 млрд рублей), сообщила компания.</p>
              </v-col>
            </v-row>
             <v-row>
              <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
                <h1>Резюме</h1>
              </v-col>
              <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
                <p>
                  Несмотря на некоторые негативные тенденции для Газпрома на мировом уровне, нельзя забывать о наличии долгосрочных контрактов на поставку газа в Китай и европейские страны
                </p>
                <p>
                  Даже с потерей венесуэльского месторождения, фактически монополистическое положение компании не позволит ей потерять прибыли.
                </p>
                <p>
                  Поэтому акции Газпрома остаются привлекательным инструментом для долгосрочного вложения денег. Если читателя интересует краткосрочное вложение денег, лучше обратиться к более привлекательному финансовому инструменту.+
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import { mapGetters } from "vuex"

 export default {
  components: {

  },


  methods:{

  },

  data: () => ({
           articles: [
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Averyanov Oleg',
            heading: 'Как досрочно снять пенсию',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium. fd asdfasdf asdf asdf asd fasdfasdfa ds fasdf asd fasd asdf asd fadsf ads fasd fasd fasdf asd fasdf asdf asdf adsf ',
            time:'27.06.2023',
            сategory: 'Частный инвестор',
            rating: 3,
            tag:["Пенсия", "Инвестиции", "Управление деньгами", "Бюджет"],
          },],
          series: [{
            name: 'Inflation',
            data: [2, 3, 2.4, 2.5, 3]
          }],
  }),

  computed: {
    ...mapGetters([

    ]),
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
          categories: [2016, 2017, 2018, 2019, 'Прогноз 2020'],
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
  }
  
}
</script>

<style lang="css" scoped>
  .wrapPos{
    position: relative;
  }

  .childPos{
    position: absolute;
    width: 100%;
    bottom: 15px;
  }
</style>


