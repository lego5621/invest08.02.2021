<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
    v-if="description.name =='Johnson & Johnson' || description.name =='Amazon.com'  || description.name =='Facebook'"
  >
    <v-row>
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Инвестиционные идеи</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
        <div class="mb-10" >

          <div class="specialColor pa-5  mr-2 float-left rounded-xl minWid">
            <h1 class="">42%</h1>
            <p class="ma-0">За 140 дней</p>
          </div>
          <div class="minh">
            С начала года акции фармгиганта {{ description.name}} снизились на 13% при росте индекса S&P 500 на 4%. QBF считают, что текущая просадка акций создает привлекательную возможность фиксации высокой дивидендной доходности в одной из самых стабильных отраслей США
          </div>
          <div class="d-flex justify-space-between">
            <div class="mb-0">
                <v-list-item-avatar
                  size="42"
                  class="ml-0"
                >
                  <img
                      v-if="1"
                      alt="Avatar"
                      src= 'https://pbs.twimg.com/profile_images/423100288430374912/xcOAC1Pc_400x400.png'
                    >
                    <v-icon
                      v-else
                    >mdi-domain</v-icon>
                </v-list-item-avatar>
                <a href="https://ffin.kz/" target="_blank">Freedom</a>
              </div>
              <div class="d-flex align-center">
                <a href="https://ffin.kz/" target="_blank">Оригинал идеи</a> 
              </div>
          </div>
        </div>

        <div class="mb-6">
          <div class="specialColor pa-5  mr-2 float-left rounded-xl minWid">
            <h1 class="">16%</h1>
            <p class="ma-0">За 26 дней</p>
          </div>
          <div class="minh">
            Газпроомбанк обращают внимание на силу акций потребительско гиганта {{ description.name }}. С начала года акции компании выросли на 3% при том, что рынок упал на 15%. Кроме шанса на вакцину от коронавируса, у {{ description.name }} есть еще много козырей
          </div>
          <div class="d-flex justify-space-between">
            <div class="mb-0">
                <v-list-item-avatar
                  size="42"
                  class="ml-0"
                >
                  <img
                      v-if="1"
                      alt="Avatar"
                      src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdmIYf0eBvWKgmCp06xYzJCKblTvqNGFPBQ&usqp=CAU'
                    >
                    <v-icon
                      v-else
                    >mdi-domain</v-icon>
                </v-list-item-avatar>
                <a href="https://www.gazprombank.ru/" target="_blank">Газпроомбанк</a>
              </div>
              <div class="d-flex align-center">
                <a href="https://www.gazprombank.ru/" target="_blank">Оригинал идеи</a> 
              </div>
          </div>
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

    
  },
  
}
</script>

<style lang="css" scoped>

  .minWid{
    min-width: 130px;
    min-height: 130px;
  }

  .minh{
    min-height: 144px;
  }

</style>


