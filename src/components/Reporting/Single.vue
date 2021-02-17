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
          <Result/>
          <Chart/>
          <Revenue/>
          <Income/>
          <NumberStocks/>
          <EP/>
          <ROA/>
          <Retings/>
          <Debit/>
          <Divided/>
          <Analysts/>
          <Footer/>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Footer from '@/components/Footer'
  import Card from '@/components/Reporting/Card'
  import Heder from '@/components/Reporting/ComponentsReporting/Heder'
  import Result from '@/components/Reporting/ComponentsReporting/Result'
  import Chart from '@/components/Reporting/ComponentsReporting/Chart'
  import Revenue from '@/components/Reporting/ComponentsReporting/Revenue'
  import Income from '@/components/Reporting/ComponentsReporting/Income'
  import NumberStocks from '@/components/Reporting/ComponentsReporting/NumberStocks'
  import EP from '@/components/Reporting/ComponentsReporting/EP'
  import ROA from '@/components/Reporting/ComponentsReporting/ROA'
  import Retings from '@/components/Reporting/ComponentsReporting/Retings'
  import Debit from '@/components/Reporting/ComponentsReporting/Debit'
  import Divided from '@/components/Reporting/ComponentsReporting/Divided'
  import Analysts from '@/components/Reporting/ComponentsReporting/Analysts'

  export default {
    components:{
      Footer,
      Card,
      Heder,
      Chart,
      Revenue,
      Result,
      Income,
      NumberStocks,
      EP,
      ROA,
      Retings,
      Debit,
      Divided,
      Analysts,
    },
    name: 'ReportingSingle',
    data: () => ({
      expand: false,
    }),
  }
</script>

<style lang="css" scoped>

</style>


