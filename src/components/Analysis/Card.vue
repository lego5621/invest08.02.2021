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
          <div class="">
            <v-list-item-avatar
                size="42"
            >
                <img
                    alt="Avatar"
                    :src= message.avatar
                >
            </v-list-item-avatar>
            <strong v-html="message.name"></strong>   
          </div>
          <v-list-item-title class="headline text-wrap mb-2">
            <strong v-html="message.company"></strong>: <strong v-html="message.heading"></strong>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{message.title}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
  
      <v-card-text  class="d-flex justify-space-between flex-wrap ">  
        <strong v-html="message.time" class="align-self-center"></strong>   
        <v-rating
          background-color="grey darken-1"
          color="purple"
          length="5"
          :value=message.rating
          readonly
        ></v-rating>
        
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
            name: 'Averyanov Oleg',
            company: 'Газпром',
            heading: 'Газ дорожает, Европа беднеет',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            time:'27.06.2023',
            rating: 3,
          },
           {
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            name: 'Ivan Ivanov',
            company: 'Apple',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            time:'23.04.2023',
            rating: 4,
          },
           {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Dave Djonson',
            company: 'Лукоил',
            heading: 'Обзор и мнение отчетности за 4 периуд',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            time:'01.01.2023',
            rating: 2,
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            name: 'Ivan Ivanov',
            company: 'Apple',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            time:'23.04.2023',
            rating: 1,
          },
           {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Dave Djonson',
            company: 'Лукоил',
            heading: 'Обзор и мнение отчетности за 4 периуд',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            time:'01.01.2023',
            rating: 4,
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            name: 'Ivan Ivanov',
            company: 'Apple',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            time:'23.04.2023',
            rating: 5,
          },
           {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Dave Djonson',
            company: 'Лукоил',
            heading: 'Обзор и мнение отчетности за 4 периуд',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            time:'01.01.2023',
            rating: 2,
          },
          
        ],

    }),
  }
</script>

<style lang="css" scoped>

</style>
