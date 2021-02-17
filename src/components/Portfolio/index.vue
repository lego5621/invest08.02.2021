<template>
 <v-container>
    <v-row>
      <v-col
        cols="12"
        lg="10"
        xl="8"
        offset-lg="1"
        offset-xl="2"
        class="mx-auto"
      >
        <v-container class="pa-0">
          <v-card
            rounded="lg"
            class="pa-8"
            elevation="0"
            min-height="300px"
          >
          <v-list-item-title class="text-h4 mb-1 text-center text-wrap">
            Раздел еще не готов но, мы усердно работаем над ним...
          </v-list-item-title>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              width="80%"
              src="/work.png"
              class="mx-auto footBac"
            ></v-img>

          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    components:{

    },
    name: 'index',
    
    data: () => ({
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
    }),
  }
</script>

<style lang="css" scoped>

</style>
