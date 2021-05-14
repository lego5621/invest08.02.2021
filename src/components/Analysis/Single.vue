<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        lg="10"
        xl="8"
        offset-lg="1"
        offset-xl="2"
      >
        <v-container class="pa-0">
          <Heder/>
          <Chart/>
          <FinAnalysis/>
          <!-- <RadarAnalysis/> -->
          <TextAnalysis/>
          <Divided/>
          <!-- <Result/> -->
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Heder from '@/components/Analysis/ComponentsReporting/Heder'
  import Chart from '@/components/Analysis/ComponentsReporting/Chart'
  import Divided from '@/components/Analysis/ComponentsReporting/Divided'
  import TextAnalysis from '@/components/Analysis/ComponentsReporting/TextAnalysis'
  import RadarAnalysis from '@/components/Analysis/ComponentsReporting/RadarAnalysis'
  import Result from '@/components/Analysis/ComponentsReporting/Result'
  import FinAnalysis from '@/components/Analysis/ComponentsReporting/FinAnalysis'

  export default {
    components:{
      Heder,
      Chart,
      Divided,
      TextAnalysis,
      RadarAnalysis,
      Result,
      FinAnalysis,
    },
    name: 'ReportingSingle',
    data: () => ({
      expand: false,
    }),
  }
</script>

<style lang="css" scoped>

</style>


