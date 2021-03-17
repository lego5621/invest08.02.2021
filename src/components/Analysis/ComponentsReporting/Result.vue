<template>
  <v-card
    rounded="lg"
    class="mx-auto mb-5 mt-10 bacMain"
    elevation="0"
  >
    <v-alert
      icon="mdi-bookmark-check"
      prominent
      text
      type="info"
      rounded="lg"
    >
    <p class="text-h5">Компания пригодна для долгосрочного инвестирования</p>
      <p>Риск: средний</p>
      <p>Прибыль: 25% за 12 месяцев</p>
    </v-alert>

    <!-- <v-alert
      text
      prominent
      type="error"
      icon="mdi-alert-circle-outline"
      rounded="lg"
    >
    <p class="text-h5">Компания не пригодна для долгосрочного инвестирования</p>
      Компания пригодна только для спикулятивного трейдинга и, по мнению компании, не пригодна для долгосрочного накапливания капитала.
      Основные причины: Низкий кридитный рейтинг компании
    </v-alert> -->
  </v-card>
</template>

<script>
  export default {
    name: 'Result',
    data: () => ({
      
    }),
  }
</script>

<style lang="css" scoped>

</style>


