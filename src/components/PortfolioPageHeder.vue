<template>
  <v-card
    rounded="xl"
    class="mx-auto mb-5 pa-4 specialColor"
    elevation="0"
  >
    <v-row>
      <v-col cols="12" sm="12" class="pa-3 mt-sm-0">
        <div class="d-flex justify-sm-center text-no-wrap overflow" >
          <div class="align-self-center font-weight-medium mr-3 ml-3">
            <p class="caption mb-0 text--secondary ">Доходность:</p>
            <h2 class="mb-0 font-weight-light">+66,5%</h2>
          </div>
          <div class="align-self-center font-weight-medium mr-3 ml-3">
            <p class="caption mb-0 text--secondary">Прибыль:</p>
            <h2 class=" mb-0 font-weight-light">+28000<span class="text--disabled">&#36;</span></h2>
          </div>
          <div class="align-self-center font-weight-medium mr-3 ml-3">
            <p class="caption mb-0 text--secondary">Проноз:</p>
            <h2 class=" mb-0 font-weight-light">+21%</h2>
          </div>
          <!-- <div class="align-self-center font-weight-medium mr-3 ml-3">
            <p class="caption mb-0 text--secondary">Риск портфеля:</p>
            <h2 class="goodNumColor mb-0">Минимальный</h2>
          </div> -->

        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12" class="pa-3 mt-sm-0 text-center"  v-if=" 0 ">
        <span class="text--secondary">
          <v-icon
            class="text--secondary"
          >
            mdi-check
          </v-icon>
         Хороший портфель, вы максимально снизили все риски.
        </span>
      </v-col>

      <v-col cols="12"  class="pa-0  ">
        <v-alert
          dense
          outlined
          type="error"
          v-if=" 1 "
          class="ml-3 mr-3 rounded-xl"

        >
          Большенство аналитиков ожидают падения акций компании Yandex, рекомендуем продать или уменьшить количество акций в портфеле. 
        </v-alert>
        <v-alert
          dense
          outlined
          type="error"
          v-if="1 "
          class="ml-3 mr-3 rounded-xl"
        >
          Более 80% вашего портфеля составляют акции компании Alaska Air Group Inc, это нарушает диверсификацию и значительно повышает риск для вашего портфеля, рекомендуем сократить позиции. 
        </v-alert>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import store from '@/store/index'

  export default {

    computed: {
      ...mapGetters([

      ])
    },

    methods: {

    },

    created:function (){

    },

    name: 'Heder',

    data: () => ({

    }),
  }
</script>

<style lang="css" scoped>
  .overflow{
    overflow-x: auto !important;
  }

</style>


