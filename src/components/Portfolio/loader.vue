<template>
 <v-container class="pa-0">
      <v-card
        rounded="lg"
        class="pa-4 mb-5 pb-3"
        elevation="0"
    >
         <v-skeleton-loader
            class="mt-4"
            type="list-item-avatar"
            width="30%"
        ></v-skeleton-loader>
        <v-skeleton-loader
            class="mt-4"
            type="article"
        ></v-skeleton-loader>

    </v-card>
</v-container >
</template>

<script>
  export default {
    name: 'loader',
    
    data: () => ({
        attrs: {
            class: '',
            elevation: 0,
        },
    
    }),
  }
</script>

<style lang="css" scoped>


</style>
