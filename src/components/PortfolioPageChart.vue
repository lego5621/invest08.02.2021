<template>
  <v-card
    rounded="xl"
    class="mx-auto mb-5 pa-4 specialColor"
    elevation="0"
  >
    <p class="text-h5 ">Доходность: 40%</p>
    <div id="chart">
      <apexchart type="area" height="350" :options="chartOptions" :series="historicalPrice"></apexchart>
    </div>
  </v-card>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import store from '@/store/index'

  export default {

    computed: {
      ...mapGetters([
        'historicalPrice',
      ])
    },

    created:function (){
      store.dispatch('companyData', 'mmm');
      window.scrollTo(0,0);
    },

    name: 'Chart',

    data: () => ({
      
      chartOptions: {
        tooltip: {
          theme: 'dark',
        },

        chart: {
          height: 350,
          sparkline: {
            enabled: true
          },
        },

        stroke: {
          width: [2, 3],
          curve: 'straight',
          dashArray: [5, 0]
        },

        colors: ["#3a76a6", "#188cd2"],
        
      },       
    }),
  }
</script>

<style lang="css" scoped>

  .overflow{
    overflow-x: auto;
  }

  .height210px{
    height: 210px !important;
  }

</style>


