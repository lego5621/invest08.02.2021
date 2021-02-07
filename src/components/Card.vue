<template>
 <v-container >
      <v-row >
        <v-expansion-panels accordion flat>
          <v-expansion-panel
            v-for="(message, i) in messages"
            :key="i"
            hide-actions
          >
            <v-expansion-panel-header>
              <v-row
                align="center"
                class="spacer"
                no-gutters 
              >
                <v-col
                  cols="4"
                  sm="2"
                  md="1"
                >
                  <v-avatar
                    size="46px"
                  >
                    <img
                      v-if="message.avatar"
                      alt="Avatar"
                      :src= message.avatar
                    >
                    <v-icon
                      v-else
                    >mdi-domain</v-icon>
                  </v-avatar>
                </v-col>
  
                <v-col
                  sm="5"
                  md="4"
                  class=" text-truncate"
                >
                  <strong v-html="message.name"></strong>
                </v-col>
  
                <v-col
                  class="text-no-wrap hidden-xs-only "
                  cols="4"
                  sm="3"
                >
                  <strong v-html="message.title"></strong>
                </v-col>
  
                <v-col
                   class="grey--text text-truncate hidden-sm-and-down text-center"
                >
                  {{ message.excerpt }}
                </v-col>
                <v-col
                  class="text-truncate  text-right"
                >
                  {{ message.price }}
                </v-col>
              </v-row>
            </v-expansion-panel-header>
  
            <v-expansion-panel-content rounded="lg">
              <v-card-text v-text="lorem"></v-card-text>
              <v-divider></v-divider>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'Card',
    data: () => ({
          messages: [
          {
            avatar: 'https://turbologo.ru/blog/wp-content/uploads/2020/02/gazprom-znak.png.webp',
            name: 'Газпром',
            title: 'Нефте газ',
            excerpt: 'B',
            price:'42$'
          },
          {
            avatar: 'https://www.angi.ru/userfiles/image/lukoil_1(1).jpg',
            name: 'Лукоил',
            title: 'Нефте газ',
            excerpt: 'BBB',
            price:'42$'
          },
          {
            avatar: 'https://smart-lab.ru/uploads/articles/00/19/10/thumbnail.png',
            name: 'Мосбиржа',
            title: 'Банковский сектор',
            excerpt: 'A',
            price:'42$'
          },
          {
          
            name: 'Schweizerische Nationalbank',
            title: 'Банковский сектор',
            excerpt: 'BB',
            price:'42$'
          },
          {
            avatar: 'https://static.wixstatic.com/media/7ad5cb_ff5933713c67476391db39f11faf8213.jpg',
            name: 'Alaska Air Group Inc',
            title: 'Аэропорт',
            excerpt: 'AA',
            price:'98$'
          },
          {
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN11YVJdN6J-Zs0jMez2uRMDzMWyvUILao9A&usqp=CAU',
            name: 'Yandex',
            title: 'IT',
            excerpt: 'A',
            price:'32$'
          },
          {
            avatar: 'https://logosklad.ru/photo/logos/521/1469030052.jpg',
            name: 'Norilsk Nickel',
            title: 'Добыча',
            excerpt: 'AAA',
            price:'8$'
          },
          {
            avatar: 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-65e040f40fbf04601dc75759bec78b99.png',
            name: 'Microsoft',
            title: 'IT',
            excerpt: 'AAB',
            price:'12$'
          },
        ],
    lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri.',
    }),
  }
</script>

<style lang="scss" scoped>

</style>

