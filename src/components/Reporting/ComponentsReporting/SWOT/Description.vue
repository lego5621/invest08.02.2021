<template>
    <v-sheet
        rounded="lg"
        class="mb-6"
    >
    <v-row
        no-gutters 
    >
        <v-col
            cols="12"
        >
        <div class="pa-3">
            <div class="pa-3 d-flex align-self-center " >
                <v-list-item-avatar
                    size="42"
                    class="ml-0"
                >
                    <img
                        v-if="avatar"
                        alt="Avatar"
                        :src= avatar
                    >
                    <v-icon
                        v-else
                    >
                        mdi-domain
                    </v-icon>
                </v-list-item-avatar>
                <p class="text-h4 mb-0 d-flex align-self-center" >Сильные стороны</p>  
            </div>
            <p>К сильным сторонам компании относятся анализ положительных факторов внутренней среды организации. Он отражает всё, что делает деятельность компании успешной, что является конкурентным преимуществом, то есть достоинства. </p>
        </div>
        <v-tabs  color="grey darken-1" class="pl-1 pr-1">
            <v-tab>Последнее</v-tab>
            <v-tab>Лучшая оценка</v-tab>
            <v-tab>От проверенных инвесторов</v-tab>
        </v-tabs>
        </v-col>
    </v-row>
    </v-sheet>
</template>

<script>
  export default {
    name: 'Description',
    data: () => ({
        avatar: 'https://turbologo.ru/blog/wp-content/uploads/2020/02/gazprom-znak.png.webp',
        name: 'Газпром',
    }),
  }
</script>

<style lang="css" scoped>

</style>
