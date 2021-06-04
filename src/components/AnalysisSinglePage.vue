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
          <TextAnalysis/>
          <!-- <Divided/> -->
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Heder from '@/components/AnalysisSinglePageHeder'
  import Chart from '@/components/AnalysisSinglePageChart'
  // import Divided from '@/components/AnalysisSinglePageDivided'
  import TextAnalysis from '@/components/AnalysisSinglePageThesis'
  import FinAnalysis from '@/components/AnalysisSinglePageReporting'
  import store from '@/store/index'

export default {
  components:{
    Heder,
    Chart,
    // Divided,
    TextAnalysis,
    FinAnalysis,
  },
  name: 'ReportingSingle',
  created:function (){
    store.dispatch('companyData', this.$route.params.id);
  },
}
</script>

<style lang="css" scoped>

</style>


