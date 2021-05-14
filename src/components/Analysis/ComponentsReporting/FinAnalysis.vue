<template>
  <div class="wrapFinAnal1 mb-3">
    <div class="wrapFinAnal2">
      <v-card
        rounded="lg"
        class=" mb-5 pa-4 specialColor widthBar"
        elevation="0"
      >
      <p class="mb-1">Прибыль (<span class="goodAnalysis">+5%</span>)</p>
        <div>
          <apexchart width="100%"  type="bar" :options="getYear" :series="getEarnings"></apexchart>
        </div>
      </v-card>
      <v-card
        rounded="lg"
        class=" mb-5 pa-4  specialColor widthBar"
        elevation="0"
      >
      <p class="mb-1">Выручка (<span class="goodAnalysis">+15%</span>)</p>
        <div>
          <apexchart width="100%"  type="bar" :options="getYear" :series="getRevenue"></apexchart>
        </div>
      </v-card>
      <v-card
        rounded="lg"
        class=" mb-5 pa-4 specialColor widthBar"
        elevation="0"
      >
      <p class="mb-1" >Долг (<span class="badAnalysis">+12%</span>)</p>
        <div>
          <apexchart width="100%"  type="area" :options="getYear" :series="getDebtRatio"></apexchart>
        </div>
      </v-card>
      <v-card
        rounded="lg"
        class=" mb-5 pa-4 specialColor widthBar"
        elevation="0"
      >
      <p class="mb-1">КВД (<span class="goodAnalysis">+10%</span>)</p>
        <div>
          <apexchart width="100%"  type="area" :options="getYear" :series="getDividendsPaid"></apexchart>
        </div>
      </v-card>
    </div>
    <!-- <p class="text-h5 font-weight-medium"><v-icon size="50" class="mr-2" > mdi-clock-time-eight </v-icon>Анализ прошлого</p> -->
    <!-- <p class="mb-2 mt-2">
      Компания имеет <span class="goodAnalysis">Нейтральный инвестиционный рейтинг</span>, риск банкротства не велик, компания хорошо поддаются анализу а прогнозы относительно точные, однако компании с данным рейтингом более подвержены влиянию различных неблогоприятных факторов. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius neque laboriosam suscipit incidunt est. Nisi quod corrupti blanditiis libero. lorem200
    </p>  -->
  </div>
</template>
  
<script>
  import { mapGetters } from "vuex";

  export default {

    computed: {
      ...mapGetters([
        'getRevenue',
        'getEarnings',
        'getDebtRatio',
        'getDividendsPaid',
        'getYear',
        'loaded'
      ])
    },

    //computed: {
    //  ...mapGetters([
    //    'getRevenue',
    //    'getEarnings',
    //    'getDebtRatio',
    //    'getDividendsPaid',
    //    'getYear'
    //  ])
    //},

  data: () => ({ 

  })
}
</script>

<style lang="css" scoped>
  .overflow{
    overflow-x: auto;
  }

  .wrapFinAnal2{
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  .widthBar{
    width: 24%;
  }

  @media only screen and (max-width: 657px)  {
    .wrapFinAnal2{
      flex-wrap: wrap;
    }

    .widthBar{
      width: 48%;
    }
  }

   /* @media only screen and (max-width: 400px)  {
    .wrapFinAnal2{
      flex-wrap: wrap;
    }

    .widthBar{
      width: 98%;
    }
  } */
</style>


