<template>
    <v-container 
        class="d-flex justify-center align-self-center height100 flex-column"
    >
        <h1 class="align-self-center">Ошибка 500: Что то пошло не так, мы работает на испралвением</h1>
        <router-link to="/" class=" textLink--text font-weight-medium align-self-center mt-2">Вернуться на главную</router-link>
    </v-container>
</template>

<script>
  export default {
    name: 'Page404',
  }
</script>

<style lang="css" scoped>
    .height100{
        height: 100%;
    }
</style>
