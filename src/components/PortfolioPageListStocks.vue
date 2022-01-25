<template>
  <v-card
    rounded="xl"
    class=" mb-5 pa-4 specialColor"
    elevation="0"
  >
      <!-- height="500px" -->
  <!-- <vuescroll :ops="ops"> -->
    <div class="d-flex flex-row-reverse mb-2">
      <v-btn
        color="buttonsColorPortfol"
        elevation="0"
      >
        <span class="white--text text--lighten-1">
          Добавить акцию
        </span>
      </v-btn>
    </div>
    <v-simple-table
      class="specialColor"
    >
      <template v-slot:default>
        <thead>
          <tr class="specialColor">
            <th class="specialColor">
              Название
            </th>
            <th class="text-center specialColor">
              Рекомендация
            </th>
            <th class="text-center specialColor">
              Прибыль
            </th>
            <th class="text-center specialColor">
              Вес
            </th>
            <!-- <th class="text-center bacMain">
              Оценка
            </th> -->
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <!-- <td>{{ item.name }}</td> -->
            <td>
              <v-dialog
                max-width="800"
              >
                <template v-slot:activator="{ on, attrs }">
                  <div
                    v-bind="attrs"
                    v-on="on"
                    class="text-no-wrap"
                  >
                    <v-list-item-avatar
                      size="42"
                      class="ml-0"
                    >
                      <img
                          v-if="item.avatar"
                          alt="Avatar"
                          :src= item.avatar
                        >
                        <v-icon
                          v-else
                        >
                          mdi-domain
                        </v-icon>
                    </v-list-item-avatar>
                    {{ item.name }}
                  </div>
                </template>
                <template v-slot:default="dialog">
                  <v-card 
                    class="specialColor" 
                    rounded="xl"
                  >
                    <v-toolbar
                      elevation="0"
                      class="specialColor"
                    ></v-toolbar>
                    <v-card-text>
                      <div class="d-flex mb-5 ">
                        <div class="align-self-center mr-10 subtitle-1 w60 ">                        
                          <div class="d-flex text-decoration-none textLink--text cartItem mr-3 ml-3">
                            <v-list-item-avatar
                              size="42"
                              class="ml-0"
                            >
                              <img
                                  v-if="item.avatar"
                                  alt="Avatar"
                                  :src= item.avatar
                                >
                                <v-icon
                                  v-else
                                >mdi-domain</v-icon>
                            </v-list-item-avatar>
                            <strong class="font-weight-medium align-self-center">
                              <p class="caption mb-0 text--secondary">Название</p>
                              <p class=" mb-0">{{ item.name }}</p>
                            </strong>   
                          </div>
                        </div>
                        <div class="align-self-center mr-10 subtitle-1 font-weight-medium">
                          <p class="caption mb-0 text--secondary">Цена</p>
                          <p class=" mb-0">198</p>
                        </div>
                      </div>

                      <div class="d-flex mb-5 justify-space-between flex-wrap flex-sm-nowrap">
                        <div class="align-self-center mr-10 subtitle-1 font-weight-medium">
                          <p class="caption mb-0 text--secondary">Дата покупки</p>
                          <p class=" mb-0 ">23.05.2020</p>
                        </div>
                        <div class="align-self-center mr-10 subtitle-1 font-weight-medium">
                          <p class="caption mb-0 text--secondary">Цена покупки</p>
                          <p class=" mb-0">103</p>
                        </div>
                        <div class="align-self-center mr-10 subtitle-1 font-weight-medium">
                          <p class="caption mb-0 text--secondary">Прибыль</p>
                          <p class=" mb-0">679(+5%)</p>
                        </div>
                        <div class="align-self-center mr-10 subtitle-1 font-weight-medium">
                          <p class="caption mb-0 text--secondary">Дивиденды</p>
                          <p class=" mb-0">20(+4%)</p>
                        </div>
                      </div>


                    </v-card-text>
                    <v-card-actions class="justify-end specialColor">
                      <v-btn
                        text
                        @click="dialog.value = false"
                      >Закрыть</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
              
            </td>
            <td class="text-center">{{ item.rating }}</td>
            <td class="text-center">{{ item.profit }}</td>
            <td class="text-center">{{ item.prognose }}</td>
            <!-- <td class="text-center">{{ item.calories }}</td> -->
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!-- </vuescroll> -->
  </v-card>
</template>
  
<script>
 import vuescroll from 'vuescroll';

 export default {
  components: {
    vuescroll
  },

  name: "Stocks",

  data: () => ({ 
    ops: {
      vuescroll: {},
      scrollPanel: {
        scrollingX: false,
        scrollingY: true,
        speed: 300,
      },
      rail: {},
      bar: {
        showDelay: 500,
        onlyShowBarOnScroll: true,
        keepShow: false,
        background: '#c1c1c1',
        opacity: 1,
        hoverStyle: false,
        specifyBorderRadius: false,
        minSize: 0,
        size: '6px',
        disable: false
      }
    },
    
    desserts: [
      {
        name: 'Газпром',
        avatar: 'https://turbologo.ru/blog/wp-content/uploads/2020/02/gazprom-znak.png.webp',
        profit: '+124(+5%)',
        rating: "Покупать",
        prognose: "2%",
      },
      {
        name: 'Лукоил',
        avatar: 'https://www.angi.ru/userfiles/image/lukoil_1(1).jpg',
        profit: '+310(+20%)',
        rating: "Держать",
        prognose: "1%",
      },
      {
        name: 'Мосбиржа',
        avatar: 'https://habrastorage.org/getpro/habr/post_images/c5b/420/14d/c5b42014d0a7f46263ed978da288eb8a.png',
        profit: '+940(+15%)',
        rating: "Покупать",
        prognose: "30%",
      },
      {
        name: 'Schweizerische Nationalbank',
        profit: '+2(+0%)',
        rating: "Покупать",
        prognose: "4%",
      },
      {
        name: 'Alaska Air Group Inc',
        avatar: 'https://static.wixstatic.com/media/7ad5cb_ff5933713c67476391db39f11faf8213.jpg',
        profit: '+11(+2%)',
        rating: "Держать",
        prognose: "5%",
      },
      {
        name: 'Yandex',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN11YVJdN6J-Zs0jMez2uRMDzMWyvUILao9A&usqp=CAU',
        profit: '-340(-10%)',
        rating: "Покупать",
        prognose: "+24%",
      },
      {
        name: 'Norilsk Nickel',
        avatar: 'https://logosklad.ru/photo/logos/521/1469030052.jpg',
        profit: '-21(-0%)',
        rating: "Покупать",
        prognose: "12%",
      },
      {
        name: 'Microsoft',
        avatar: 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-65e040f40fbf04601dc75759bec78b99.png',
        profit: '+20(+0%)',
        rating: "Держать",
        prognose: "5%",
      },      
    ],
  })
}
</script>

<style lang="css" scoped>
  @media only screen and (max-width: 657px)  {
    .cardMedia{
      flex-wrap: wrap;
      margin-bottom: 15px;
    }

    .cartItem{
      flex-basis: 100%;
    }
  }

  .w60{
    width: 55%;
  }

</style>


