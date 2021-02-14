<template>
  <v-row 
    class=" mb-3 "
  >
    <v-col
      cols="12"
      sm="6"
    >
      <v-card
        rounded="lg"
        elevation="0"
        min-height="70px"
        class="pa-4 text-center"
      >
      <router-link to="/template" class="text-h4 block text-decoration-none textLink--text d-block ">Сильные стороны</router-link >
      </v-card>
    </v-col>
    <v-col
      cols="12"
      sm="6"
    >
      <v-card
        rounded="lg"
        elevation="0"
        min-height="70px"
        class="pa-4 text-center"
      >
     <router-link to="/template" class="text-h4 block text-decoration-none textLink--text d-block ">Слабые стороны</router-link >
      </v-card>
    </v-col>
    <v-col
       cols="12"
      sm="6"
    >
      <v-card
        rounded="lg"
        elevation="0"
        min-height="70px"
        class="pa-4 text-center"
      >
      <router-link to="/template" class="text-h4 block text-decoration-none textLink--text d-block ">Возможности</router-link >
     
      </v-card>
    </v-col>
    <v-col
       cols="12"
      sm="6"
    >
      <v-card
        rounded="lg"
        elevation="0"
        min-height="70px"
        class="pa-4 text-center"
      >
      <router-link to="/template" class="text-h4 block text-decoration-none textLink--text d-block ">Угрозы</router-link >
      </v-card>
    </v-col>  
    
  </v-row>
</template>

<script>
  export default {
    name: 'SWOT',
    data: () => ({

    }),
  }
</script>

<style lang="css" scoped>
  .overflow{
    overflow-x: auto;
  }
</style>


