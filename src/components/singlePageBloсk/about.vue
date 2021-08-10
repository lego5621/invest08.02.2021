<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >
    <v-row>
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Бизнес компании</h1>
        <!-- Подробнее о компании -->
        <!-- добавить сайт и тд к подробнее о компании -->
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
        <p v-if="description.name">
          {{description.fullDescription}}
        </p>
        <div v-if="!description.name">
          <v-skeleton-loader
            type="list-item-three-line"
            class="cartItem2 "
          ></v-skeleton-loader>
          <v-skeleton-loader
            type="list-item-three-line"
            class="cartItem2 "
          ></v-skeleton-loader>
          <v-skeleton-loader
            type="list-item-three-line"
            class="cartItem2 "
          ></v-skeleton-loader>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

// процентное соотношение за покупку
  
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


</style>


