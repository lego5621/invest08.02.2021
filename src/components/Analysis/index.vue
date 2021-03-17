<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        lg="10"
        xl="8"
        offset-lg="1"
        offset-xl="2"
        class="bacMain"
      >
        <v-container class="pa-0">
          <v-sheet
            class="mb-6 pa-2 bacMain"
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
                  class="flex-grow-1 "
                  color="grey darken-1"
                ></v-text-field>
                <!-- <v-btn 
                  depressed
                  class="h-40 ml-2" 
                  color="specialColor"
                  @click="expand = !expand"
                >
                  <v-icon size="30"> mdi-arrow-down-drop-circle-outline</v-icon>
                </v-btn> -->
              </v-col>
            </v-row>
            <v-row
              no-gutters 
              class="mt-0"
            >
              <v-expand-transition >
                <v-card
                  v-show="expand"
                  height="60"
                  width="100%"
                  class="mx-auto specialColor mt-2"
                  elevation="0"
                  rounded="lg"
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
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '@/components/Analysis/Card'
  export default {
    components:{
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


