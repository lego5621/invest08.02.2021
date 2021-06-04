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
                  label="Название или тикер компании"
                  hide-details=true
                ></v-autocomplete>
              </v-col>
              <v-col class="d-flex">
                <p>Сортировать по: <a href="#" class="aMargin">Цена</a> <a href="#" class="aMargin">Доходность</a></p>
              </v-col>
            </v-row>
          </v-sheet>


          <AnalysisList></AnalysisList>
            <div class="text-center mb-4">
              <v-pagination
                v-model="pages.currentPage"
                :length=pages.totalPages
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
      ])
    },

    methods:{
      onPageChange: function(){
        window.scrollTo(0,0);
        let nextPage = this.pages.currentPage
        store.dispatch('allCompany', nextPage);
      },
    },

    components:{
      AnalysisList,
    },

    name: 'Analysis',

    data: () => ({
      page: 1
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
}


</style>


