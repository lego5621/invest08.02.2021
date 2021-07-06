<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >
    <v-row>
      <v-col cols="12" sm="6" class="pa-3 mb-5 bacMain">
        <div class="sticky bacMain">
          <p class="text-h5 font-weight-medium">
            <v-icon size="50" class="mr-2" > mdi-card-text-outline</v-icon>
            О компании
          </p>
        </div>
        <p class="mb-2 mt-2" >
          Расположение: <span class="goodAnalysis">{{description.country}}</span> <br>
          Головной офис компании находиться в городе {{description.city}}.
        </p>
        <p class="mb-2 mt-2" >
          Сектор экономики: <span class="goodAnalysis">{{description.sector}}</span> <br>
          {{sectorText}}
        </p>
        <p class="mb-2 mt-2" >
          Аудиторский риск: <span class="goodAnalysis">{{auditRiskText.head}}</span> <br> 
          {{auditRiskText.text}}
        </p>
       
        <!--<p class="mb-2 mt-2" >
          {{description.description}}
        </p>-->
        <p class="mb-2 mt-2" >
          <a :href="description.site" target="_blank"> Открыть сайт компании</a>
        </p>    
      </v-col>

      <v-col cols="12" sm="6"  class="pa-3 mt-sm-0 mb-5">
        <div class="sticky bacMain">
            <p class="text-h5 font-weight-medium"> 
            <v-icon size="50" class="mr-2"> mdi-arrow-top-right</v-icon>
            Консенсус прогноз
        </p>
        </div>
        <p class="mb-2 mt-2">
          Согластно прогнозам аналитиков ожидается <span  v-bind:class="{ goodAnalysis: revenueGrowthPercent.class,badAnalysis: !revenueGrowthPercent.class}"> {{ revenueGrowthPercent.text }} выручки </span>компании около {{ Math.round(revenueGrowthPercent.percent -100 ) }}%, <span  v-bind:class="{ goodAnalysis: earningsGrowthPercent.class,badAnalysis: !earningsGrowthPercent.class}"> {{ earningsGrowthPercent.text }} чистой прибыли</span> составит {{ Math.abs(Math.round(earningsGrowthPercent.percent - 100)) }}%, ожидаеться {{ growthRate.text }} темпа роста чистой прибыли.
        </p>
        <p class="mb-2 mt-2">
          Большенство опрошеных аналитиков советуют <span  v-bind:class="{ goodAnalysis: recommendationTrendText.class, badAnalysis: !recommendationTrendText.class}">{{recommendationTrendText.text}} акции компании </span>. Ценовой ориентир по акциям компании - {{  Math.round(description.TargetPrice)  }}.
        </p>
        <p class="mb-2 mt-2">
          Мнение аналитиков о перспиктивах компании в последнее время {{  changeMind.text  }}.
        </p>
         <!-- <p class="mb-2 mt-2 "> 
         Выплата дивидендов планируеться 23.06.2024. 
          Следующая дата выплата дивидендов неизвестна.
        </p>-->
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="10"  class="pa-3 mt-sm-0 mb-5">
        <p class="text-h5 font-weight-medium">
          <v-icon size="45" class="mr-2" > mdi-alert-circle </v-icon>
          <!--Стоит обратить внимание-->
          Стоит обратить внимание
        </p>  
        <p v-if="alertEarnings.show"> <span class="badAnalysis">Отрицательная динамика чистой прибыли</span> является негативным фактором, говорящем о том что компания сталкнулась с трудностями, и не может с ними справится уже долгий промижуток времени. <a href="#">Прочитать подробнее...</a></p>

        <p v-if="alertRevenue.show"><span class="badAnalysis">Отрицательная динамика выручки</span> является крайне негативным фактором, чаще всего обозначающим долгосрочное падение спроса на товары и услуги предостовляемые компанией, перед покупкой акций таких компаний нужно быть очень осторожным. <a href="#">Прочитать подробнее...</a>
        </p>
        <p v-if="alertDebtRatio.show" ><span class="badAnalysis">У компании высокая задолженость</span>, таким компаниям может оказаться труднее оставаться на плаву во время рецессии, чем компаниям с низким показателем долга.  <a href="#">Прочитать подробнее...</a>
        </p>
        <!-- <p v-if="alertDebtRatio.show" ><span class="badAnalysis">Коэффициент выплаты дивидендов слишком высокий</span> dolor sit amet consectetur adipisicing elit. Vero consequatur at omnis? Quos hic neque dicta nesciunt nihil nostrum ratione voluptate <a href="#"> accusamus</a></p> -->
         <!-- <p v-if="alertDebtRatio.show" >Следующая дата выплат дивидендов dolor sit amet consectetur adipisicing elit. Vero consequatur at omnis? Quos hic neque dicta nesciunt nihil nostrum ratione voluptate <a href="#"> accusamus</a></p> -->
        <p v-if="!alertEarnings.show && !alertRevenue.show && !alertDebtRatio.show" ><span class="goodAnalysis">Хорошая отчестность компании.</span> При анализе прошлой отчетности компании мы не выявили серьезных негативных факторов вызывающих настроженость, однако это не гарантирует того что компания не понесет убытков или не обонкротиться в будущем. Советуем проанализировать отчетность компании самостоятельно, возможно мы что то упустили.
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>

// процентное соотношение за покупку
  
<script>
import { mapGetters } from "vuex";
 export default {
  components: {

  },

  computed: {
    ...mapGetters([
      'recommendationTrend',
      'yearDebtRatioDividend',
      'yearRevenueEarning',
      'revenue',
      'earnings',
      'debtRatio',
      'dividendsPaid',
      'description',,
    ]),
    earningsGrowthPercent: function () {
      if( this.earnings[0].data.length == 5 ){
        if( this.earnings[0].data[this.earnings[0].data.length -1] > this.earnings[0].data[this.earnings[0].data.length -2]){
          return {
            text: "рост",
            percent: 100 * this.earnings[0].data[this.earnings[0].data.length -1]/this.earnings[0].data[this.earnings[0].data.length -2],
            class:1
          }
        }
        return {
          text: "падение",
          percent: 100*this.earnings[0].data[this.earnings[0].data.length -1]/this.earnings[0].data[this.earnings[0].data.length -2],
          class:0
        }
      }
    },
    revenueGrowthPercent: function () {
      if( this.revenue[0].data.length == 5 ){
        if( this.revenue[0].data[this.revenue[0].data.length -1] > this.revenue[0].data[this.revenue[0].data.length -2]){
          return {
            text: "рост",
            percent: 100*Math.abs(this.revenue[0].data[this.revenue[0].data.length -1])/Math.abs(this.revenue[0].data[this.revenue[0].data.length -2]),
            class:1
          }
        }
        return {
          text: "падение",
          percent: 100*Math.abs(this.revenue[0].data[this.revenue[0].data.length -1])/Math.abs(this.revenue[0].data[this.revenue[0].data.length -2]),
          class:0
        }
      }
    },
    growthRate: function () {
      if( this.revenue[0].data.length == 5 ){
        if( 100*Math.abs(this.earnings[0].data[this.earnings[0].data.length -1])/Math.abs(this.earnings[0].data[this.earnings[0].data.length -2]) > 100*Math.abs(this.earnings[0].data[this.earnings[0].data.length -2])/Math.abs(this.earnings[0].data[this.earnings[0].data.length -3])){
          return {
            text: "ускорение",
          }
        }
        return {
          text: "замедление",
        }
      }
    },
    recommendationTrendText: function () {
      if( this.revenue[0].data.length == 5 ){
        if( this.recommendationTrend[0].data[3]<this.recommendationTrend[1].data[3]+this.recommendationTrend[2].data[3] ){
          return {
            text: "покупать",
            class:1
          }
        }
        return {
          text: "продовать",
          class:0
        }
      }
    },
    changeMind: function () {
      if( this.revenue[0].data.length == 5 ){
        if( this.recommendationTrend[2].data[3] >= this.recommendationTrend[2].data[2]  ){
          return {
            text: "улучшилось",
          }
        }
        return {
          text: "ухудшилось",
        }
      }
    },
    alertEarnings: function () {
      if( this.earnings[0].data[this.earnings[0].data.length -2] < this.earnings[0].data[0]  ){
        return {
          show: 1,
        }
      }
      return {
         show: 0,
      }
    },
    alertRevenue: function () {
      if( this.revenue[0].data[this.revenue[0].data.length -2] < this.revenue[0].data[0]  ){
        return {
          show: 1,
        }
      }
      return {
         show: 0,
      }
    },
    alertDebtRatio: function () {
      if( this.debtRatio[0].data[this.debtRatio[0].data.length -1] > 50  ){
        return {
          show: 1,
        }
      }
      return {
        show: 0,
      }
    },
    sectorText: function () {
      let text = ""
      switch (this.description.sector) {
        case "Technology":
          text = "Компании так или иначе связанных с исследованиями, разработкой и/или распространением технологических товаров и услуг. В сектор входят предприятия, занятые в производстве электроники, программного обеспечения, компьютеров или продуктов и услуг, связанных с информационными технологиями."
          break;
        case "Healthcare" :
          text = "Сектор здравоохранения состоит из предприятий, которые предоставляют медицинские услуги, производят медицинское оборудование или лекарства, предоставляют медицинское страхование или иным образом содействуют оказанию медицинской помощи пациентам."
          break;
         case "Basic Materials" :
          text = "Основой сырьевого сектора является промышленность занимается открытием, развитием и переработкой сырья и материалов. В этот сектор входят компании, занимающиеся добычей и переработкой металлов, химической и лесной продукцией."
          break;
        case "Consumer Cyclical" :
          text = "Потребительские циклы включают такие отрасли, как автомобилестроение, жилищное строительство, развлечения и розничная торговля. Это категория акций, которые в значительной степени зависят от бизнес-цикла и экономических условий."
          break;
        case "Financial Services" :
          text = "Это сектор экономики, состоящий из фирм и учреждений, которые предоставляют финансовые услуги коммерческим и розничным клиентам. Этот сектор включает широкий спектр отраслей, включая банки, инвестиционные компании, страховые компании и фирмы, занимающиеся недвижимостью."
          break;
        case "Real Estate" :
          text = "Недвижимость - это земля вместе с любыми постоянными улучшениями, связанными с землей, естественными или искусственными, включая воду, деревья, полезные ископаемые, здания, дома, заборы и мосты. "
          break;
        case "Consumer Defensive" :
          text = "Сектор защиты потребителей включает компании, производящие продукты питания, напитки, товары для дома и личного пользования, упаковку или табак. Также включает компании, которые предоставляют такие услуги, как услуги по обучению и обучению. "
          break;
        case "Utilities" :
          text = "Сектор коммунальных услуг относится к категории компаний, которые обеспечивают основные удобства, такие как водоснабжение, канализация, электричество, плотины и природный газ. "
          break;
        case "Communication Services" :
          text = "Сектор электросвязи состоит из компаний, которые делают общение возможным в глобальном масштабе, будь то по телефону или через Интернет, по радиоволнам или кабелям, по проводам или по беспроводной связи."
          break;
        case "Industrials" :
          text = "Предприятия в секторе промышленных товаров производят и продают машины, оборудование и материалы, которые используются для производства других товаров, а не продаются напрямую потребителям."
          break;
        case "Energy" :
          text = "Энергетический сектор - это категория акций, связанных с производством или поставкой энергии. Энергетический сектор или отрасль включает компании, занимающиеся разведкой, разработкой запасов, бурением и переработкой нефти и газа."
          break;
        default:
          text = "Сектор экономики — часть экономики, обладающая сходными общими характеристиками, экономическими целями, функциями и поведением, что позволяет отделить её от других частей экономики в теоретических или практических целях."
      }
      return text
    },
    auditRiskText: function () {
      let text = {}
      switch (this.description.auditRisk) {
        case 1:
        case 2:
        case 3:
          text.head= "Минимальный"
          text.text= "Вероятность невыявления возможных существенных неточностей и отклонений в отчетности, в сравнении с конкурентами, крайне мала."
          break;
        case 4:
        case 5:
        case 6:
        case 7:
          text.head= "Срединй"
          text.text= "Вероятность невыявления возможных существенных неточностей и отклонений в отчетности, в сравнении с конкурентами, не велика."
          break;
        case 8:
        case 9:
        case 10:
          text.head= "Высокий"
          text.text= "Вероятность невыявления возможных существенных неточностей и отклонений в отчетности, в сравнении с конкурентами, высока."
          break;
           break;
        default:
          text.head = "Неизвестен"
          text.text= "Вероятность невыявления возможных существенных неточностей и отклонений в отчетности, в сравнении с конкурентами, неизвестна."
      }
      return text
    }
  },

  data: () => ({
      
  }),
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

  /* @media only screen and (max-width: 657px)  {
    .maxHeight{
      height: 600px;
      overflow-x: hidden;
    }
  } */

</style>


