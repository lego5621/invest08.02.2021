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
        class=" mb-5 pa-4 specialColor widthBar d-flex flex-column"
        elevation="0"

      >
      <p class="mb-1">Дивиденды</p>
        <div v-if="dividendsPaid[0].data.length > 1">
          <apexchart width="100%"  type="bar" :options="yearDebtRatioDividend" :series="dividendsPaid"></apexchart>
        </div>
        <div v-if="dividendsPaid[0].data.length <= 1" class="mb-1 colorDivText text-center flex44">
          <p class="mb-1 colorDivText text-center align-center;">Нет истории выплат дивидендов</p>
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
        'recommendationTrendSetting',
        'recommendationTrend',
        'yearDebtRatioDividend',
        'yearRevenueEarning',
        'revenue',
        'earnings',
        'debtRatio',
        'dividendsPaid',
      ])
    },


}
</script>

<style lang="css" scoped>

  .flex44{
    align-self: center !important;
    flex-grow: 1;
  }

  .colorDivText{
    color: #51a9f0;
    align-items: center;
  display: flex;
  }

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


