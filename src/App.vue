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
          Отчетность
        </v-tab>
        <!-- <v-tab to="/analysis">
          Разбор Компаний
        </v-tab> -->
        <v-tab to="/idea">
          Идеи
        </v-tab>
        <v-tab to="/people">
          Пользователи
        </v-tab>
        <v-tab to="/portfolio">
          Портфель
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="bacMain" >
     <router-view></router-view>  
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

</style>



