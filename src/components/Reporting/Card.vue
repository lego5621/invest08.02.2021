<template>
 <v-container class="pa-0">
    <v-card
        rounded="lg"
        class="mx-auto mb-5 "
        elevation="0"
        v-for="(message, i) in messages"
        :key="i"
    >
      <v-list-item three-line> 
        <v-list-item-content >
          <div class="d-flex justify-space-between text-no-wrap overflow" >
            <router-link to="/single" class="block mr-10 ">
                <v-list-item-avatar
                  size="42"
                  class="ml-0"
                >
                  <img
                      v-if="message.avatar"
                      alt="Avatar"
                      :src= message.avatar
                    >
                    <v-icon
                      v-else
                    >mdi-domain</v-icon>
                </v-list-item-avatar>
                <strong class="subtitle-1" >{{ message.name }}</strong>   
            </router-link>
            <strong class="align-self-center mr-10 subtitle-1">{{ message.excerpt }}</strong>
            <strong class="align-self-center mr-10 subtitle-1">{{ message.title }}</strong>
            <strong class="align-self-center subtitle-1">{{ message.price }}</strong>
          </div>
          <v-list-item-title class="headline mb-2">
             <v-simple-table dense >
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">
                      P/E
                    </th>
                    <th class="text-center">
                      P/B
                    </th>
                    <th class="text-center">
                      P/FCF
                    </th>
                    <th class="text-center">
                      P/S
                    </th>
                    <th class="text-center">
                      L/A
                    </th>
                    <th class="text-center">
                      ROS
                    </th>
                    <th class="text-center">
                      ROE
                    </th>
                    <th class="text-center">
                      ROA
                    </th>
                    <th class="text-center">
                     EV/EBIT
                    </th>
                    <th class="text-center">
                      NetDebt/EBIT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                    class="text-center"
                  >

                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-list-item-title>

        </v-list-item-content>
      </v-list-item>
  
      <v-card-text  class="d-flex justify-space-between ">  

      </v-card-text>
    </v-card>

</v-container >
</template>

<script>
  export default {
    name: 'Card_Analysis',
    
    data: () => ({
        messages: [
          {
            avatar: 'https://turbologo.ru/blog/wp-content/uploads/2020/02/gazprom-znak.png.webp',
            name: 'Газпром',
            title: 'Нефте газ',
            excerpt: 'Россия',
            price:'42$'
          },
          {
            avatar: 'https://www.angi.ru/userfiles/image/lukoil_1(1).jpg',
            name: 'Лукоил',
            title: 'Нефте газ',
            excerpt: 'Россия',
            price:'42$'
          },
          {
            avatar: 'https://smart-lab.ru/uploads/articles/00/19/10/thumbnail.png',
            name: 'Мосбиржа',
            title: 'Банковский сектор',
            excerpt: 'Россия',
            price:'42$'
          },
          {
          
            name: 'Schweizerische Nationalbank',
            title: 'Банковский сектор',
            excerpt: 'Швеция',
            price:'42$'
          },
          {
            avatar: 'https://static.wixstatic.com/media/7ad5cb_ff5933713c67476391db39f11faf8213.jpg',
            name: 'Alaska Air Group Inc',
            title: 'Аэропорт',
            excerpt: 'Америка',
            price:'98$'
          },
          {
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN11YVJdN6J-Zs0jMez2uRMDzMWyvUILao9A&usqp=CAU',
            name: 'Yandex',
            title: 'IT',
            excerpt: 'Россия',
            price:'32$'
          },
          {
            avatar: 'https://logosklad.ru/photo/logos/521/1469030052.jpg',
            name: 'Norilsk Nickel',
            title: 'Добыча',
            excerpt: 'Россия',
            price:'8$'
          },
          {
            avatar: 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-65e040f40fbf04601dc75759bec78b99.png',
            name: 'Microsoft',
            title: 'IT',
            excerpt: 'Америка',
            price:'12$'
          },
        ],
        desserts: [
          {
            calories: 159,
          },
        ],
    }),
  }
</script>

<style lang="css" scoped>
  tr:hover{
    background: none !important;
  }
  .overflow{
    overflow-x: auto;
  }

</style>
