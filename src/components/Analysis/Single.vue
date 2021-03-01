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
          <RadarAnalysis/>
          <TextAnalysis/>
          <Divided/>
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

  export default {
    components:{
      Heder,
      Chart,
      Divided,
      TextAnalysis,
      RadarAnalysis,
    },
    name: 'ReportingSingle',
    data: () => ({
      expand: false,
    }),
  }
</script>

<style lang="css" scoped>

</style>


