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
                  label="Название или тикер компании"
                  outlined
                  dense
                  hide-details
                  class="flex-grow-1"
                  color="grey darken-1"
                ></v-text-field>
                <v-btn 
                  depressed
                  class="h-40 ml-2" 
                  color="secondary"
                  @click="expand = !expand"
                >
                  Скринер
                </v-btn>
              </v-col>
            </v-row>
            <v-row
              no-gutters 
              class="mt-0"
            >
              <v-expand-transition>
                <v-card
                  v-show="expand"
                  height="200"
                  width="100%"
                  class="mx-auto secondary mt-2"
                ></v-card>
              </v-expand-transition>
            </v-row>
          </v-sheet>


          <Card></Card>
            <div class="text-center mb-4">
              <v-pagination
                v-model="page"
                :length="15"
                :total-visible="7"
                color="textLinkResult"
                elevation="0"
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
import Card from '@/components/Reporting/Card'
  export default {
    components:{
      Footer,
      Card,
    },
    name: 'Analysis',
    data: () => ({
      expand: false,
      page: 1,
    }),
  }
</script>

<style lang="css" scoped>

</style>


