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
        <!-- <h1>Ожидания аналитиков</h1> -->
        <h1>Рекомендации аналитиков</h1>
      </v-col>
      <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
         <v-card
          rounded="xl"
          class=" mb-2 pa-4 specialColor widthBar"
          elevation="0"
        >
        <div>
          <apexchart width="100%" height="300px"  type="bar" :options="chartOptions" :series="recommendationTrend"></apexchart>
        </div>
          
        </v-card>
        <div>
        <!-- <p class="mb-0" v-if="recommendationTrend[0].data[0] < recommendationTrend[1].data[0] + recommendationTrend[2].data[0]">
            Большенство опрошеных аналитиков настроены <span class="goodNumColor"> положительно </span> относительно будущего компании.
          </p>
          <p class="mb-0" v-if="recommendationTrend[0].data[0] > recommendationTrend[1].data[0] + recommendationTrend[2].data[0]">
            Большенство опрошеных аналитиков настроены <span class="goodNumColor"> негативно </span> относительно будущего компании.
          </p>-->
          <p class="mb-0" v-if="recommendationTrend[0].data[0] < recommendationTrend[1].data[1] + recommendationTrend[2].data[0] + recommendationTrend[3].data[0]">
            Большенство опрошеных аналитиков ожидают  <span class="goodNumColor">роста</span> акций компании {{description.name}}.
          </p>
          <p class="mb-0" v-if="recommendationTrend[0].data[0] > recommendationTrend[1].data[0]">
             Большенство опрошеных аналитиков ожидают  <span class="goodNumColor">падения </span> акций компании {{description.name}}.
          </p>
        </div> 
        <!-- ожидают улучшение безнес показателей компании -->

        <!-- сделать типа (ожидание )настрой аналитиков, положтельный, негативный или нейтральный... относительно будещего  -->

        <!-- <p class="text-h6">Последние рекомендации инвестиционных домов</p>
        <table class="table">
          <tr>
            <th class="text-center">Название</th>
            <th class="text-center">Дата</th>
            <th class="text-center">Рекомендация</th>
          </tr>
          <tr
            v-for="item in description.analystsGrade"
            :key="item.name"
          >
            <td>{{item.firm}}</td>
            <td>{{item.date}}</td>
            <td>{{item.toGrade}}</td>
          </tr>
        </table> -->
      </v-col>
    </v-row>
  </v-card>
</template>

// процентное соотношение за покупку
  
<script>
import { mapGetters } from "vuex"
import store from '@/store/index'
import moment from 'moment'


 export default {
  components: {

  },

  methods:{

  },

  data: () => ({

          
  }),

  computed: {
   chartOptions:function(){
     const theme = localStorage.getItem("dark_theme");
     let settings ={
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
        },

        plotOptions: {
          bar: {
            columnWidth: '80%'
          },
        },

        colors:[  'RGBA(228,96,101,0.7)','RGBA(102, 184, 250, 0.9)', 'RGBA(102, 184, 250, 0.7)', 'RGBA(102, 184, 250, 0.5)'],
        // 'RGBA(102, 184, 250, 0.4)',
        
        tooltip: {
          theme: 'dark',
        },

        chart: {
          type: 'bar',
          id:'recommendationTrend',
          stacked: true,
          toolbar: {
              show: false,
          },
          background: 'transparent',
          // sparkline: {
          //     enabled: true
          // },
          // stacked: true,  
          // stackType: '100%'
        },

        grid: {
          show: false,
        },

        xaxis: {
            categories: [ moment().locale("ru").subtract(3, 'Month').format("MMMM YYYY"), moment().locale("ru").subtract(2, 'Month').format("MMMM YYYY"), moment().locale("ru").subtract(1, 'Month').format("MMMM YYYY"), moment().locale("ru").subtract(0, 'Month').format("MMMM YYYY"),],
        },

        yaxis: {
          show: false,
        },
        
        legend: {
          show: false,
        },

        states: {
          active: {
            filter: {
              type: 'none'
            }
          }
        },
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
      // 'yearRevenueEarning',
      // 'earnings',
      'recommendationTrend',
      'description',
    ]),
  }
}
</script>

<style lang="css" scoped>

  .table{
    width: 100%;
    
  }
table {
  /* font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif; */
  font-size: 14px;
  border-collapse: collapse;
  text-align: center;
}
th {
  font-weight: normal;
  border-bottom: 2px solid #1c86c7;
  padding: 10px 8px;
}
td {
  padding: 9px 8px;
  transition: .3s linear;
}
tr:hover td {
  color: #1c86c7;
}

</style>


