<template>
  <v-card
    rounded="lg"
    class="mb-8 pr-4 pl-4 bacMain maxHeight"
    elevation="0"
  >
  <vuescroll :ops="ops">
    <v-row>
      <v-col cols="12" sm="6" class="pa-3 mb-5 bacMain">
        <div class="sticky bacMain">
          <p class="text-h5 font-weight-medium">
            <v-icon size="50" class="mr-2" > mdi-arrow-top-right</v-icon>
            Факты за покупку
          </p>
        </div>
        <p class="mb-2 mt-2">
          «Газпром» располагает самыми большими запасами природного газа в мире. Его доля в мировых запасах составляет 17 %, в российских — 72 %.
        </p>
        <p class="mb-2 mt-2">
          Стратегическими регионами добычи газа на долгосрочную перспективу являются полуостров Ямал, Восточная Сибирь
        </p>
        <p class="mb-2 mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laborum. Beatae tenetur autem quibusdam enim.
        </p>
        <p class="mb-2 mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laborum. Beatae tenetur autem quibusdam enim.
        </p>
        <p class="mb-2 mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laborum. Beatae tenetur autem quibusdam enim.
        </p>
        <p class="mb-2 mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laborum. Beatae tenetur autem quibusdam enim.
        </p>
        <p class="mb-2 mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laborum. Beatae tenetur autem quibusdam enim.
        </p>
      </v-col>

      <v-col cols="12" sm="6"  class="pa-2 mt-5 mt-sm-0">
        <div class="sticky bacMain">
            <p class="text-h5 font-weight-medium"> 
            <v-icon size="50" class="mr-2"> mdi-arrow-bottom-right</v-icon>
            Факты против покупки
        </p>
        </div>
        <p class="mb-2 mt-2">
          Компания имеет <span class="goodAnalysis">Нейтральный инвестиционный рейтинг</span>, риск банкротства не велик, компания хорошо поддаются анализу а прогнозы относительно точные
        </p> 
        <p  class="mb-2 mt-2"> 
          Однако компании с данным рейтингом более подвержены влиянию различных неблогоприятных факторов.
        </p>
        <p  class="mb-2 mt-2"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime debitis adipisci commodi dolorum doloremque.
        </p>
        <p  class="mb-2 mt-2"> 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit eos nesciunt quibusdam.
        </p>
        <p class="mb-2 mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, laborum. Beatae tenetur autem quibusdam enim.
        </p>
      </v-col>
    </v-row>
  </vuescroll>
  </v-card>
</template>
  
<script>
import vuescroll from 'vuescroll';

 export default {
  components: {
    vuescroll
  },

  computed: {

  },

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
        onlyShowBarOnScroll: false,
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
  }),
}
</script>

<style lang="css" scoped>

  .maxHeight{
    height: 400px;
    overflow-y: hidden;
  }

  .maxHeight2{
    height: auto;
  }

  .sticky{
    position: sticky;
    top: 0;
  }

  @media only screen and (max-width: 657px)  {
    .maxHeight{
      max-height: 600px;
      overflow-x: hidden;
    }
  }

</style>


