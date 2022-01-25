<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >
    <v-row>
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <!-- <h1>Прогноз на 12 месяцев</h1> -->
        <h1>Аналитика</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
        <v-tabs
          background-color="transparent"
          class="mb-4"
          v-model="tab"
        >
          <v-tab>Прогноз на 12 месяцев</v-tab>
          <v-tab>
            <v-badge
              dot
              v-if="idea.length > 0"
            >
              Идеи
            </v-badge>
            <span v-else>
              Идеи
            </span>
          </v-tab>
          <v-tab>Инвест дома</v-tab>

        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item class="bacMain minH">
            <div class="d-flex mb-5 flex-wrap flex-sm-nowrap">
              <div class="align-self-center  subtitle-1 w50 ms-2 pb-2 border">
                <p class="caption mb-0 text--secondary">Название</p>
                <p class=" mb-0">{{ description.name }}</p>
                <v-skeleton-loader
                  v-if="Object.keys(this.$store.state.reporting.description).length == 0"
                  v-bind="attrs"
                  type="card-heading"
                ></v-skeleton-loader>
              </div>

              <div class="align-self-center  subtitle-1 w50 ms-2 pb-2 border">
                <p class="caption mb-0 text--secondary">Официальный сайт</p>
                <p class=" mb-0"> <a :href="description.website" target="blank">{{ description.website }}</a> </p>
                <v-skeleton-loader
                  v-if="Object.keys(this.$store.state.reporting.description).length == 0"
                  v-bind="attrs"
                  type="card-heading"
                ></v-skeleton-loader>
              </div>
            </div>

            <div class="d-flex mb-5 flex-wrap flex-sm-nowrap">
              <div class="align-self-center  subtitle-1 w50 ms-2 pb-2 border">
                <p class="caption mb-0 text--secondary">Рекомендация</p>
                <p class=" mb-0">{{description.recommendation}}</p>
                <v-skeleton-loader
                  v-if="Object.keys(this.$store.state.reporting.description).length == 0"
                  v-bind="attrs"
                  type="card-heading"
                ></v-skeleton-loader>
              </div>
              <div class="align-self-center  subtitle-1 w25 ms-2 pb-2 border">
                <p class="caption mb-0 text--secondary">Прог. Рост</p>
                <p class=" mb-0" v-if="!Object.keys(this.$store.state.reporting.description).length == 0">{{ description.profitPercentage }}%</p>
                <v-skeleton-loader
                  v-if="Object.keys(this.$store.state.reporting.description).length == 0"
                  v-bind="attrs"
                  type="card-heading"
                ></v-skeleton-loader>
              </div> 
              <div class="align-self-center  subtitle-1 w25 ms-2 pb-2 border">
                <p class="caption mb-0 text--secondary">Тикер</p>
                <p class=" mb-0">{{ description.ticker }}</p>
                <v-skeleton-loader
                  v-if="Object.keys(this.$store.state.reporting.description).length == 0"
                  v-bind="attrs"
                  type="card-heading"
                ></v-skeleton-loader>
              </div>
            </div>

            <div class="d-flex mb-5">
              <div class="align-self-center subtitle-1 w25 ms-2 pb-2 border">
                <p class="caption mb-0 text--secondary">Кол. аналитиков</p>
                <p class=" mb-0 "> {{ description.recommendationAnalCaunt }} </p>
                <v-skeleton-loader
                  v-if="Object.keys(this.$store.state.reporting.description).length == 0"
                  v-bind="attrs"
                  type="card-heading"
                ></v-skeleton-loader>
              </div>
              <div class="align-self-center  subtitle-1 w25 ms-2 pb-2 border">
                <p class="caption mb-0 text--secondary">Макс. Цена</p>
                <p class=" mb-0">{{ description.maxRecommendation || 0 }}</p>
                <v-skeleton-loader
                  v-if="Object.keys(this.$store.state.reporting.description).length == 0"
                  v-bind="attrs"
                  type="card-heading"
                ></v-skeleton-loader>
              </div>
              <div class="align-self-center subtitle-1 w25 ms-2 pb-2 border">
                <p class="caption mb-0 text--secondary">Сред. Цена</p>
                <p class=" mb-0">{{ description.TargetPrice || 0 }}</p>
                <v-skeleton-loader
                  v-if="Object.keys(this.$store.state.reporting.description).length == 0"
                  v-bind="attrs"
                  type="card-heading"
                ></v-skeleton-loader>
              </div>
              <div class="align-self-center subtitle-1 w25 ms-2 pb-2 border">
                <p class="caption mb-0 text--secondary">Мин. Цена</p>
                <p class=" mb-0">{{ description.minRecommendation || 0 }}</p>
                <v-skeleton-loader
                  v-if="Object.keys(this.$store.state.reporting.description).length == 0"
                  v-bind="attrs"
                  type="card-heading"
                ></v-skeleton-loader>
              </div>
            </div>

            <div class="d-flex flex-wrap  flex-sm-nowrap ">
              <div class="align-self-center  subtitle-1 w50 ms-2 pb-2 border">
                <p class="caption mb-0 text--secondary">Страна</p>
                <p class=" mb-0">{{ description.country }}</p>
                <v-skeleton-loader
                  v-if="Object.keys(this.$store.state.reporting.description).length == 0"
                  v-bind="attrs"
                  type="card-heading"
                ></v-skeleton-loader>
              </div>
              <div class="align-self-center  subtitle-1 w50 ms-2 pb-2 border">
                <p class="caption mb-0 text--secondary">Сектор</p>
                <p class=" mb-0">{{ description.sector }}</p>
                <v-skeleton-loader
                  v-if="Object.keys(this.$store.state.reporting.description).length == 0"
                  v-bind="attrs"
                  type="card-heading"
                ></v-skeleton-loader>
              </div>
            </div>

            <!-- <div class="d-flex  flex-wrap flex-sm-nowrap bacMain">
              <div class="align-self-center  subtitle-1 w100 ms-2 pb-2 border">
                <p class="caption mb-0 text--secondary">Брокеры у которых можно купить акции {{ description.name }}</p>
                <p class=" mb-0 bacMain" v-if="!Object.keys(this.$store.state.reporting.description).length == 0">
                  <a href="https://ffin.kz/" target="blank">Freedom</a>,
                  <a href="https://www.jusaninvest.kz/" target="blank">Jysan Invest</a>,
                </p>
                <v-skeleton-loader
                  v-if="Object.keys(this.$store.state.reporting.description).length == 0"
                  v-bind="attrs"
                  type="card-heading"
                ></v-skeleton-loader>
              </div>
            </div> -->
          </v-tab-item>

          <v-tab-item class="bacMain minH">
            <v-card
              rounded="xl"
              elevation="0"
              class="pb-5 bacMain "
              v-for="item in idea"
              :key="item.time + item.profitPros"
            >
            <div class=" specialColor pb-3 mx-auto ">
              <v-list-item three-line> 
                <v-list-item-content >
                    <div class="d-flex justify-space-between text-no-wrap cardMedia" >
                      <div class="d-flex text-decoration-none textLink--text cartItem mr-3 ml-3">
                          <v-list-item-avatar
                            size="42"
                            class="ml-0"
                          >
                            <img
                                v-if="description.avatar"
                                alt="Avatar"
                                :src= item.logo
                              >
                              <v-icon
                                v-else
                              >mdi-domain</v-icon>
                          </v-list-item-avatar>
                          <strong class="font-weight-medium align-self-center">
                            <p class="caption mb-0 text--secondary">Автор</p>
                            <p class=" mb-0">{{ item.name }} </p>
                          </strong>   
                      </div>
                      <strong class="align-self-center font-weight-medium mr-3 ml-3">
                        <p class="caption mb-0 text--secondary ">Рекомендация</p>
                        <p class="mb-0" v-if="item.recom == 'Buy'">Покупать</p> 
                        <p class="mb-0" v-else-if="item.recom == 'Sell'">Продавать</p> 
                        <p class="mb-0" v-else>{{ item.recom }}</p> 
                      </strong>
                      <strong class="align-self-center font-weight-medium mr-3 ml-3">
                        <p class="caption mb-0 text--secondary">Ожидаемая прибыль</p>
                        <p class=" mb-0 ">{{ item.profitPros }}% за {{item.time}}</p>
                      </strong>
                    </div>
                  <v-list-item-title class="text-wrap mb-2 mt-2">
                    {{item.description}}
                  </v-list-item-title>
                  <div class="d-flex justify-space-between">
                    <a :href=item.url  target="_blank">Подробнее</a>
                    <!-- <span class="text--secondary">за {{item.time}}</span> -->
                  </div>
                </v-list-item-content>
              </v-list-item>
              </div>
            </v-card>

            <v-card
              rounded="xl"
              class="mx-auto pb-3 specialColor minH d-flex justify-center"
              elevation="0"
              v-if="idea.length==0"
            >
            <span
              class="align-self-center text--secondary text-h5 font-weight-light pa-5"
            >
              Мы не нашли инвестиционных идей
            </span>
              
            </v-card>
          </v-tab-item>
          <v-tab-item class="bacMain minH">
             <v-expand-transition>
              <v-col cols="12"  class="pa-3 mt-sm-0 ">
                  <v-simple-table class="a"  :class="{ active: isActive }">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left bacMain">
                            Название
                          </th>
                          <th class="text-left bacMain">
                            Дата
                          </th>
                          <th class="text-left bacMain">
                            Рекомендация
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr 
                          v-for="item in description.analystsGrade"
                          :key="item.name"
                        >
                          <td class="bacMain">{{item.firm}}</td>
                          <td class="bacMain">{{item.date}}</td>
                          <td class="bacMain">
                            <span  v-bind:class="colorAnal(item.toGrade)">
                              {{item.toGrade}}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>

                  <p  class="text-center but goodNumColor mb-1" v-show="!isActive" v-on:click="isActive =!isActive">
                    Еще
                  </p>
                  <p class="text-right pt-2">
                    <a href="#">Подробнее о рекомендациях</a>
                  </p>
                </v-col>
                </v-expand-transition>
          </v-tab-item>
        
        </v-tabs-items>
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
     colorAnal(prog) {
      if(prog == 'Buy' || prog == 'Outperform' || prog == 'Overweight'){
        return "bay"
      }else if(prog == 'Sell' || prog == 'Underweight'){
        return "sell"
      }
      else{
        return
      }
    }
    
  },

  data: () => ({
    isActive: !true,
    tab: null,
    attrs: {
      class: 'ma-0 pa-0',
      boilerplate: false,
      elevation: 0,
    },
  }),

  computed: {
    ...mapGetters([
      'description',
      'idea',
    ]),
  }
  
}
</script>

<style lang="css" scoped>

  .minH{
    min-height: 305px;
  }

  .border{
    border-bottom: 1px solid rgba(57, 62, 64, 0.5);
  }

  .w100{
    width: 100%;
  }

  .w50{
    width: 48%;
  }

  .w25{ 
    width: 24%;
  }

  @media only screen and (max-width: 657px)  {

    
    .w50{
      width: 100%;
      margin-bottom: 10px;
    }

    .w25{ 
      width: 47%;
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 325px)  {
    .w50{
      width: 100%;
      margin-bottom: 10px;
    }

    .w25{ 
      width: 100% !important;
      margin-bottom: 10px;
    }
  }

    td{
    height: 38px !important;
  }

  .a{
    max-height: 250px ;
    overflow: hidden;
    transition: max-height 2s, padding .5s;
  }

  .active{
    max-height: 10000px !important;
  }

  .but{
    cursor: pointer;
  }

  .bay{
    color: #1c86c7;
  }

  .sell{
    color: #e46065 ;
  }
</style>


