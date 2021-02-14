<template>
  <v-card
    rounded="lg"
    class="mx-auto mb-5 "
    elevation="0"
  >
  <v-list-item three-line> 
    <v-list-item-content >
      <div class="d-flex justify-space-between text-no-wrap overflow" >
        <div class="mr-10">
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
          <strong class="subtitle-1" >{{ name }}</strong> 
        </div>  
        <strong class="align-self-center mr-10 subtitle-1">{{ excerpt }}</strong>
        <strong class="align-self-center mr-10 subtitle-1">{{ title }}</strong>
        <strong class="align-self-center subtitle-1">{{ price }}</strong>
      </div>
      <div class=" mt-2 mb-2 tab15px">
        ПАО «Газпро́м» — российская транснациональная энергетическая компания, более 50 % акций которой принадлежит государству. Является холдинговой компанией Группы «Газпром». Непосредственно ПАО «Газпром» осуществляет только продажу природного газа и сдаёт в аренду свою газотранспортную систему.
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
      title: 'Нефте газ',
      excerpt: 'Россия',
      price:'42$'
    }),
  }
</script>

<style lang="css" scoped>
  .overflow{
    overflow-x: auto;
  }
  .tab15px{ 
    text-indent: 30px; 
    line-height: 1.5;
  }
</style>


