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
                v-if="avatar"
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
            <p class="caption mb-0 text--disabled">Название</p>
            <p class=" mb-0">{{ description.name }}</p>
          </strong> 
        </div>  
        <strong class="align-self-center mr-10 subtitle-1">
          <p class="caption mb-0 text--disabled">Рекомендация</p>
          <p class=" mb-0"> Покупать </p>
        </strong>
        <strong class="align-self-center mr-10 subtitle-1">
          <p class="caption mb-0 text--disabled">Прогназируемая цена</p>
          <p class=" mb-0">Около {{ Math.floor(description.TargetPrice) }}</p>
        </strong>
        <strong class="align-self-center subtitle-1">
          <p class="caption mb-0 text--disabled">Цена</p>
          <p class=" mb-0">{{ Math.floor(description.historicalPrice) }}</p>
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
      avatar: 'https://turbologo.ru/blog/wp-content/uploads/2020/02/gazprom-znak.png.webp',
      name: 'Газпром',
      div: '5%',
      excerpt: 'Покупать',
      price:'42$',
      text:'ПАО «Газпро́м» — российская транснациональная энергетическая компания, более 50 % акций которой принадлежит государству. Является холдинговой компанией Группы «Газпром». Непосредственно ПАО «Газпром» осуществляет только продажу природного газа и сдаёт в аренду свою газотранспортную систему.',
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


