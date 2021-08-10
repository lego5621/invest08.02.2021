<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >
    <v-row>
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Вывод</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
        <p  v-if="description.name">
          Большенство опрошеных аналитиков и инвестиционных домов рекомендует 
          <span class="goodNumColor"  v-if="description.profitPercentage >= 10">накапливать</span> 
          <span class="goodNumColor" v-else-if="description.profitPercentage < 10 && description.profitPercentage > 0">удерживать имеющиеся</span> 
          <span class="badNumColor" v-else>сокращать</span> 
          позиции в акциях компании {{ description.name }}. 
          Прогназируемый потенциал роста ценной бумаги в следующие 12-18 месяцев составляет 
          <span class="goodNumColor" v-if="description.profitPercentage > 0">около {{ description.profitPercentage }}%.</span>
          <span class="badNumColor" v-else>около {{ description.profitPercentage }}%.</span>

          <!-- {{conclusionText}} -->

          <!-- эфективный и не эфективная комапания -->
        </p> 
        <v-alert
          text
          type="error"
          rounded="xl"
          dense
          v-if="earnings[0].data[5] < 0"
        >
          Прогназируются убытки, не рекомендуется инвестировать в подобные акции
        </v-alert>
        <v-alert
          text
          type="warning"
          rounded="xl"
          dense
          v-else-if="earnings[0].data[3] > earnings[0].data[5] || revenue[0].data[3] > revenue[0].data[5]"
        >
          <!-- Инвестирование в подобные компании подойдет для более рискованых инвесторов. -->
          <!-- У компании ожидается ухудшение финансовой отчетности, инвестирование в подобные компании подойдет для более рискованых инвесторов. -->
          <!-- Подобные компании не подходят для долгосрочного инвестирования -->
          <!-- Компания не подходит для долгосрочного инвестирования -->
          У компании слабые финансовые прогнозы. Компания не подходит для долгосрочного инвестирования.
        </v-alert>
        <v-skeleton-loader
          type="list-item-three-line"
          class="cartItem2 "
          v-if="!description.name"
        ></v-skeleton-loader>
        <!-- Риск бонкротства компании ближайшие 12 месяцев не велик -->
        <!-- Большенство инвестиционых домов ожидают роста акций компании более 15%. -->
      </v-col>
    </v-row>
  </v-card>
</template>
  
<script>
import { mapGetters } from "vuex"

 export default {
  components: {

  },


  methods:{

  },

  data: () => ({

  }),

  computed: {
    ...mapGetters([
      'description',
      'earnings',
      'revenue',
    ]),
    conclusionText: function(){

      // text = `У компании нет долгосрочных факторов роста, однако на данный момент по мнению аналитиков компания недооценена. Акции подобных компаний  покупаются в спекулятивных целях`
      let text = {}
      let t = ''



      if( this.earnings[0].data[3] < this.earnings[0].data[5] && this.revenue[0].data[3] < this.revenue[0].data[5] ){
        t = `<span class="goodNumColor">хороший</span>`
      }else{
        t = `<span class="badNumColor">не эффективный</span>`
      }

      if(this.description.profitPercentage > 15 ){
        text.text = `<span class="goodNumColor">недооценен</span>`
        text.con = `Рекомендуется <span class="goodNumColor">покупать</span> акции компании`
      }else if(this.description.profitPercentage < 15 && this.description.profitPercentage > 0){
        text.text = `<span class="goodNumColor">спроведливо оценен</span>`
        text.con = `Рекомендуется <span class="goodNumColor">удерживать</span> акции компании`
      }else{
        text.text = `<span class="badNumColor">переоценен</span>`
        text.con = `Рекомендуется <span class="badNumColor">сократить</span> позиции акций компании`
      }
      return `${this.description.name} это ${t} бизнес, который по мнению аналитиков ${text.text}. ${text.con}, ожидаемая доходность за 12-18 месяцев составит ${this.description.profitPercentage}%.`

      // return `Бизнес компании ${this.description.name} по мнению аналитиков ${text.text}. ${text.con}, ожидаемая доходность за 12-18 месяцев составит ${this.description.profitPercentage}%.`
    }
  }
  
}
</script>

<style lang="css" scoped>


</style>


