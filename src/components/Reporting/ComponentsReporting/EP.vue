<template>
   <v-card
    rounded="lg"
    class=" mb-5 pa-4"
    elevation="0"
  >
    <v-row>
      <v-col
        cols="12"
        sm="3"
        class="d-flex flex-column justify-center align-center"
      >
        <v-card
          min-height="150"
          class="d-flex flex-column justify-center align-center"
          elevation="0"

          rounded="lg"
        >
          <p class="text-h6">E/P</p>
          <p class="text-h3">11%</p>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="9"
        class="d-flex flex-column justify-center align-center"
      >
        <v-card
          min-height="150"
          class="d-flex flex-column justify-center "
          elevation="0"
        >
          <p class="text-h5">Что это значит:</p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nemo, ex quod obcaecati similique deleniti totam quibusdam veritatis quisquam nihil numquam, unde ab dolore illo?
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  export default {
    name: 'EP',
    data: () => ({

    }),
  }
</script>

<style lang="css" scoped>
  .overflow{
    overflow-x: auto;
  }
</style>


