<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >

    <v-row>
      <v-col cols="12" sm="6" class="pa-3 mb-5 bacMain">
        <div class="sticky bacMain">
          <p class="text-h5 font-weight-medium">
            <v-icon size="50" class="mr-2" > mdi-arrow-top-right</v-icon>
            Положительные факторы
          </p>
        </div>
        <div 
          class="mb-2 mt-2" 
          v-for="(i) in 3"
          :key="i+5"
        >
          <v-skeleton-loader
            type="list-item-three-line"
            class="cartItem2 "
          ></v-skeleton-loader>
        </div>
      </v-col>

      <v-col cols="12" sm="6"  class="pa-3 mt-sm-0 mb-5">
        <div class="sticky bacMain">
            <p class="text-h5 font-weight-medium"> 
            <v-icon size="50" class="mr-2"> mdi-arrow-bottom-right</v-icon>
            Негативные факторы
        </p>
        </div>
        <div 
            class="mb-2 mt-2" 
            v-for="(i) in 3"
            :key="i+5"
          >
            <v-skeleton-loader
              type="list-item-three-line"
              class="cartItem2 "
            ></v-skeleton-loader>
          </div>

      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="10"  class="pa-3 mt-sm-0 mb-5">
        <p class="text-h5 font-weight-medium">
          <v-icon size="45" class="mr-2" > mdi-alert-circle </v-icon>
          Стоит обратить внимание
          </p>
        <div >
          <v-skeleton-loader
            type="list-item-three-line"
            class="cartItem2 "
          ></v-skeleton-loader>
          <v-skeleton-loader
            type="list-item-three-line"
            class="cartItem2 "
          ></v-skeleton-loader>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>
  
<script>
import vuescroll from 'vuescroll';

 export default {
  components: {
    vuescroll
  },

  computed: {

  },

  data: () => ({

  }),
}
</script>

<style lang="css" scoped>

  /* .maxHeight{
    height: 400px;
    overflow-y: hidden;
  } */

  .maxHeight2{
    height: auto;
  }

  .sticky{
    position: sticky;
    top: 0;
  }

  /* @media only screen and (max-width: 657px)  {
    .maxHeight{
      height: 600px;
      overflow-x: hidden;
    }
  } */

</style>


