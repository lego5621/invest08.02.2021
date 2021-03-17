<template>
<div>
  <v-card
    rounded="xl"
    class="mx-auto mb-5 pa-4 specialColor"
    elevation="0"
  >
  <p class="text-h5 mb-0">
    <v-icon size="50" class="mr-2"> mdi-arrow-top-right </v-icon>
    Покупать с целью 45$
  </p>
  <p>Согластно консенсус прогнозу от 8 аналитиков, ближайшие 12 месяцев ожидается <span class="goodAnalysis"> рост цены</span>  акции на 23%.</p>
    <!-- <p class="text-h5 ">Цена: {{ StockHistorical[0].data[StockHistorical[0].data.length - 1] }}</p> -->
      <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="StockHistorical"></apexchart>
      </div>
    <div class="pt-3">

      <!-- <p class="mb-2">
        Согластно консенсус прогнозу от 8 аналитиков ожидается <span class="goodAnalysis"> рост цены </span>  акции  {{ StockHistorical[0].data[StockHistorical[0].data.length - 1] }}. Потанциал доходности состовляет 10%.
      </p> -->
      <!-- <p class="mb-2">
        Компания <span class="goodAnalysis">проводит выкуп акций</span>, это является дополнительным стимулом для роста акций.
      </p> -->
    </div>
  </v-card>
</div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

 export default {
    computed: {
      ...mapGetters([
        'StockHistorical',
        'loaded'
      ])
    },

     async mounted() {
        this.fetchStatements();
      },

      methods: {
        ...mapActions([
          'fetchStatements'
        ])
      },
    name: 'Chart',
    data: () => ({
      chartOptions: {
        tooltip: {
          theme: 'dark',
        },
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            type: 'x',
            enabled: false,
          },
          toolbar: {
            show: false,
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
        },
        grid: {
          show: false
        },
        xaxis: {
          type: 'numeric',  
           labels: {
            style: {
                colors: "#42A5F5",
                fontSize: '15px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          show: false,
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


