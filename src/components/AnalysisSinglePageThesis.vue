<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >
  <!-- <vuescroll :ops="ops"> -->
    <v-row>
      <v-col cols="12" sm="6" class="pa-3 mb-5 bacMain">
        <div class="sticky bacMain">
          <p class="text-h5 font-weight-medium">
            <v-icon size="50" class="mr-2" > mdi-arrow-top-right</v-icon>
            Положительные факторы
          </p>
        </div>
        <p class="mb-2 mt-2" v-if="PrognoseEarningsThesis">
          <span class="goodAnalysis">Аналитики прогназируют рост чистой прибыли</span><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptate consequatur nobis atque rem. Aliquam?
        </p>
        <p class="mb-2 mt-2" v-if="PrognoseRevenueThesis">
          <span class="goodAnalysis">Аналитики прогназируют рост выручки</span><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, commodi.
        </p>
        <p class="mb-2 mt-2" v-if="!debtRatioThesis">
          <span class="goodAnalysis">Снижение задолжности</span><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, commodi.
        </p>
        <p class="mb-2 mt-2" v-if="dividendsPaidThesis">
          <span class="goodAnalysis">Компания платит дивиденды</span><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vitae nostrum et voluptas quod vel quaerat neque.
        </p>
        <p class="mb-2 mt-2" v-if="earningsThesis">
          <span class="goodAnalysis">Прибыль компании растет</span><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vitae nostrum et voluptas quod vel quaerat neque.
        </p>
        <p class="mb-2 mt-2" v-if="revenueThesis">
          <span class="goodAnalysis">Тенденция роста выручки</span><br/>
          За последние 4 года выручка компании выросла, что говорит о хорошем спросе на товары и услуги компании.
        </p>
        </v-col>

      <v-col cols="12" sm="6"  class="pa-3 mt-sm-0 mb-5">
        <div class="sticky bacMain">
            <p class="text-h5 font-weight-medium"> 
            <v-icon size="50" class="mr-2"> mdi-arrow-bottom-right</v-icon>
            Негативные факторы
        </p>
        </div>
        <p class="mb-2 mt-2" v-if="!PrognoseEarningsThesis">
          <span class="badAnalysis">Аналитики прогназируют падение чистой прибыли</span><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptate consequatur nobis atque rem. Aliquam?
        </p>
        <p class="mb-2 mt-2" v-if="!PrognoseRevenueThesis">
          <span class="badAnalysis">Аналитики прогназируют падение выручки</span><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam velit dolorum odit.
        </p>
        <p class="mb-2 mt-2" v-if="debtRatioThesis">
          <span class="badAnalysis">Рост задолжности </span><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vitae nostrum et voluptas quod vel quaerat neque.
        </p>
        <p class="mb-2 mt-2" v-if="!dividendsPaidThesis">
          <span class="badAnalysis">Компания не платит дивиденды</span><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vitae nostrum et voluptas quod vel quaerat neque.
        </p>
        <p class="mb-2 mt-2" v-if="!earningsThesis">
          <span class="badAnalysis">Прибыль компании не растет</span><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vitae nostrum et voluptas quod vel quaerat neque.
        </p>
        <p class="mb-2 mt-2" v-if="!revenueThesis">
          <span class="badAnalysis">Тенденция роста выручки</span><br/>
          За последние 4 года выручка компании снизилась, что говорит о уменьшающимся спросе на товары и услуги предлогаемые компанией.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="10"  class="pa-3 mt-sm-0 mb-5">
        <p class="text-h5 font-weight-medium">
          <v-icon size="45" class="mr-2" > mdi-alert-circle </v-icon>
          Стоит обратить внимание
        </p>
        <p class="mb-2">Присутствуют убыточные годы - у компании, за последнии 4 года, есть убыточные годы, возможно это "бумажные" убытки не влияющие на денежную прибыль, или разовый убыток, советуем более чательнее изучить данную ситуацию.</p>
        <p class="mb-2">Негативная динамика выручки - за последние 4 года уменьшилась выручка, это являеться крайне негативным фактором говорящим о снижении спроса на товары или услуги компании.</p>
        <p class="mb-2">Высокое значение мультиплекатора P/E - высокое значение данного мутиплекатора может говорить о переоценности компании, для растущих компаний высокий P/E являеться естественным.</p>
      </v-col>
    </v-row>
  <!-- </vuescroll> -->
  </v-card>
</template>
  
<script>
import { mapGetters } from "vuex";
 export default {
  components: {

  },

  computed: {
    ...mapGetters([
      'yearDebtRatioDividend',
      'yearRevenueEarning',
      'revenue',
      'earnings',
      'debtRatio',
      'dividendsPaid',
    ]),
    PrognoseEarningsThesis: function () {
      if( this.earnings[0].data.length == 5){
        if(this.earnings[0].data[this.earnings[0].data.length -1] > this.earnings[0].data[this.earnings[0].data.length -2]){
          return true
        }
        return false
      }
    },
    PrognoseRevenueThesis: function () {
      if( this.revenue[0].data.length == 5){
        if(this.revenue[0].data[this.revenue[0].data.length -1] > this.revenue[0].data[this.revenue[0].data.length -2]){
          return true
        }
        return false
      }
    },
    debtRatioThesis: function () {
      if(this.debtRatio[0].data[this.debtRatio[0].data.length -1] > this.debtRatio[0].data[this.debtRatio[0].data.length -3]){
        return true
      }
      return false
    },
    dividendsPaidThesis: function () {
      if(this.dividendsPaid[0].data.length > 2){
        return true
      }
      return false
    },
    earningsThesis: function () {
      if(this.earnings[0].data[this.earnings[0].data.length -2] > this.earnings[0].data[0]){
        return true
      }
      return false
    },
    revenueThesis: function () {
      if(this.revenue[0].data[this.revenue[0].data.length -2] > this.revenue[0].data[0]){
        return true
      }
      return false
    },
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


