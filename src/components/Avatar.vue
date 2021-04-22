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
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="John"
              >
          </v-avatar>
        </template>
        <v-list min-width="200" class="specialColor">
          <v-list-item > 
            <v-switch
              v-model="$vuetify.theme.dark"
              v-on:click="toggle_dark_mode"
              inset
              label="Темная тема"
              persistent-hint
            ></v-switch>
          </v-list-item>
          <v-list-item to="/settings">
            <v-list-item-title>Настройки</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title>Выход</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
</template>

<script>
  export default {
    name: 'Avatar',
    data: () => ({
     
    }),
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      toggle_dark_mode: function () {
          localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
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
