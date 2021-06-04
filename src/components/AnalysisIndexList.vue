<template>
 <v-container class="pa-0">
    <v-card
        rounded="xl"
        class="mx-auto mb-5 pb-3 specialColor"
        elevation="0"
        v-for="(company, i) in allCompany1"
        :key="i"
    >
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
                <p class="caption mb-0 text--disabled">Рекомендация</p>
                <p class=" mb-0">Покупать</p>
              </strong>
              <strong class="align-self-center font-weight-medium mr-3 ml-3">
                <p class="caption mb-0 text--disabled">Доходность</p>
                <p class=" mb-0">Около {{ (company.recommendationPrice - company.recommendationPrice) }}</p>
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

        </v-list-item-content>
      </v-list-item>
    </v-card>

</v-container >
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import store from '@/store/index'

  export default {
    name: 'Card_Analysis',

    computed: {
      ...mapGetters([
        'allCompany1',
      ])
    },

    async mounted() {
      if(this.allCompany1.length == 0){
        this.allCompany();
      }else{
        
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
