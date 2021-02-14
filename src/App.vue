<template>
  <v-app id="inspire">
    <v-app-bar
      app
      dense
      flat
    >
      <Avatar></Avatar>

      <v-tabs
        centered
        color="grey darken-1"
      >
        <v-tab to="/" >
          Компании  
        </v-tab>
        <!-- <v-tab to="/">
          Разбор Компаний
        </v-tab> -->
        <v-tab to="/idea">
          Идеи
        </v-tab>
        <v-tab to="/article">
          Статьи
        </v-tab>
        <v-tab to="/portfolio">
          Портфель
        </v-tab>

      </v-tabs>
    </v-app-bar>

    <v-main class="bacMain" >
      <transition name="moveInUp">
        <router-view></router-view>  
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Avatar from '@/components/Avatar'
  export default {
    components:{
      Avatar,
    },
    data: () => ({

    }),
  }
</script>

<style lang="css">
  .h-40{
    height: 40px !important;
  }
  .v-slide-group__prev--disabled{
    display: none !important;
  }
  html {
    scroll-behavior: smooth;
  }



  /* .moveInUp-enter-active{
    opacity: 0;
    transition: opacity 1s ease-in;
  }

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
  } */

</style>



