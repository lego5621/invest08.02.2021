<template>
  <v-card
    rounded="lg"
    class="mx-auto mb-5 pa-4"
    elevation="0"
  >
  <p class="text-h5">GAZP</p>
    <v-sparkline
      :value="value"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="width"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      :fill="fill"
      :type="type"
      :auto-line-width="autoLineWidth"
      auto-draw
    ></v-sparkline>
  </v-card>
</template>

<script>
  const gradients = [
      ['#222'],
      ['#42b3f4'],
      ['red', 'orange', 'yellow'],
      ['purple', 'violet'],
      ['#00c6ff', '#F0F', '#FF0'],
      ['#f72047'],
    ]

  export default {
    name: 'Chart',
    data: () => ({
      width: 2,
      radius: 15,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [4, 2, 5, 3, 5, 8, 3, 5, 4, 7, 3, 8, 5, 9, 10],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
  }
</script>

<style lang="css" scoped>
  .overflow{
    overflow-x: auto;
  }
</style>


