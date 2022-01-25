<template>
<div>
  <v-card
    rounded="xl"
    class="mx-auto mb-5 pa-4 specialColor"
    elevation="0"
  >
    <div id="chart">
      <apexchart type="line" height="380" :options="chartOptions" :series="historicalPrice"></apexchart>
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
            x:{
              format:'dd.MM.yyyy',
            }
          },

          chart: {
            id:'chart',
            height: 350,
            sparkline: {
              enabled: false
            },
            background: 'transparent',
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },

          },

          states: {
            active: {
                filter: {
                  type: 'none'
                }
              }
          },

          plotOptions: {
              bar: {
                  distributed: true,
                  horizontal: false,
              },
          },

          legend: {
            show: false,
            fontSize: '18px',
            horizontalAlign: 'left',
            position: 'top',
            colors:'#51a9f0',
            markers: {
                width: 3,
                height: 0,
            }
          },

          grid: {
            show: false,
          },

          axisBorder: {
            show: false,
          },  

          dataLabels: {
            enabled: false,
          },

          stroke: {
            width: [2, 3],
            curve: 'straight',
            dashArray: [5, 0]
          },

          xaxis: {
            type: 'datetime',
            categories: this.$store.state.reporting.historicalPriceData,
            show: false,
            labels: {
              format: 'dd.MM.yyyy'
            }
          },

          yaxis: {
            show: false,
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
                x:{
                  format:'dd.MM.yyyy',
                }
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
                x:{
                  format:'dd.MM.yyyy',
                }           
              }     
        }
        return settings
      }
      },
      ...mapGetters([
        'historicalPrice',
        'historicalPriceData',
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


