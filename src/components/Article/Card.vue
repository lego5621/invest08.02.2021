<template>
 <v-container class="pa-0">
    <v-card
        rounded="xl"
        class="mx-auto mb-5  specialColor"
        elevation="0"
        v-for="(article, i) in articles"
        :key="i"
        outlined
    >
      <v-list-item three-line> 
        <v-list-item-content>
          <div class="d-flex justify-space-between text-no-wrap overflow">
            <div class="mr-10">
              <v-list-item-avatar
                  size="42"
              >
                <img
                    v-if="article.avatar"
                    alt="Avatar"
                    :src= article.avatar
                  >
                  <v-icon
                    v-else
                  >mdi-account</v-icon>
              </v-list-item-avatar>
              <strong class="subtitle-1">{{ article.name }}</strong>   
            </div>
            <strong class="align-self-center mr-10 subtitle-1">{{ article.сategory }}</strong>
            <strong class="align-self-center mr-10 subtitle-1">{{ article.time }}</strong>
             <div class="align-self-center">
              <v-rating
                background-color="grey darken-1"
                color="textLinkResult"
                length="5"
                :value=article.rating
                readonly
              ></v-rating>
            </div>
          </div>
          <v-list-item-title class="headline text-wrap mb-2">
            <strong>{{ article.heading }}</strong>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{article.title}}
          </v-list-item-subtitle>

        </v-list-item-content>
      </v-list-item>
  
      <v-card-text  class="d-flex  flex-wrap">  
        <v-chip
          link
          class="ma-1"
          v-for="(tag) in article.tag"
          :key="tag"
          small
        >
          #{{ tag }}
        </v-chip> 

        
      </v-card-text>
    </v-card>

</v-container >
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

  export default {
    name: 'Card_Analysis',
    // computed: mapGetters(["allPosts"]),
    // methods: mapActions(["fetchPosts"]),
    // async mounted() {
    //   this.fetchPosts();
    // },
    data: () => ({
      title:["Пенсия", "Инвестиции", "Управление деньгами", "Бюджет", "Иследования","Право и Закон","Ведение бизнеса в Казахстане"],
        articles: [
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Averyanov Oleg',
            heading: 'Как досрочно снять пенсию',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium. fd asdfasdf asdf asdf asd fasdfasdfa ds fasdf asd fasd asdf asd fadsf ads fasd fasd fasdf asd fasdf asdf asdf adsf ',
            time:'27.06.2023',
            сategory: 'Частный инвестор',
            rating: 3,
            tag:["Пенсия", "Инвестиции", "Управление деньгами", "Бюджет"],
          },
           {
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            name: 'Ivan Ivanov',
            heading: 'Почему уже сейчас нужно инвестировать',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            time:'23.04.2023',
            сategory: 'Брокер',
            rating: 4,
            tag:[ "Бюджет"],
          },
           {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Dave Djonson',
            heading: 'Какие активы кроме акций и облигаций приобрести для пассивного дохода?',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            time:'01.01.2023',
            сategory: 'Частный инвестор',
            rating: 2,
            tag:["Пенсия", "Инвестиции", "Управление деньгами", "Бюджет", "Иследования","Право и Закон","Ведение бизнеса в Казахстане"],
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            name: 'Ivan Ivanov',
            heading: 'Инвестник. Зачем вам нужен скринер',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            time:'23.04.2023',
            сategory: 'Юрист',
            rating: 1,
            tag:["Пенсия", "Инвестиции", "Управление деньгами", "Бюджет"],
          },
           {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Dave Djonson',
            heading: 'Народный банк все еще платит щедрые дивиденды. Но баланс сил может быть нарушен',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            time:'01.01.2023',
            сategory: 'Предприниматель',
            rating: 4,
            tag:["Пенсия", "Инвестиции", "Бюджет", "Право и Закон","Ведение бизнеса в Казахстане"],
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            name: 'Ivan Ivanov',
            heading: 'Рестораны и карантин: как устроен бизнес Shake Shack',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            time:'23.04.2023',
            сategory: 'Пенсия',
            rating: 5,
            tag:["Управление деньгами", "Бюджет"],
          },
           {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Dave Djonson',
            heading: 'Куда вложить 30 миллионов Тенге?',
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            time:'01.01.2023',
            сategory: 'Инвестиции',
            rating: 2,
            tag:["Право и Закон","Ведение бизнеса в Казахстане"],
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