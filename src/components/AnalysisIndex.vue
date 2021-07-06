<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        lg="10"
        xl="8"
        offset-lg="1"
        offset-xl="2"
        class="bacMain"
      >
        <v-container class="pa-0">
          <v-sheet
            class=" pa-2 bacMain"
            rounded="lg"
          >
            <v-row
              no-gutters 
            >
              <v-col class="d-flex mb-5" cols='12'>
                <v-autocomplete
                  rounded
                  outlined
                  dense
                  label="Название компании"
                  hide-details=true
                ></v-autocomplete>
              </v-col>
              <v-col class="d-flex">
                <p>
                  Сортировать: 
                  <span v-bind:class="{ goodAnalysis: allFilter }" class="aMargin" v-on:click="changeFilter('')">Все</span>
                  <span v-bind:class="{ goodAnalysis: minPriceFilter }"  class="aMargin" v-on:click="changeFilter('minPrice')">Дешевые</span>
                  <span v-bind:class="{ goodAnalysis: maxPriceFilter }" class="aMargin" v-on:click="changeFilter('maxPrice')">Дорогие</span>
                  <span v-bind:class="{ goodAnalysis: maxProfitFilter }" class="aMargin" v-on:click="changeFilter('maxProfit')">Максимальная прибыль</span>
                  <!-- <span  class="aMargin" v-on:click="changeFilter('maxProfit')">Компании США</span> -->
                </p>
              </v-col>
            </v-row>
          </v-sheet>


          <AnalysisList></AnalysisList>
            <div class="text-center mb-4">
              <v-pagination
                v-model= "pages.currentPage"
                :length= pages.totalPages
                :total-visible="7"
                color="textLinkResult"
                elevation="0"
                @input="onPageChange"
              ></v-pagination> 
              <!-- <v-btn
                v-if="pages.currentPage !== pages.totalPages"
                elevation="0"
                rounded
                v-on:click="onPageChange"
                class="specialColor"
              >
                Еще
              </v-btn>-->
            </div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AnalysisList from '@/components/AnalysisIndexList'
import { mapGetters, mapActions } from "vuex";
import store from '@/store/index'
  export default {

    computed: {
      ...mapGetters([
        'allCompany1',
        'pages',
      ]),
      allFilter: function () {
        if( this.filter == "" ){
          return 1
        }  
        return 0
      },
      minPriceFilter: function () {
        if( this.filter == "minPrice" ){
          return 1
        }  
        return 0
      },
      maxPriceFilter: function () {
        if( this.filter == "maxPrice" ){
          return 1
        }  
        return 0
      },
      maxProfitFilter: function () {
        if( this.filter == "maxProfit" ){
          return 1
        }  
        return 0
      },
    },

    methods:{
      onPageChange: function(){
        window.scrollTo(0,0);
        let page = this.pages.currentPage
        store.dispatch('allCompany', {page, filter: this.filter});
        this.$store.state.reporting.indexListLoader = true
      },
      changeFilter: function(filter){
        this.filter=filter
        this.onPageChange()
      },
    },

    components:{
      AnalysisList,
    },

    name: 'Analysis',

    data: () => ({
      filter:''
    }),

    // created:function (){
    //   if(this.$route.params.page){
    //     store.dispatch('allCompany',this.$route.params.page)
    //   }
    // },
  }
</script>

<style lang="css" scoped>

  .aMargin{
    margin-left: 1.5rem;
    cursor: pointer;
    color: #2196f3;
  }

</style>


