<template>
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


