<template>
  <v-card
    rounded="lg"
    class="mx-auto mb-5 "
    elevation="0"
  >
  <v-list-item three-line> 
    <v-list-item-content >
      <div class=" mt-2 mb-2" >
        <p class="text-h5 mb-2">Резюме:</p>
        <p class="tab15px mb-2">Lorem ipsum dolor sit amet,  consectetur  <a href="#debit"  class="text-decoration-none textLinkResult--text ">inciderint</a> adipisicing elit. At ducimus nisi necessitatibus. Maiores  veritatis pariatur, quaerat suscipit officia animi facere nemo nobis impedit ipsum odio quae neque consectetur placeat. Officiis?</p>
  
        <p  class="tab15px  mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci officiis accusantium voluptatibus magnam perspiciatis sit <a href="#income" class="text-decoration-none  textLinkResult--text">inciderint</a> a mollitia hic dicta vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ducimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, alias.</p>
         
        <p  class="tab15px  mb-2"> Lorem ipsum <a href="#" class="text-decoration-none  textLinkResult--text">inciderint</a> dolor sit, amet consectetur <a href="#" class="text-decoration-none  textLinkResult--text"> inciderint</a> adipisicing elit. Itaque, veniam facilis dolores vitae suscipit sequi enim officiis aut. Quo soluta vel excepturi <a href="#" class="text-decoration-none  textLinkResult--text">inciderint</a> cumque perferendis perspiciatis?</p>
       
      </div>
      <div class="d-flex justify-space-between text-no-wrap overflow mt-2 mb-2" > 
        <v-btn
          rounded
          elevation="0"
          small
          class="mr-5"
        >
          Новости
        </v-btn>
        <v-btn
          rounded
          elevation="0"
          small
          class="mr-5"
        >
          Сайт компании
        </v-btn>
        <v-btn
          rounded
          elevation="0"
          small
          class="mr-5"
        >
          Отчетность
        </v-btn>
        <v-btn
          rounded
          elevation="0"
          small
        >
          В портфель
        </v-btn>
      </div>
    </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>

  export default {
    name: 'Result',
    data: () => ({
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
        selector: '#debit'
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
  .chip{
    padding: 1px 4px; 
    border-radius: 20px;
  }

  .font-size{
    font-size: 16px !important
  }
</style>


