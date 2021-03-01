<template>
  <v-card
    rounded="xl"
    class="mx-auto mb-5 pa-4 specialColor"
    elevation="0"
    

  >
    <p class="text-h5 ">Цена</p>
      <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="StockHistorical"></apexchart>
      </div>
    <div class="pt-3">
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, accusantium commodi. Consequuntur delectus, quos dolor quibusdam odio natus corrupti, necessitatibus quisquam assumenda facere in odit! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
    </div>


  </v-card>
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
                colors: ["#42A5F5", "#42A5F5", "#42A5F5", "#42A5F5", "#42A5F5", "#42A5F5", "#42A5F5", "#42A5F5"],
                fontSize: '15px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          labels: {
            style: {
                colors: ["#42A5F5", "#42A5F5", "#42A5F5", "#42A5F5", "#42A5F5", "#42A5F5", "#42A5F5", "#42A5F5"],
                fontSize: '15px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
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


