<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >
    <!-- <SkeletonReasons  v-if="Object.keys(this.$store.state.reporting.description).length == 0"></SkeletonReasons> -->
    <!-- <v-row v-if="!Object.keys(this.$store.state.reporting.description).length == 0"> -->
    <v-row>
      <v-col cols="12" sm="4" class="pa-3 mt-sm-0 mb-5">
        <h1>Новости</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
         <v-card
          rounded="lg"
          class=" mb-2 pa-4 specialColor widthBar"
          elevation="0"
        >
          <div>
            <apexchart  width="100%" height="80px" type="bar" :options="chartOptions" :series="series"></apexchart>
          </div>
        </v-card>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam soluta sit officiis iusto aliquam pariatur est earum, dignissimos dolore. Vitae atque tempore voluptatum quia esse amet nulla corporis quo!</p>
      </v-col>
    </v-row>
  </v-card>
</template>

// процентное соотношение за покупку
  
<script>
import { mapGetters } from "vuex"
import store from '@/store/index'

 export default {
  components: {

  },


  methods:{

  },

  data: () => ({
    series: [{
        name: 'Положительные новости',
        data: [20]
      },{
        name: 'Негативные новости',
        data: [80]
      }],
  }),

  computed: {
    chartOptions:function(){
      const theme = localStorage.getItem("dark_theme");
      let settingObj ={

        colors:['RGBA(102, 184, 250, 0.5)', '#51a9f0'],

        chart: {
          id:'news',
          type: 'bar',
          stacked: true,
          stackType: '100%',
          sparkline: {
            enabled: true
          },
          toolbar: {
            show: false,
          },
          background: 'transparent'
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
            horizontal: true,
            borderRadius: 5000
          },
        },
      }
        if (theme) {
            if (theme == "true") {
              settingObj.theme= {
                  mode: 'dark', 
                  monochrome: {
                      enabled: false,
                      color: '#1e2022',
                      shadeTo: 'dark',
                      shadeIntensity: 0.65
                  },
                } 
              settingObj.tooltip= {
                theme: 'dark',
              }          
            } else {
              settingObj.theme= {
                mode: 'light', 
                monochrome: {
                    enabled: false,
                    color: '#1e2022',
                    shadeTo: 'light',
                    shadeIntensity: 0.65
                },
              }
              settingObj.tooltip= {
                theme: 'light',             
              }     
        }
        return settingObj
      }
    },


    ...mapGetters([
      'yearRevenueEarning',
      'earnings',
    ]),
  }
}
</script>

<style lang="css" scoped>

</style>


