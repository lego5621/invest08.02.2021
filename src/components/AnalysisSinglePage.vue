<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        lg="10"
        xl="6"
        offset-lg="1"
        offset-xl="3"
      >
        <v-container class="pa-0">
          <CardSkeleton
            v-if="Object.keys(this.$store.state.reporting.description).length == 0"
          />
          <Heder
            v-if="!Object.keys(this.$store.state.reporting.description).length == 0"
          />
          <Chart/>
          <!-- <TextAnalysis/> -->
          <!-- <Revenue/> -->
          <!-- <Earnings/> -->
          <!-- <Upgrades/> -->

          <!-- <RecommendationTrend/> -->

          <!-- <News/> -->

          <!-- <Dividend/>-->
          <!-- <DebtRatio/>  -->

          <!-- <ROE/> -->
          <!-- <Stocks/> -->
          <!-- <About/> -->
          <Info/>
          <Earnings/>
          <!-- <Upgrades/> -->
          <!-- <Idea/> -->
          <!--<DebtRatio/>-->
          <Dividend/>

          <!--<Conclusion/>-->

          <!-- <Recom/>  -->


        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Heder from '@/components/AnalysisSinglePageHeder'
  import Chart from '@/components/AnalysisSinglePageChart'
  // import Divided from '@/components/AnalysisSinglePageDivided'
  import TextAnalysis from '@/components/2AnalysisSinglePageThesis'
  import ThesisSkeleton from '@/components/AnalysisSinglePageThesisSkeleton'
  import FinAnalysis from '@/components/AnalysisSinglePageReporting'
  import CardSkeleton from '@/components/AnalysisSinglePageHederSkeleton'

  import Revenue from '@/components/singlePageBloсk/revenue'
  import Earnings from '@/components/singlePageBloсk/earnings'
  import News from '@/components/singlePageBloсk/news'
  import Dividend from '@/components/singlePageBloсk/divid'
  import Stocks from '@/components/singlePageBloсk/stocks'
  import About from '@/components/singlePageBloсk/about'
  import Upgrades from '@/components/singlePageBloсk/upgrades'
  import RecommendationTrend from '@/components/singlePageBloсk/recommendationTrend'
  import DebtRatio from '@/components/singlePageBloсk/debtRatio'
  import ROE from '@/components/singlePageBloсk/ROE'
  import Conclusion from '@/components/singlePageBloсk/conclusion'
  import Idea from '@/components/singlePageBloсk/idea'

  import Recom from '@/components/singlePageBloсk/recom'
  import Info from '@/components/singlePageBloсk/infoRecom'








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



    Revenue,
    Earnings,
    News,
    Dividend,
    Stocks,
    About,
    Upgrades,
    RecommendationTrend,
    DebtRatio,
    ROE,
    Conclusion,
    Idea,

    Recom,
    Info,

  },
  name: 'ReportingSingle',
  created:function (){
    store.dispatch('companyData', this.$route.params.id);
  },
}
</script>

<style lang="css" scoped>

</style>


