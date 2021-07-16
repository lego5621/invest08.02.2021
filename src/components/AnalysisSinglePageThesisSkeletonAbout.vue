<template>
  <v-col cols="12" sm="6" class="pa-3 mb-5 bacMain">
    <div class="sticky bacMain">
      <p class="text-h5 font-weight-medium">
        <v-icon size="50" class="mr-2" > mdi-arrow-top-right</v-icon>
        Подробнее о компании
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
</template>
  
<script>
 export default {
  components: {
    
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


