<template>
 <v-container class="pa-0">
   <div v-if="this.$store.state.reporting.indexListLoader">
    <ListSkeleton 
      v-for="(i) in 5"
      :key="i+5" 
    /> 
   </div>
  
   <div v-if="!this.$store.state.reporting.indexListLoader">
    <v-card
      rounded="xl"
      class="mx-auto mb-5 pb-3 specialColor"
      elevation="0"
      v-for="(company, i) in allCompany1"
      :key="i"
    >
    <!-- <v-badge
      bordered
      color="primary"
      overlap
      :value="company.profitPercentage > 15"
    > -->
      <v-list-item three-line> 
        <v-list-item-content >
          <router-link :to="{ name: 'single', params: { id:company.ticker }}" class="block mr-10 text-decoration-none textLink--text " >
            <div class="d-flex justify-space-between text-no-wrap cardMedia" >
              <div class="d-flex text-decoration-none textLink--text cartItem mr-3 ml-3">
                  <v-list-item-avatar
                    size="42"
                    class="ml-0"
                  >
                    <img
                        v-if="company.avatar"
                        alt="Avatar"
                        :src= company.avatar
                      >
                      <v-icon
                        v-else
                      >mdi-domain</v-icon>
                  </v-list-item-avatar>
                  <strong class="font-weight-medium align-self-center">
                    <p class="caption mb-0 text--disabled">Название</p>
                    <p class=" mb-0">{{ company.name }}</p>
                  </strong>   
              </div>
              <strong class="align-self-center font-weight-medium mr-3 ml-3">
                <p class="caption mb-0 text--disabled ">Рекомендация</p>
                <!-- <p v-if="company.profitPercentage >= 10" class="mb-0">Накапливать</p>
                <p v-else-if="company.profitPercentage < 10 && company.profitPercentage > 0" class="mb-0">Держать</p>
                <p v-else class="mb-0">Сокращать</p> -->
                <!-- <p v-if="company.profitPercentage < 0 && company.recommendation =='Покупать'" class="mb-0">Пересмотр...</p> -->
                <p class="mb-0">{{company.recommendation}}</p> 
              </strong>
              <strong class="align-self-center font-weight-medium mr-3 ml-3">
                <p class="caption mb-0 text--disabled">Прогназируемая цена</p>
                <p class=" mb-0 text-center">{{ Math.floor(company.recommendationPrice) }} 
                  (<span v-if="company.profitPercentage> 0">+</span>{{ company.profitPercentage }}%)</p>
              </strong>
              <strong class="align-self-center font-weight-medium mr-3 ml-3">
                <p class="caption mb-0 text--disabled">Цена</p>
                <p class=" mb-0 ">{{ Math.floor(company.currentPrice) }}</p>
              </strong>
            </div>
          </router-link>
          <v-list-item-title class="text-wrap mb-2">
            {{company.description}}
          </v-list-item-title>
          <!-- <p v-if="company.profitPercentage > 10" class="mb-0 text--disabled">
            2 инвестицинные идеи: +25%, +50%
          </p> -->
          <div v-if="company.name =='Johnson & Johnson' || company.name =='Amazon.com' || company.name =='Facebook'">
            <span class="mb-0 text--secondary">Инвестиционные идеи:</span>
            <v-chip
              class="ma-1"
              small
              color="chipColor"
            >
            +16% за 26 месяцев
            </v-chip> 
            <v-chip
              class="ma-1"
              small
              color="chipColor"
            >
            +42% за 140 дней
            </v-chip> 
          </div>
        </v-list-item-content>
      </v-list-item>
      <!-- </v-badge> -->
    </v-card>
    
  </div>
</v-container >
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import store from '@/store/index'
  import ListSkeleton from '@/components/AnalysisCardSkeleton'

  export default {
    name: 'Card_Analysis',

    data: () => ({
      show: true,
    }),

    components:{
      ListSkeleton,
    },

    computed: {
      ...mapGetters([
        'allCompany1',
      ]),
    },

    mounted() {
      if(this.$store.state.reporting.allCompany.length == 0){
        store.dispatch('allCompany');
      }
    },

    methods: {
      ...mapActions([
        'allCompany',
      ]),
    },
  }
</script>

<style lang="css" scoped>

  @media only screen and (max-width: 657px)  {
    .cardMedia{
      flex-wrap: wrap;
      margin-bottom: 15px;
    }

    .cartItem{
      flex-basis: 100%;
    }
  }

</style>
