<template>
  <div class="wrapFinAnal1 mb-3">
    <div class="wrapFinAnal2">
      <v-card
        rounded="lg"
        class=" mb-5 pa-4 specialColor widthBar"
        elevation="0"
      >
      <!-- <p class="mb-1">Прибыль (<span class="goodAnalysis">+5%</span>)</p> -->
      <p class="mb-1">Прибыль</p>
        <div>
          <apexchart width="100%"  type="bar" :options="yearRevenueEarning" :series="earnings"></apexchart>
        </div>
      </v-card>
      <v-card
        rounded="lg"
        class=" mb-5 pa-4  specialColor widthBar"
        elevation="0"
      >
      <p class="mb-1">Выручка</p>
        <div>
          <apexchart width="100%"  type="bar" :options="yearRevenueEarning" :series="revenue"></apexchart>
        </div>
      </v-card>
      <v-card
        rounded="lg"
        class=" mb-5 pa-4 specialColor widthBar"
        elevation="0"
      >
      <p class="mb-1" >Аналитики</p>
        <div>
          <apexchart width="100%"  type="bar" :options="recommendationTrendSetting" :series="recommendationTrend"></apexchart>
        </div>
      </v-card>
      <v-card
        rounded="lg"
        class=" mb-5 pa-4 specialColor widthBar"
        elevation="0"
      >
      <p class="mb-1">Дивиденды</p>
        <div>
          <apexchart width="100%"  type="bar" :options="yearDebtRatioDividend" :series="dividendsPaid"></apexchart>
        </div>
      </v-card>
    </div>
  </div>
</template>
  
<script>
  import { mapGetters } from "vuex";

  export default {

    computed: {
      ...mapGetters([
        'yearDebtRatioDividend',
        'yearRevenueEarning',
        'revenue',
        'earnings',
        'debtRatio',
        'dividendsPaid',
        'recommendationTrend',
        'recommendationTrendSetting',
      ])
    },

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
  
</style>


