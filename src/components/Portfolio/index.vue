<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        lg="10"
        xl="8"
        offset-lg="1"
        offset-xl="2"
        class="bacMain"
      >
        <v-container class="pa-0">
          <p class="text-h4">
            Портфель: Пенсия
          </p>
          <!-- <RadarAnalysis/> -->
          <Chart/>
          <Tables/>
          <Divided/>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Chart from '@/components/Portfolio/componentsPortfolio/Chart'
  import Divided from '@/components/Portfolio/componentsPortfolio/Divided'
  import RadarAnalysis from '@/components/Portfolio/componentsPortfolio/RadarAnalysis'
  import Tables from '@/components/Portfolio/componentsPortfolio/tableStocks'

  export default {
   components:{
      Chart,
      Divided,
      RadarAnalysis,
      Tables,
    },
    name: 'Analysis',
    data: () => ({

    }),
  }
</script>

<style lang="css" >


</style>


