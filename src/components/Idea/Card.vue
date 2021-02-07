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
        <v-list-item-content>
          <div class="d-flex justify-space-between text-no-wrap overflow">
            <div class="mr-10">
              <v-list-item-avatar
                  size="42"
              >
                <img
                    v-if="message.avatar"
                    alt="Avatar"
                    :src= message.avatar
                  >
                  <v-icon
                    v-else
                  >mdi-account</v-icon>
              </v-list-item-avatar>
              <strong class="subtitle-1">{{ message.name }}</strong>   
            </div>
            <strong class="align-self-center mr-10 subtitle-1">{{ message.excerpt }}</strong>
            <strong class="align-self-center mr-10 subtitle-1">{{ message.price }}</strong>
             <div class="align-self-center">
              <v-rating
                background-color="grey darken-1"
                color="purple"
                length="5"
                :value=message.rating
                readonly
              ></v-rating>
            </div>
          </div>
          <!-- <div class="d-flex justify-space-around justify-sm-space-between flex-wrap mb-2">
            <div class="mr-4">
              <v-list-item-avatar
                  size="42"
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
              <strong v-html="message.name"></strong>   
            </div>
            <strong v-html="message.price" class="align-self-center mr-4"></strong>
            <strong v-html="message.excerpt" class="align-self-center mr-4"></strong>
            <div class="align-self-center">
              <v-rating
                background-color="grey darken-1"
                color="purple"
                length="5"
                :value=message.rating
                readonly
              ></v-rating>
            </div>
          </div> -->
          <v-list-item-title class="headline text-wrap mb-2">
            <strong v-html="message.name"></strong>: <strong v-html="message.heading"></strong>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{message.text}}
          </v-list-item-subtitle>

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
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Ivan Ivanov',
            title: 'Нефте газ',
            excerpt: '12% за 62 дня',
            price:'Бесплатно',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.'
          },
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Averyanov Oleg',
            title: 'Нефте газ',
            excerpt: '12% за 62 дня',
            price:'Бесплатно',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.'
          },
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Мосбиржа',
            title: 'Банковский сектор',
            excerpt: '12% за 62 дня',
            price:'Подписка',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.'
          },
          {
            name: 'Schweizerische Nationalbank',
            title: 'Банковский сектор',
            excerpt: '12% за 62 дня',
            price:'Бесплатно',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.'
          },
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Alaska Air Group Inc',
            title: 'Аэропорт',
            excerpt: '12% за 62 дня',
            price:'Бесплатно',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.'
          },
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Yandex',
            title: 'IT',
            excerpt: '12% за 62 дня',
            price:'Подписка',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.'
          },
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Norilsk Nickel',
            title: 'Добыча',
            excerpt: '12% за 62 дня',
            price:'Бесплатно',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.'
          },
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Microsoft',
            title: 'IT',
            excerpt: '12% за 62 дня',
            price:'Подписка',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.'
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
  .overflow{
    overflow-x: auto;
  }

</style>
