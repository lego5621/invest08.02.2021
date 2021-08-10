<template>
<div>
  <v-card
    rounded="xl"
    class="mx-auto mb-5 pa-4 specialColor"
    elevation="0"
  >
  <!--<p class="text-h5 mb-0">
    <v-icon size="50" class="mr-2"> mdi-arrow-top-right </v-icon>
     Покупать с целью 452$ 
    Консенсус прогноз цены
  </p>-->
  <!-- <p>Согластно консенсус прогнозу от <span class="goodAnalysis">8 аналитиков</span>, ближайшие 12 месяцев ожидается <span class="goodAnalysis"> рост цены</span>  акции на 23%.</p> -->
    <!-- <p class="text-h5 ">Цена: {{ StockHistorical[0].data[StockHistorical[0].data.length - 1] }}</p> -->
      <div id="chart">
        <apexchart type="line" height="350" :options="chartOptions" :series="historicalPrice"></apexchart>
      </div>
  </v-card>
</div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

 export default {

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
       
    }),
    computed: {
      chartOptions:function(){
        const theme = localStorage.getItem("dark_theme");
        let settings={
          tooltip: {
            theme: 'dark',
          },
          chart: {
            id:'chart',
            height: 350,
            sparkline: {
              enabled: true
            },
            background: 'transparent'
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
        }
        if (theme) {
            if (theme == "true") {
              settings.theme= {
                  mode: 'dark', 
                  monochrome: {
                      enabled: false,
                      color: '#1e2022',
                      shadeTo: 'dark',
                      shadeIntensity: 0.65
                  },
                } 
              settings.tooltip= {
                theme: 'dark',
              }          
            } else {
              settings.theme= {
                mode: 'light', 
                monochrome: {
                    enabled: false,
                    color: '#1e2022',
                    shadeTo: 'light',
                    shadeIntensity: 0.65
                },
              }
              settings.tooltip= {
                theme: 'light',             
              }     
        }
        return settings
      }
      },
      ...mapGetters([
        'historicalPrice',
      ])
    }
    
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


