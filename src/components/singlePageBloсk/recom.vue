<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >
    <v-row>
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Персональная рекомендация</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
        <div class="mt-2 mb-2">
          <v-slider
            v-model="value"
            label="Количество акций"
            thumb-label="always"
            dense
            hide-details
          ></v-slider>
        </div>
        <p v-if="description.name">
          Мы рекомендуем покупать <span class="goodNumColor">не более 9 акции</span> {{ description.name }}. Увеличение количества акций может привести к увеличению риска портфеля.
        </p> 

        <!-- <p class="text-right text--secondary mb-2 mt-0">
          <span>Подробнее</span>
        </p> -->

        <v-skeleton-loader
          type="list-item-three-line"
          class="cartItem2 "
          v-if="!description.name"
        ></v-skeleton-loader>
        <!-- <h2 class="goodNumColor" >
          Прогнозируемая прибыль
        </h2> -->

        <!-- <h2 class="goodNumColor" >
          Прогнозируемая прибыль портфеля
        </h2> -->

        <!-- <p class="text-right text--secondary mb-0">
          <span>Подробнее</span>
        </p> -->

        <div class="d-flex mb-2 mt-5 flex-wrap">
          <div class="align-self-center subtitle-1 w50 ms-2 pb-2 ">
            <p class="mb-0">Стоймость покупки</p>
            <p class=" mb-0 text-h4 font-weight-light"> {{ value * Math.floor(description.historicalPrice) *2 }}<span class="text--disabled">&#36;</span></p>
            <v-skeleton-loader
              v-if="Object.keys(this.$store.state.reporting.description).length == 0"
              v-bind="attrs"
              type="card-heading"
            ></v-skeleton-loader>
          </div>
          <!-- <div class="align-self-center  subtitle-1 w50 ms-2 pb-2 border">
            <p class="caption mb-0 text--secondary">Ожидаемая прибыль за год</p>
            <p class=" mb-0"> {{ value * Math.floor(description.historicalPrice)/8 }}<span class="text--disabled">&#36;</span>({{ description.profitPercentage }}%)</p>
            <v-skeleton-loader
              v-if="Object.keys(this.$store.state.reporting.description).length == 0"
              v-bind="attrs"
              type="card-heading"
            ></v-skeleton-loader>
          </div> -->
           <div class="align-self-center  subtitle-1 w50 ms-2 pb-2 ">
            <p class=" mb-0 ">Ожидаемая годовая портфеля</p>
            <p class=" mb-0 text-h4 font-weight-light">
              {{ per.toFixed(1) }}%(<span class="goodNumColor">+{{ value/2 }}%</span>)
            </p>
            <v-skeleton-loader
              v-if="Object.keys(this.$store.state.reporting.description).length == 0"
              v-bind="attrs"
              type="card-heading"
            ></v-skeleton-loader>
          </div>
        </div>

        <!-- <div class="d-flex mb-5 mt-5 flex-wrap">
          <div class="align-self-center  subtitle-1 w50 ms-2 pb-2 ">
            <p class=" mb-0 ">Ожидаемая годовая портфеля</p>
            <p class=" mb-0 text-h4">
              {{ value*2 }}%(<span class="goodNumColor">+{{value/2}}%</span>)
            </p>
            <v-skeleton-loader
              v-if="Object.keys(this.$store.state.reporting.description).length == 0"
              v-bind="attrs"
              type="card-heading"
            ></v-skeleton-loader>
          </div>
          <div class="align-self-center subtitle-1 w50 ms-2 pb-2 border">
            <p class="caption mb-0 text--secondary">Ожидаемые дивиденды портфеля</p>
            <p class=" mb-0"> {{ value * Math.floor(description.historicalPrice) *2 }}<span class="text--disabled">&#36;</span> (+2%)</p>
            <v-skeleton-loader
              v-if="Object.keys(this.$store.state.reporting.description).length == 0"
              v-bind="attrs"
              type="card-heading"
            ></v-skeleton-loader>
          </div>
        </div> -->
        <!-- <p class="text-right text--secondary ">
          <span>Подробнее</span>
        </p> -->

        <!-- <p  v-if="value < 10">
          Добавление {{ value }} акций {{ description.name }} не добавит значительного риска для вашего потфеля.       
        </p> -->

        <v-alert
          border="left"
          colored-border
          color="red darken-3"
          elevation="0"
          class="bacMain mt-2"
          v-if="value >= 10"
        >
          В вашем портфеле станут превалировать акции компаний из сектора "{{ description.sector }}", это приведет к нарушению деверсификации и увеличению риска вашего портфеля.
        </v-alert>

        <v-alert
          border="left"
          colored-border
          color="red darken-3"
          elevation="0"
          class="bacMain mt-2"
          v-if="value >= 50"
        >
          Более 80% вашего портфеля состоят акции компании {{ description.name }}, это приведет к нарушению деверсификации и значительному риску для вашего портфеля
        </v-alert>

        <v-btn
          text
          color="primary"
          @click="addStoks"
          class="float-right"
        >

                  <!-- @click="snackbar = true" -->

          Добавить в портфель {{ value }} акции {{ description.name }}
        </v-btn>
      </v-col>
    </v-row>


     <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="specialColor"
    >
      <span class="goodNumColor">
        {{value}} акций {{ description.name  }} добавлены в портфель 
      </span>
      <template v-slot:action="{ attrs }">
        <v-btn
          color="primary"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
  
</template>
  
<script>
import { mapGetters } from "vuex"

 export default {
  components: {

  },


  methods:{
    addStoks: function () {
      let tiker = this.description.ticker 
      let caunt = this.value
      let userID = this.$store.state.auth.id
      this.$store.dispatch('newPort', { tiker, caunt, userID })
      // .then(() => this.$router.push('/'))
      .catch(err => console.log(err))
    },
  },

  data: () => ({
    value: 9,
    rules: [
      v => v <= 9 ,
    ],
    snackbar: false,
    text: `Hello, I'm a snackbar`,
    timeout: 2000,
    items: ['Портфеля', 'Сделки'],
    select:'Портфеля',
    attrs: {
      boilerplate: true,
      elevation: 2,
    },
  }),

  computed: {

    per:function(){
      return 12 + this.value/3
    },


    ...mapGetters([
      'description',
    ]),

    value2:function(){
      let a = Math.round((this.value / 4)-2)
      // if(a <= 0 ){
      //   return "Минимальный"
      // } else if(a <= 10 ){
      //   return "Средний"
      // }else{
      //   return "Высокий"
      // }
      if(a <= 0 ){
        return 1
      }else{
        return 0
      }
    },

    pros:function(){
      return Math.round(this.value / 3)
    }

  }
}
</script>

<style lang="css" scoped>

  .border{
    border-bottom: 1px solid rgba(57, 62, 64, 0.5);
  }

  .w100{
    width: 100%;
  }

  .w50{
    width: 48%;
  }

  .w33{ 
    width: 32%;
  }

  @media only screen and (max-width: 657px)  {
    .w50{
      width: 100%;
      margin-bottom: 10px;
    }

    .w33{ 
      width: 100%;
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 325px)  {
    .w50{
      width: 100%;
      margin-bottom: 10px;
    }

    .w33{ 
      width: 100% !important;
      margin-bottom: 10px;
    }
  }

</style>


