<template>
  <v-card
    rounded="xl"
    class="mx-auto mb-5 pb-2 pt-2 bacMain overflowHidden"
    elevation="0"
    >
      <v-sheet
        rounded="xl"
        class=" d-flex cardMedia bacMain ms-n4"
      >
        <v-skeleton-loader
            width="35%"
            type="list-item-avatar-two-line"
            class="cartItem"
          ></v-skeleton-loader>
        <v-skeleton-loader
            width="25%"
            type="list-item-two-line"
            class="cartItem2 "
        ></v-skeleton-loader>
        <v-skeleton-loader
            width="25%"
            type="list-item-two-line"
            class="cartItem2 "
          ></v-skeleton-loader>
        <v-skeleton-loader
            width="15%"
            type="list-item-two-line"
            class="cartItem2 "
          ></v-skeleton-loader>
      </v-sheet>
      <v-sheet
        class="bacMain ms-n4"
      >
        <v-skeleton-loader
          width="100%"
          type="list-item-three-line"
        ></v-skeleton-loader>
      </v-sheet>
    </v-card>
</template>

<script>
  import store from '@/store/index'

  export default {
    name: 'Loader',

  }

</script>

<style lang="css" >
  @media only screen and (max-width: 657px)  {
    .cardMedia{
      flex-wrap: wrap;
    }

    .cartItem{
      flex-basis: 100%;
    }

    .cartItem2{
      flex-basis: 33%;
    }
  }

  .v-skeleton-loader__list-item-two-line, .v-skeleton-loader__list-item-avatar-two-line, .v-skeleton-loader__list-item-three-line{
    background-color: transparent !important;
  }

  .overflowHidden{
    overflow: hidden;
  }

</style>