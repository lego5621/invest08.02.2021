<template>
 <v-container class="pa-0">
    <v-card
        rounded="lg"
        class="mx-auto mb-5 "
        elevation="0"
        v-for="(idea, i) in ideas"
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
                    v-if="idea.avatar"
                    alt="Avatar"
                    :src= idea.avatar
                  >
                  <v-icon
                    v-else
                  >mdi-account</v-icon>
              </v-list-item-avatar>
              <strong class="subtitle-1">{{ idea.name }}</strong>   
            </div>
            <strong class="align-self-center mr-10 subtitle-1">{{ idea.profit }} за {{ idea.tameProfit }} дня</strong>
            <strong class="align-self-center mr-10 subtitle-1">{{ idea.price }}</strong>
             <div class="align-self-center">
              <v-rating
                background-color="grey darken-1"
                color="textLinkResult"
                length="5"
                :value=idea.rating
                readonly
              ></v-rating>
            </div>
          </div>
          <v-list-item-title class="headline text-wrap mb-2">
            <strong>{{ idea.company }}</strong>: <strong>{{ idea.heading }}</strong>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{idea.text}}
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
        ideas: [
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Ivan Ivanov',
            company:"Schweizerische Nationalbank",
            profit: '12%',
            tameProfit:'62',
            price:'Краткосрочная',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            rating: 2,
          },
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Averyanov Oleg',
            company:"Yandex",
            profit: '12%',
            tameProfit:'62',
            price:'Долгосрочная',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            rating: 3,
          },
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Averyanov Oleg',
            company:"Мосбиржа",
            profit: '12%',
            tameProfit:'62',
            price:'Долгосрочная',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            rating: 5,
          },
          {
            name: 'Averyanov Oleg',
            company:"Schweizerische Nationalbank",
            profit: '12%',
            tameProfit:'62',
            price:'Краткосрочная',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            rating: 4,
          },
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Averyanov Oleg',
            company:"Alaska Air Group Inc",
            profit: '12%',
            tameProfit:'62',
            price:'Краткосрочная',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            rating: 3,
          },
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Averyanov Oleg',
            company:"Yandex",
            profit: '12%',
            tameProfit:'62',
            price:'Краткосрочная',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            rating: 1,
          },
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Averyanov Oleg',
            company:"Norilsk Nickel",
            profit: '12%',
            tameProfit:'62',
            price:'Долгосрочная',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            rating: 5,
          },
          {
            avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
            name: 'Averyanov Oleg',
            company:"Microsoft",
            profit: '12%',
            tameProfit:'62',
            price:'Долгосрочная',
            heading: 'Discover the innovative world of Apple and shop everything iPhone',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur perspiciatis recusandae, ad delectus eos vel necessitatibus totam voluptas modi excepturi asperiores vero, eaque animi dolor voluptates praesentium, unde accusantium.',
            rating: 4,
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
