<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >
    <v-row>
      <SkeletonAbout  v-if="Object.keys(this.$store.state.reporting.description).length == 0"></SkeletonAbout>
      <v-col cols="12" sm="6" class="pa-3 mb-5 bacMain" v-if="!Object.keys(this.$store.state.reporting.description).length == 0">
        <div class="sticky bacMain">
          <p class="text-h5 font-weight-medium">
            <v-icon size="50" class="mr-2" > mdi-card-text-outline</v-icon>
            Подробнее о компании
          </p>
        </div>
        <div 
          v-for="(item, i) in description.analystsGrade"
          :key="'a'+ i"
        >
          <div class="mb-0 mt-0 pt-2 pb-2">
            Прогоноз от аналитиков из <span class="goodAnalysis">{{item.firm}} от {{item.date}} </span>
            <p  class="mb-0 mt-0">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, voluptatem!
            </p>
          </div>  
        </div>
      </v-col>

      <v-col cols="12" sm="6"  class="pa-3 mt-sm-0 mb-5">
      
        <div class="wrapFinAnal1 mb-3">
          <div class="wrapFinAnal2">
            <v-card
              rounded="lg"
              class=" mb-2 pa-4 specialColor widthBar"
              elevation="0"
            >
            <p class="mb-1">Прибыль</p>
              <div>
                <apexchart width="100%"  type="bar" :options="yearRevenueEarning" :series="earnings"></apexchart>
              </div>
            </v-card>
            <v-card
              rounded="lg"
              class=" mb-2 pa-4  specialColor widthBar"
              elevation="0"
            >
            <p class="mb-1">Выручка</p>
              <div>
                <apexchart width="100%"  type="bar" :options="yearRevenueEarning" :series="revenue"></apexchart>
              </div>
            </v-card>
            <v-card
              rounded="lg"
              class=" mb-2 pa-4 specialColor widthBar"
              elevation="0"
            >
            <p class="mb-1" >Аналитики</p>
              <div>
                <apexchart width="100%"  type="bar" :options="recommendationTrendSetting" :series="recommendationTrend"></apexchart>
              </div>
            </v-card>
            <v-card
              rounded="lg"
              class=" mb-1 pa-4 specialColor widthBar d-flex flex-column"
              elevation="0"

            >
            <p class="mb-1">Дивиденды</p>
              <div v-if="dividendsPaid[0].data.length > 1">
                <apexchart width="100%"  type="bar" :options="yearDebtRatioDividend" :series="dividendsPaid"></apexchart>
              </div>
              <div v-if="dividendsPaid[0].data.length <= 1" class="mb-1 colorDivText text-center flex44">
                <p class="mb-1 colorDivText text-center align-center;">Нет истории выплат дивидендов</p>
              </div>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
    <SkeletonReasons  v-if="Object.keys(this.$store.state.reporting.description).length == 0"></SkeletonReasons>
    <v-row  v-if="!Object.keys(this.$store.state.reporting.description).length == 0">
      <v-col cols="12" sm="10"  class="pa-3 mt-sm-0 mb-5">
        <p class="text-h5 font-weight-medium mb-2">
          <v-icon size="45" class="mr-2" > mdi-alert-circle </v-icon>
          <!--Стоит обратить внимание-->
          Почему стоит покупать акции компании?
        </p>  
        <div class="mb-4 mt-2">
          <span class="d-flexCustom"> <a href="javascript:;" v-bind:class="{ goodAnalysis: !classTabs }" class="mr-8" @click="changeTab('0')">Мнения аналитиков</a> </span>
          <!-- <a href="javascript:;"  class="mr-8" v-bind:class="{ goodAnalysis: classTabs }" @click="changeTab('1')">Инвест идеи</a> -->
          <!-- <a href="javascript:;" class="mr-8" v-bind:class="{ goodAnalysis: classTabs }" @click="changeTab('1')">Прочие положительные факторы</a> -->
          <a href="javascript:;" class="mr-8" v-bind:class="{ goodAnalysis: classTabs }" @click="changeTab('1')">Основные факторы роста</a>
        </div>

          <!-- <p>{{ earningsGrowthPercent.text }}</p>

          <p>{{ revenueGrowthPercent.text }} </p> -->
          <v-tabs
            v-model='tab'
            class="bacMain"
          >
            <v-tab-item value='0' class="bacMain"> 
              <!-- {{description.analystsGrade}} -->
              <!-- <div 
                v-for="(item, i) in description.analystsGrade"
                :key="'a'+ i"
              >
                <div class="mb-0 mt-0 pt-2 pb-2">
                  Прогоноз от аналитиков из <span class="goodAnalysis">{{item.firm}} от {{item.date}} </span>
                  <p v-if="item.toGrade == 'Outperform'" class="mb-0 mt-0">
                    Эта рекомендация означает, что потенциал акций превысит среднеотраслевой показатель по крайней мере на 10%-15% (или более того в зависимости от риска, существующего на ближайший год).
                  </p>
                  <p v-if="item.toGrade == 'Buy'" class="mb-0 mt-0 ">
                    Согласно этой шкале, рекомендация покупать («buy») присваивается акции, если ее потенциал роста в следующие 12-18 месяцев составляет более 15%.
                  </p>
                  <p v-if="item.toGrade == 'Sell'" class="mb-0 mt-0 ">
                    Прогноз аналитиков продавать («sell») означает, что потенциал роста менее 0%, т.е. корректнее говорить не о росте, а о потенциале снижения.
                  </p>
                  <p v-if="item.toGrade == 'Overweight'" class="mb-0 mt-0 ">
                    Рекомендации «overweight» трактуются как ожидание повышенного потенциала по сектору или по бумаге по сравнению с сопоставимым рыночным индексом или бенчмарком. Горизонт – 12 месяцев.
                  </p>
                </div>
              </div>              -->


              <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left bacMain">
                          Компания
                        </th>
                        <th class="text-center bacMain">
                          Дата
                        </th> 
                        <th class="text-center bacMain">
                          Прогноз
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, i) in description.analystsGrade"
                        :key="'a'+ i"
                      >
                        <td class="bacMain">{{ item.firm }}</td>
                        <td class="bacMain text-center">{{ item.date }}</td>
                        <td class="bacMain text-center">{{ item.toGrade }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>




              <!-- <p><span class="goodAnalysis">Хорошая отчестность компании.</span> При анализе прошлой отчетности компании мы не выявили серьезных негативных факторов вызывающих настроженость, однако это не гарантирует того что компания не понесет убытков или не обонкротиться в будущем. Советуем проанализировать отчетность компании самостоятельно, возможно мы что то упустили.
              </p>

              <p class="mb-0"><span class="goodAnalysis">Отрицательная динамика выручки</span> является крайне негативным фактором, чаще всего обозначающим долгосрочное падение спроса на товары и услуги предостовляемые компанией, перед покупкой акций таких компаний нужно быть очень осторожным. <a href="#">Прочитать подробнее...</a>
              </p> -->
            </v-tab-item>
            <v-tab-item value='1' class="bacMain">
              <p v-if="description.otherFactors.earningsQuarterly.surprisePercent > 0"><span class="goodAnalysis">Последний отчет превзошел ожидания аналитиков</span> <br> 
              Аналитики в среднем прогнозировали скорректированную прибыль на уровне {{description.otherFactors.earningsQuarterly.epsEstimate}} на акцию. Скорректированная прибыль составила {{description.otherFactors.earningsQuarterly.epsActual}} на акцию, что на {{ Math.round(description.otherFactors.earningsQuarterly.surprisePercent * 100) }}% больше ожиданий. 
              </p>
              <p v-if="revenueGrowthPercent.show"  v-html="revenueGrowthPercent.text"></p>
              <p v-if="earningsGrowthPercent.show"  v-html="earningsGrowthPercent.text"></p>

              <!-- <p v-if="description.otherFactors.redemptionShares"><span class="goodAnalysis">Компания проводит выкуп собственых акций</span><br> 
              В результате этой операции увеличивается чистая прибыль на акцию, что влечет за собой рост доверия к компании среди инвесторов и позитивно сказывается на цене акции. 
              </p> -->
              <p class="mb-0"  v-if="description.otherFactors.longNewsBackground"><span class="goodAnalysis">Хороший долгосрочный новостной фон</span><br>  
              Хороший новостной фон позитивно влияют на ожиданиях и прогнозах инвестров.
              </p>
              <p class="mb-0"  v-if="description.otherFactors.shortNewsBackground && !description.otherFactors.longNewsBackground"><span class="goodAnalysis">Хороший краткосрочный новостной фон</span><br>  
              Хороший новостной фон позитивно влияют на ожиданиях и прогнозах инвестров.
              </p>
              <!--<p class="mb-0"><span class="goodAnalysis">Хороший краткосрочный новостной фон</span><br>  является крайне негативным фактором.
              </p>-->
              <!--<p class="mb-0">Финансовые показатели компании на превосходном уровне, что говорит о конкурентном примуществе компании, сильном высшем и среднем управляющем звене компании. Товары компании пользуються популярностью. Актив среднего\превосходного\низкого. прошлые результаты компании на низком уровне
              </p>
              <p> Исторические финансовые показатели компании на низком уровне, прошлые результаты не гарантируют прибыли в будущем, однако помогают видеть прошлые победы и неудачии компании. Однако помогают увидить общие тенденции развития компании за последние годы</p>
              <p> подение выручки может показывать подение спроса на товары и услуги компании, подени чистой прибыли может свидельствовать о росте издержек при производстве товаров и услуг компании</p>
              <p>компания имеет плохие хорошие или средине показатели...  прошлые результаты не гарантируют прибыли в будущем, однако помогают взгленуть на общую тенденцию развития компании </p>-->
            </v-tab-item>  
          </v-tabs>
         
        <!--<p v-if="alertEarnings.show"> <span class="badAnalysis">Отрицательная динамика чистой прибыли</span> является негативным фактором, говорящем о том что компания сталкнулась с трудностями, и не может с ними справится уже долгий промижуток времени. <a href="#">Прочитать подробнее...</a></p>
        
        <p><span class="badAnalysis">Отрицательная динамика выручки</span> является крайне негативным фактором, чаще всего обозначающим долгосрочное падение спроса на товары и услуги предостовляемые компанией, перед покупкой акций таких компаний нужно быть очень осторожным. <a href="#">Прочитать подробнее...</a>
        </p>
        <p><span class="badAnalysis">У компании высокая задолженость</span>, таким компаниям может оказаться труднее оставаться на плаву во время рецессии, чем компаниям с низким показателем долга.  <a href="#">Прочитать подробнее...</a>
        </p>
        <p v-if="alertDebtRatio.show" ><span class="badAnalysis">Коэффициент выплаты дивидендов слишком высокий</span> dolor sit amet consectetur adipisicing elit. Vero consequatur at omnis? Quos hic neque dicta nesciunt nihil nostrum ratione voluptate <a href="#"> accusamus</a></p> 

        <p> {{ auditRiskText.text }} <a href="#"> Подробнее...</a></p>

        <p><span class="goodAnalysis">Хорошая отчестность компании.</span> При анализе прошлой отчетности компании мы не выявили серьезных негативных факторов вызывающих настроженость, однако это не гарантирует того что компания не понесет убытков или не обонкротиться в будущем. Советуем проанализировать отчетность компании самостоятельно, возможно мы что то упустили.
        </p>-->
      </v-col>
    </v-row>
  </v-card>
</template>

// процентное соотношение за покупку
  
<script>
import { mapGetters } from "vuex"
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
    }
  },

  data: () => ({
    clicked: false,
    tab: '0',
  }),

  computed: {
    classTabs:function(){
      if(this.tab==0){
        return 0
      }
      return 1
    },
    ...mapGetters([
      'recommendationTrend',
      'yearDebtRatioDividend',
      'yearRevenueEarning',
      'revenue',
      'earnings',
      'debtRatio',
      'dividendsPaid',
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
    width: 48%;
  }

  @media only screen and (max-width: 657px)  {
    .wrapFinAnal2{
      flex-wrap: wrap;
    }

    .widthBar{
      width: 48%;
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


