<template>
  <v-card
    rounded="lg"
    class="mb-5 bacMain"
    elevation="0"
  >
  <v-list-item three-line class="pa-0"> 
    <v-list-item-content >
      <div class="d-flex justify-space-between text-no-wrap overflow" >
        <div class="mr-10 d-flex">
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
          <strong class="subtitle-1 align-self-center" >
            <p class="caption mb-0 text--disabled">Название</p>
            <p class=" mb-0">{{ name }}</p>
          </strong> 
        </div>  
        <strong class="align-self-center mr-10 subtitle-1">
          <p class="caption mb-0 text--disabled">Рекомендация</p>
          <p class=" mb-0">{{ excerpt }}</p>
        </strong>
        <strong class="align-self-center mr-10 subtitle-1">
          <p class="caption mb-0 text--disabled">Риск</p>
          <p class=" mb-0">{{ title }}</p>
        </strong>
        <strong class="align-self-center subtitle-1">
          <p class="caption mb-0 text--disabled">Цена</p>
          <p class=" mb-0">{{ price }}</p>
        </strong>
      </div>
      <div class=" mt-2 mb-2 lHeight">
        {{ text }}
      </div>
      
    </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
  export default {
    name: 'Header',
    data: () => ({
      avatar: 'https://turbologo.ru/blog/wp-content/uploads/2020/02/gazprom-znak.png.webp',
      name: 'Газпром',
      title: 'Низкий',
      excerpt: 'Покупать',
      price:'42$',
      text:'ПАО «Газпро́м» — российская транснациональная энергетическая компания, более 50 % акций которой принадлежит государству. Является холдинговой компанией Группы «Газпром». Непосредственно ПАО «Газпром» осуществляет только продажу природного газа и сдаёт в аренду свою газотранспортную систему.',
    }),
  }
</script>

<style lang="css" scoped>
  .overflow{
    overflow-x: auto;
  }
  .lHeight {
    line-height: 1.5;
  }
</style>


