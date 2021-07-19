<template>

  <v-app id="inspire">
    <v-app-bar 
      app
      dense
      flat
      class="bacMain" 
      v-if="!['login', 'register'].includes($route.name)"
    >
      <div class="d-flex align-center justify-space-between width100">
        <Avatar></Avatar>
        <div class="d-flex text-no-wrap ml-4 overflow">
          <router-link to="/" class="mr-6 textLink--text font-weight-medium" >Каталог</router-link>
          <div class="d-flex align-center justify-space-between">
          <v-menu offset-y class="mr-6" rounded="xl" transition="slide-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <a
                v-bind="attrs"
                v-on="on"
                class="mr-6 textLink--text font-weight-medium"
              >
                Как это работает?
              </a>
                </template>
                <v-list class="specialColor">
                  <v-list-item to="/0">
                    <v-list-item-title >
                      Что такое фондовый рынок и Акции?
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/2">
                    <v-list-item-title>
                      Какие бывают стратегии инвестрования?
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/3">
                    <v-list-item-title>
                      Почему нужно инвестировать?
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/4">
                    <v-list-item-title>
                      Сколько я могу заработать и сколько потерять?
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/5">
                    <v-list-item-title>
                      Как пользоваться сервисом?
                    </v-list-item-title>
                  </v-list-item>
                  <!-- <v-list-item to="/article" class="text-center">
                    <v-list-item-title>
                      Еще...
                    </v-list-item-title>
                  </v-list-item> -->
                </v-list>
              </v-menu>
              </div>
              <div>
              <!-- <v-menu offset-y class="mr-6" rounded="xl" transition="slide-y-transition"> -->
              <!-- <v-dialog
                transition="dialog-bottom-transition"
                max-width="600"
              >
                <template v-slot:activator="{ on, attrs }"> -->
                  <div
                    class="mr-6 d-flex align-center justify-space-between text--disabled"
                  >
                  Мои портфели
                  </div>
                  <!-- v-bind="attrs"
                    v-on="on" -->
                <!-- </template> -->
                <!-- <template v-slot:default="dialog">
                  <v-card class="specialColor">
                    <v-toolbar
                      elevation="0"
                      class="specialColor"
                    >Название компании</v-toolbar>
                    <v-card-text>
                      <div class="text-h5 pa-12">Эта фукциональность еще не доступна, но мы работаем над ней</div>
                    </v-card-text>
                    <v-card-actions class="justify-end specialColor">
                      <v-btn
                        text
                        @click="dialog.value = false"
                      >Закрыть</v-btn>
                    </v-card-actions>
                  </v-card>
                </template> -->
                <!-- <v-list class="specialColor">
                  <v-list-item to="/portfolio">
                    <v-list-item-title>
                      Пенсия
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      На образование сыну
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item class="text-center">
                    <v-list-item-title>
                    <v-icon size="23" class="mr-1"> mdi-briefcase-plus </v-icon> Добавить
                    </v-list-item-title>
                  </v-list-item>
                </v-list> -->
              <!-- </v-menu> -->
                <!-- </v-dialog> -->
              </div>
        </div>
        <div></div>
      </div>
    </v-app-bar>

    <v-main class="bacMain " >
      <div class="h90vh">
        <transition name="moveInUp">
          <router-view></router-view>  
        </transition>
      </div>
      <Footer/>
    </v-main>
  </v-app>

</template>

<script>
import Avatar from '@/components/TheAvatar'
import Footer from '@/components/TheFooter'
import store from '@/store/index'
import { mapMutations } from "vuex";

  export default {
    components:{
      Avatar,
      Footer,
    },

    methods:{
      ...mapMutations([
        'clearDataCompany',
        'clearAllCompany',
      ])
    },

    watch: {
      $route(to, from) {
        if (to.name !== 'single') {
          this.clearDataCompany()
        }
        // if (to.name == 'index' || to.name == 'single') {
         
        // }else{
        //   this.clearAllCompany()
        // }
      }
    },

    data: () => ({
       ops: {
          vuescroll: {},
          scrollPanel: {},
          rail: {},
          bar: {
            background: '#c1c1c1',
          }
        }
    }),

    mounted() {
        const theme = localStorage.getItem("dark_theme");
        if (theme) {
            if (theme == "true") {
              this.$vuetify.theme.dark = true;
            } else {
              this.$vuetify.theme.dark = false;
            }
        }
    },
    created: function () {
      store.dispatch('search');
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function (resolve, reject) {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch("logout")
          }
          throw err;
        });
      });
    }
  }
</script>

<style lang="css">

/* svg text {
	fill: black;
} */

  .goodNumColor{
    color: #1c86c7 !important;
  }

  .badNumColor{
    color: #e46065 !important;
  }


  .overflow{
    overflow-x: auto;
  }

  .h-40{
    height: 40px !important;
  }
  
  .v-slide-group__prev--disabled{
    display: none !important;
  }

  html {
    scroll-behavior: smooth ;
  }

  .width100{
    width: 100%;
  }

  a{
    text-decoration: none;
  }

  .v-pagination__navigation, .v-pagination__item--active, .v-pagination__item{
    box-shadow:none !important;
    outline: none;
  }

  .goodAnalysis{
    border-bottom: 2px dashed #75b5e6;
  }

   .badAnalysis{
    border-bottom: 2px dashed #E57373;
  }

  .h90vh{
    flex-grow: 1 !important;
  }

  .v-main__wrap {
    flex-direction: column;
    display: flex;
  }

  .v-tabs-bar{
    display: none !important;
  }


/* 

  .moveInUp-enter-active{
    animation: fadeIn 1s ease-in;
  }
  @keyframes fadeIn{
    0%{
  opacity: 0;
    }
    50%{
  opacity: 0.5;
    }
    100%{
  opacity: 1;
    }
  }  */

</style>



