<template>
    <v-menu 
      offset-y
      transition="slide-y-transition" 
      :close-on-content-click="false"
      rounded="lg"
    >
        <template v-slot:activator="{ on, attrs }">
          <v-avatar
            v-bind="attrs"
            v-on="on"
            size="34"
          >
             <img
                v-if="0"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="John"
              >
              <v-icon
                v-else
                size="30"
              >mdi-account</v-icon>
          </v-avatar>
        </template>
        <v-list min-width="200" class="specialColor">
          <!-- <v-list-item>
            <v-list-item-title>{{ email }}</v-list-item-title>
          </v-list-item> -->
          <v-list-item > 
            <v-switch
              v-model="$vuetify.theme.dark"
              v-on:click="toggle_dark_mode"
              inset
              label="Темная тема"
              persistent-hint
            ></v-switch>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-title>О сервисе</v-list-item-title>
          </v-list-item> 
          <!-- <v-list-item to="/settings">
            <v-list-item-title>Настройки</v-list-item-title>
          </v-list-item> -->
          <!-- <v-list-item @click="logout">
            <v-list-item-title>Выход</v-list-item-title>
          </v-list-item> -->
        </v-list>
      </v-menu>
</template>

<script>
import jwt_decode from "jwt-decode";
  export default {
    name: 'Avatar',
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    // created: function () {
    //   let user = jwt_decode(localStorage.getItem("Token"))
    //   this.firstname = user.firstname
    //   this.lastname = user.lastname
    //   this.email = user.email
    // },
    data:()=>{
      return {
        email : "",
        lastname : "",
        firstname : "",
      }
    },
    methods: {
      toggle_dark_mode: function () {
        localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());  
        const theme = localStorage.getItem("dark_theme");
        // if (theme) {
            if (theme == "true") {
              let darkConf = {
                  theme: {
                    mode: 'dark', 
                    monochrome: {
                      enabled: false,
                      color: '#1e2022',
                      shadeTo: 'dark',
                      shadeIntensity: 0.65
                    },
                  },
                }
                this.$apexcharts.exec('test', 'updateOptions', darkConf)
                this.$apexcharts.exec('revenue', 'updateOptions', darkConf)
                this.$apexcharts.exec('recommendationTrend', 'updateOptions', darkConf)
                this.$apexcharts.exec('dividend', 'updateOptions', darkConf)
                this.$apexcharts.exec('debtRatio', 'updateOptions', darkConf)
                this.$apexcharts.exec('news', 'updateOptions', darkConf)
                this.$apexcharts.exec('chart', 'updateOptions', darkConf)

            } else {
              let lightConf ={
                theme: {
                  mode: 'light', 
                  monochrome: {
                    enabled: false,
                    color: '#1e2022',
                    shadeTo: 'dark',
                    shadeIntensity: 0.65
                  },
                },
              }
              this.$apexcharts.exec('test', 'updateOptions', lightConf)
              this.$apexcharts.exec('revenue', 'updateOptions', lightConf)
              this.$apexcharts.exec('recommendationTrend', 'updateOptions', lightConf)
              this.$apexcharts.exec('dividend', 'updateOptions', lightConf)
              this.$apexcharts.exec('debtRatio', 'updateOptions', lightConf)
              this.$apexcharts.exec('news', 'updateOptions', lightConf)
              this.$apexcharts.exec('chart', 'updateOptions', lightConf)

            }
        // }
      },
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
  }
</script>

<style lang="css" scoped>

</style>
