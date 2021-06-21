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
          <CardSkeleton
            v-if="Object.keys(this.$store.state.reporting.description).length == 0"
          />
          <Heder
            v-if="!Object.keys(this.$store.state.reporting.description).length == 0"
          />
          <Chart/>
          <FinAnalysis/>
          <TextAnalysis
            v-if="!Object.keys(this.$store.state.reporting.description).length == 0"
          />
          <ThesisSkeleton
            v-if="Object.keys(this.$store.state.reporting.description).length == 0"
          />
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
  import ThesisSkeleton from '@/components/AnalysisSinglePageThesisSkeleton'
  import FinAnalysis from '@/components/AnalysisSinglePageReporting'
  import CardSkeleton from '@/components/AnalysisSinglePageHederSkeleton'
  import store from '@/store/index'

export default {
  components:{
    Heder,
    Chart,
    // Divided,
    TextAnalysis,
    FinAnalysis,
    CardSkeleton,
    ThesisSkeleton,
  },
  name: 'ReportingSingle',
  created:function (){
    store.dispatch('companyData', this.$route.params.id);
  },
}
</script>

<style lang="css" scoped>

</style>


