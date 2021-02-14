<template>
   <v-card
    rounded="lg"
    class=" mb-5 pa-4"
    elevation="0"
    min-height="250"
  >
  <p class="text-h5">Кридитный рейтинг</p>
    <v-tabs
        v-model="tab"
        color="grey darken-1"
        centered
        fixed-tabs
      >
        <v-tabs-slider></v-tabs-slider>
  
        <v-tab href="#tab-1" class="text-h6">
         S&P: BBB-
        </v-tab>
  
        <v-tab href="#tab-2" class="text-h6">
          Moody’s: BBB-
        </v-tab>
  
        <v-tab href="#tab-3" class="text-h6">
          Fitch: BBB-
        </v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="i in 3"
          :key="i"
          :value="'tab-' + i"
        >
          <v-card 
            flat 
            class="pt-2"
          >
            <p class="text-h5">Что это значит:</p>
            {{ text }}
          </v-card>
        </v-tab-item>
      </v-tabs-items>   
  </v-card>
</template>

<script>
  export default {
    name: 'Retings',
    data: () => ({
      tab: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }),
  }
</script>

<style lang="css" scoped>
  .overflow{
    overflow-x: auto;
  }
</style>


