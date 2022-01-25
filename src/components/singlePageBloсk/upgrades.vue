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
        <h1>Рекомендации инвест домов</h1>
      </v-col>
      <v-expand-transition>
     <v-col cols="12" sm="8" class="pa-3 mt-sm-0 mb-5">
        <v-simple-table class="a"  :class="{ active: isActive }">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left bacMain">
                  Название
                </th>
                <th class="text-left bacMain">
                  Дата
                </th>
                <th class="text-left bacMain">
                  Рекомендация
                </th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="item in description.analystsGrade"
                :key="item.name"
              >
                <td class="bacMain">{{item.firm}}</td>
                <td class="bacMain">{{item.date}}</td>
                <td class="bacMain">
                  <span  v-bind:class="colorAnal(item.toGrade)">
                    {{item.toGrade}}
                  </span>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <p  class="text-center but goodNumColor mb-1" v-show="!isActive" v-on:click="isActive =!isActive">
          Еще
        </p>
        <p class="text-right mt-2">
          <a href="#">Подробнее о рекомендациях</a>
        </p>
      </v-col>
      </v-expand-transition>
    </v-row>
  </v-card>
</template>

// процентное соотношение за покупку
  
<script>
import { mapGetters } from "vuex"
import moment from 'moment'
import store from '@/store/index'

 export default {
  components: {

  },


  methods:{
    colorAnal(prog) {
      if(prog == 'Buy' || prog == 'Outperform' || prog == 'Overweight'){
        return "bay"
      }else if(prog == 'Sell' || prog == 'Underweight'){
        return "sell"
      }
      else{
        return
      }
    }
  },

  data: () => ({
    isActive: !true
  }),

  computed: {
    ...mapGetters([
      'description'
    ]),
  }
}
</script>

<style lang="css" scoped>

  td{
    height: 38px !important;
  }

  .a{
    max-height: 250px ;
    overflow: hidden;
    transition: max-height 2s, padding .5s;
  }

  .active{
    max-height: 10000px !important;
  }

  .but{
    cursor: pointer;
  }

  .bay{
    color: #1c86c7;
  }

  .sell{
    color: #e46065 ;
  }

</style>


