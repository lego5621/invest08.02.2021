<template>
    <v-container>
        <v-row>
            <v-col
                cols="12"
                lg="10"
                xl="8"
                offset-lg="1"
                offset-xl="2"
                class="bacMain "
            >
                <v-footer
                    padless
                    rounded="lg"
                    outlined
                    color="bacMain"
                >
                    <v-row
                    justify="center"
                    no-gutters
                    color="grey darken-1"
                    >
                        <!-- <v-btn
                        v-for="link in links"
                        :key="link"
                        text
                        rounded
                        class="my-2"

                        >
                        {{ link }}
                        </v-btn> -->

                        <v-card-text class="text-center pt-1">
                            Любая информация, предоставленная в сервисе, носит исключительно справочный характер, не является публичной офертой к купле/продаже каких-либо ценных бумаг или осуществлению любых иных инвестиций, не является инвестиционной рекомендацией и используется Пользователем исключительно на свой страх и риск. 
                        </v-card-text>

                        <v-col
                            class="py-4 text-center "
                            cols="12"
                            rounded="lg"
                        >
                            {{ new Date().getFullYear() }} — <strong>StockAdvisor. Все права защищены.</strong>
                        </v-col>
                    </v-row>
                </v-footer>
            </v-col>
        </v-row>    
    </v-container>
</template>

<script>
  export default {
    name: 'Footer',
    
    data: () => ({
        links: [
            'Главная',
            'О сервисе',
            'Команда',
            'Блог',
            'Связаться с нами',
        ],
    }),
  }
</script>

<style lang="css" scoped>

</style>
