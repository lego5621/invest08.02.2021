<template>
  <v-card
    rounded="lg"
    class=" mb-5 pa-4 bacMain"
    elevation="0"
    min-height="400px"
  >
  <v-simple-table
      fixed-header
      height="450px"
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
              Прибыль
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
            <td class="text-center">{{ item.calories }}</td>
            <td class="text-center">{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>
  
<script>

 export default {
  name: "Stocks",
  data: () => ({ 
    desserts: [
      {
        name: 'Газпром',
        avatar: 'https://turbologo.ru/blog/wp-content/uploads/2020/02/gazprom-znak.png.webp',
        calories: 159,
      },
      {
        name: 'Лукоил',
        avatar: 'https://www.angi.ru/userfiles/image/lukoil_1(1).jpg',
        calories: 237,
      },
      {
        name: 'Мосбиржа',
        avatar: 'https://smart-lab.ru/uploads/articles/00/19/10/thumbnail.png',
        calories: 262,
      },
      {
        name: 'Schweizerische Nationalbank',
        calories: 305,
      },
      {
        name: 'Alaska Air Group Inc',
        avatar: 'https://static.wixstatic.com/media/7ad5cb_ff5933713c67476391db39f11faf8213.jpg',
        calories: 356,
      },
      {
        name: 'Yandex',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN11YVJdN6J-Zs0jMez2uRMDzMWyvUILao9A&usqp=CAU',
        calories: 375,
      },
      {
        name: 'Norilsk Nickel',
        avatar: 'https://logosklad.ru/photo/logos/521/1469030052.jpg',
        calories: 392,
      },
      {
        name: 'Microsoft',
        avatar: 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-65e040f40fbf04601dc75759bec78b99.png',
        calories: 408,
      },
      {
        name: 'Donut',
        calories: 452,
      },
      {
        name: 'KitKat',
        calories: 518,
      },
      {
        name: 'Qwewr',
        calories: 518,
      },
      {
        name: 'Ppoiupoiu',
        calories: 518,
      },
      
    ],
  })
}
</script>

<style lang="css" scoped>

</style>


