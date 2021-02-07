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
         

          <Heder></Heder>
          <Chart></Chart>
          <SWOT></SWOT>
          <Reporting></Reporting>
          <Footer></Footer>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Footer from '@/components/Footer'
import Card from '@/components/Reporting/Card'
import Heder from '@/components/Reporting/ComponentsReporting/Heder'
import Chart from '@/components/Reporting/ComponentsReporting/Chart'
import SWOT from '@/components/Reporting/ComponentsReporting/SWOT'
import Reporting from '@/components/Reporting/ComponentsReporting/Reporting'
  export default {
    components:{
      Footer,
      Card,
      Heder,
      Chart,
      SWOT,
      Reporting,
    },
    name: 'ReportingSingle',
    data: () => ({
      expand: false,
    }),
  }
</script>

<style lang="css" scoped>

</style>


