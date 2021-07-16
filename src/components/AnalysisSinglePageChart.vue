<template>
<div>
  <v-card
    rounded="xl"
    class="mx-auto mb-5 pa-4 specialColor"
    elevation="0"
  >
  <p class="text-h5 mb-0">
    <v-icon size="50" class="mr-2"> mdi-arrow-top-right </v-icon>
    <!-- Покупать с целью 45$ -->
    Консенсус прогноз цены
  </p>
  <!-- <p>Согластно консенсус прогнозу от <span class="goodAnalysis">8 аналитиков</span>, ближайшие 12 месяцев ожидается <span class="goodAnalysis"> рост цены</span>  акции на 23%.</p> -->
    <!-- <p class="text-h5 ">Цена: {{ StockHistorical[0].data[StockHistorical[0].data.length - 1] }}</p> -->
      <div id="chart">
        <apexchart type="line" height="350" :options="chartOptions" :series="historicalPrice"></apexchart>
      </div>
    <div class="pt-3">

    </div>
  </v-card>
</div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

 export default {
    computed: {
      ...mapGetters([
        'historicalPrice',
      ])
    },

    // async mounted() {
    //   this.companyData();
    // },

    // methods: {
    //   ...mapActions([
    //     'companyData'
    //   ])
    // },

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
        noData: {
          text: 'Ожидаем данные...',
          align: 'center',
          verticalAlign: 'middle',
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#51a9f0',
            fontSize: '19px',
            fontFamily: undefined
          }
        }
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


