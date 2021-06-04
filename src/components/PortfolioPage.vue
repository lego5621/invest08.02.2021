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
          <Chart/>
          <Tables/>
          <!-- <Divided/> -->
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Chart from '@/components/PortfolioPageChart'
  import Divided from '@/components/PortfolioPageDivided'
  import Tables from '@/components/PortfolioPageListStocks'

  export default {
   components:{
      Chart,
      Divided,
      Tables,
    },
    name: 'Analysis',
  }
</script>

<style lang="css" >


</style>


