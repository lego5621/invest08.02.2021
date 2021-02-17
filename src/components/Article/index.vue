<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        lg="10"
        xl="8"
        offset-lg="1"
        offset-xl="2"
      >
        <v-container class="pa-0">
          <v-sheet
            class="mb-6 pa-2"
            rounded="lg"
          >
            <v-row
              no-gutters 
            >
              <v-col class="d-flex">
                <v-text-field
                  label="Введите название статьи"
                  outlined
                  dense
                  hide-details
                  class="flex-grow-1"
                  color="grey darken-1"
                ></v-text-field>
              </v-col>
            </v-row>
              <v-col
                cols="12"
                class="pa-0 pt-2"
              >
                <v-chip
                  link
                  class="ma-1"
                  label
                >
                  <v-icon class="mr-1">
                    mdi-star-outline
                  </v-icon>
                  Избранное
                </v-chip>                
                <v-chip
                  link
                  class="ma-1"
                  v-for="(i) in title"
                  :key="i"
                >
                  {{ i }}
                </v-chip>                
              </v-col>
          </v-sheet>


          <Card></Card>
            <div class="text-center mb-4">
              <v-pagination
                v-model="page"
                :length="15"
                :total-visible="7"
                color="textLinkResult"
              ></v-pagination>
            </div>
          <Footer></Footer>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Footer from '@/components/Footer'
import Card from '@/components/Article/Card'
  export default {
    components:{
      Footer,
      Card,
    },
    name: 'Analysis',
    data: () => ({
      expand: false,
            page: 1,
      title:["Пенсия", "Инвестиции", "Управление деньгами", "Бюджет", "Иследования","Право и Закон","Ведение бизнеса в Казахстане"]
    }),
  }
</script>

<style lang="css" >

.v-pagination__item, .v-pagination__navigation{
  box-shadow: none !important;
  outline: none !important;
}

</style>


