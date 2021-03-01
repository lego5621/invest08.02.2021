<template>

  <v-app id="inspire">
    <v-app-bar
      app
      dense
      flat
      class="bacMain" 
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
              <v-list-item to="/article" class="text-center">
                <v-list-item-title>
                  Еще...
                </v-list-item-title>
              </v-list-item>
            </v-list>
              </v-menu>
              </div>
              <div>
              <v-menu offset-y class="mr-6" rounded="xl" transition="slide-y-transition">
                <template v-slot:activator="{ on, attrs }">
                  <div
                    v-bind="attrs"
                    v-on="on"
                    class="mr-6 d-flex align-center justify-space-between"
                  >
                  Мой портфель
                  </div>
                </template>
                <v-list class="specialColor">
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
                </v-list>
              </v-menu>
              </div>
        </div>
        <div></div>
      </div>
      
    </v-app-bar>

    <v-main class="bacMain" >
      <transition name="moveInUp">
        <router-view></router-view>  
      </transition>
      <Footer/>
    </v-main>
  </v-app>

</template>

<script>
import Avatar from '@/components/Avatar'
import Footer from '@/components/Footer'
  export default {
    components:{
      Avatar,
      Footer,
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
  }
</script>

<style lang="css">
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



