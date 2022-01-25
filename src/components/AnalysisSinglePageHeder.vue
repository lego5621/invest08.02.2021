<template>
  <v-card
    rounded="lg"
    class="mb-5 bacMain"
    elevation="0"
  >
  <v-list-item three-line class="pa-0"> 
    <v-list-item-content >
      <div class="d-flex justify-space-between text-no-wrap cardMedia" >
        <div class="mr-10 d-flex cartItem">
          <v-list-item-avatar
            size="42"
            class="ml-0"
          >
            <img
                v-if="description.avatar"
                alt="Avatar"
                :src= description.avatar
              >
              <v-icon
                v-else
              >
                mdi-domain
              </v-icon>
          </v-list-item-avatar>
          <strong class="subtitle-1 align-self-center" >
            <p class="caption mb-0 text--secondary">Название</p>
            <p class=" mb-0">{{ description.name }}</p>
          </strong> 
        </div>  
        <strong class="align-self-center mr-10 subtitle-1">
          <p class="caption mb-0 text--secondary">Рекомендация</p>
          <!-- <p v-if="description.profitPercentage >= 10" class="mb-0">Накапливать</p>
          <p v-else-if="description.profitPercentage < 10 && description.profitPercentage > 0" class="mb-0">Держать</p>
          <p v-else class="mb-0">Сокращать</p> -->
          <p class="mb-0" >{{description.recommendation}}</p> 
        </strong>
        <strong class="align-self-center mr-10 subtitle-1 ">
          <p class="caption mb-0 text--secondary">Прогназируемая цена</p>
          <p class=" mb-0">Около {{ Math.floor(description.TargetPrice) }}<span class="text--disabled">&#36;</span> (<span v-if="description.profitPercentage> 0">+</span>{{ description.profitPercentage }}%)</p>
        </strong>
        <strong class="align-self-center subtitle-1">
          <p class="caption mb-0 text--secondary">Цена</p>
          <p class=" mb-0">{{ Math.floor(description.historicalPrice) }}<span class="text--disabled">&#36;</span></p>
        </strong>
      </div>
      <div class=" mt-2 mb-2 lHeight">
        {{ description.description }}
      </div>
      
    </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
   computed: {
      ...mapGetters([
        'description',
      ])
    },
    name: 'Header',
    data: () => ({
     
    }),
  }
</script>

<style lang="css" scoped>
  .lHeight {
    line-height: 1.5;
  }

  @media only screen and (max-width: 657px)  {
    .cardMedia{
      flex-wrap: wrap;
      margin-bottom: 15px;
    }

    .cartItem{
      flex-basis: 100%;
    }
  }
</style>


