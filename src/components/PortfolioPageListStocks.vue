<template>
  <v-card
    rounded="lg"
    class=" mb-5 pa-4 bacMain"
    elevation="0"
    height="500px"
  >
  <vuescroll :ops="ops">
  <v-simple-table
      class="bacMain"
    >
      <template v-slot:default>
        <thead>
          <tr class="bacMain">
            <th class="bacMain">
              Название
            </th>
            <th class="text-center bacMain">
              Объем от счета
            </th>
            <th class="text-center bacMain">
              Оценка
            </th>
            <th class="text-center bacMain">
              Рейтинг
            </th>
            <th class="text-center bacMain">
              Доходность
            </th>
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
                  <v-card class="specialColor">
                    <v-toolbar
                      elevation="0"
                      class="specialColor"
                    >Название компании</v-toolbar>
                    <v-card-text>
                      <div class="text-h2 pa-12">Hello world!</div>
                    </v-card-text>
                    <v-card-actions class="justify-end specialColor">
                      <v-btn
                        text
                        @click="dialog.value = false"
                      >Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </td>
            <td class="text-center">{{ item.calories }}</td>
            <td class="text-center">{{ item.calories }}</td>
            <td class="text-center">{{ item.rating }}</td>
            <td class="text-center">{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    </vuescroll>
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
        calories: 159,
        rating: "Покупать",
      },
      {
        name: 'Лукоил',
        avatar: 'https://www.angi.ru/userfiles/image/lukoil_1(1).jpg',
        calories: 237,
        rating: "Держать",
      },
      {
        name: 'Мосбиржа',
        avatar: 'https://habrastorage.org/getpro/habr/post_images/c5b/420/14d/c5b42014d0a7f46263ed978da288eb8a.png',
        calories: 262,
        rating: "Покупать",
      },
      {
        name: 'Schweizerische Nationalbank',
        calories: 305,
        rating: "Покупать",
      },
      {
        name: 'Alaska Air Group Inc',
        avatar: 'https://static.wixstatic.com/media/7ad5cb_ff5933713c67476391db39f11faf8213.jpg',
        calories: 356,
        rating: "Держать",
      },
      {
        name: 'Yandex',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN11YVJdN6J-Zs0jMez2uRMDzMWyvUILao9A&usqp=CAU',
        calories: 375,
        rating: "Покупать",
      },
      {
        name: 'Norilsk Nickel',
        avatar: 'https://logosklad.ru/photo/logos/521/1469030052.jpg',
        calories: 392,
        rating: "Покупать",
      },
      {
        name: 'Microsoft',
        avatar: 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-65e040f40fbf04601dc75759bec78b99.png',
        calories: 408,
        rating: "Держать",
      },
      {
        name: 'Donut',
        calories: 452,
        rating: "Покупать",
      },
      {
        name: 'KitKat',
        calories: 518,
        rating: "Покупать",
      },
      {
        name: 'Qwewr',
        calories: 518,
        rating: "Покупать",
      },
      {
        name: 'Ppoiupoiu',
        calories: 518,
        rating: "Покупать",
      },
      
    ],
  })
}
</script>

<style lang="css" scoped>

</style>


