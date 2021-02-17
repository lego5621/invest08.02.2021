<template>
 <v-container class="pa-0">
    <v-card
        rounded="lg"
        class="mx-auto mb-5 pb-3"
        elevation="0"
        v-for="(message, i) in messages"
        :key="i"
    >
      <v-list-item three-line> 
        <v-list-item-content >
          <router-link to="/single" class="block mr-10 text-decoration-none textLink--text overflow">
            <div class="d-flex justify-space-between text-no-wrap" >
              <div to="/single" class="block mr-10 text-decoration-none textLink--text">
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
                  <strong class="subtitle-1 ">{{ message.name }}</strong>   
              </div>
              <strong class="align-self-center mr-10 subtitle-1">{{ message.excerpt }}</strong>
              <strong class="align-self-center mr-10 subtitle-1">{{ message.title }}</strong>
              <strong class="align-self-center subtitle-1">{{ message.price }}</strong>
            </div>
          </router-link>
          <v-list-item-title class="text-wrap mb-2">
            {{message.text}}
          </v-list-item-title>

        </v-list-item-content>
      </v-list-item>
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
            title: 'Материалы',
            excerpt: 'Россия',
            price:'42$',
            text:'ПАО «Газпро́м» — российская транснациональная энергетическая компания, более 50 % акций которой принадлежит государству. Является холдинговой компанией Группы «Газпром». Непосредственно ПАО «Газпром» осуществляет только продажу природного газа и сдаёт в аренду свою газотранспортную систему.',
          },
          {
            avatar: 'https://www.angi.ru/userfiles/image/lukoil_1(1).jpg',
            name: 'Лукоил',
            title: 'Материалы',
            excerpt: 'Россия',
            price:'42$',
            text:'ПАО «Лукойл» — российская нефтяная компания. Официальное название — ПАО «Нефтяная компания „Лукойл“» Наименование компании происходит от первых букв названий городов нефтяников и слова «ойл». Вторая после «Газпрома» по объёмам выручки компания в России.',
          },
          {
            avatar: 'https://smart-lab.ru/uploads/articles/00/19/10/thumbnail.png',
            name: 'Мосбиржа',
            title: 'Финансы',
            excerpt: 'Россия',
            price:'42$',
            text:'Крупнейший российский биржевой холдинг, созданный в 2011 году в результате слияния ММВБ (Московской межбанковской валютной биржи), основанной в 1992 году, и биржи РТС (Российской торговой системы), открытой в 1995 году. Московская биржа является организатором торгов акциями, облигациями, производными инструментами, валютой, инструментами денежного рынка, драгоценными металлами, зерном и сахаром.',
          },
          {
          
            name: 'Schweizerische Nationalbank',
            title: 'Финансы',
            excerpt: 'Швеция',
            price:'42$',
            text:'Национальный банк Швейцарии — центральный банк Швейцарии. Название банка на официальных языках Швейцарии: нем. Schweizerische Nationalbank, фр. Banque Nationale Suisse, итал. Banca Nazionale Svizzera, романш. Banca Naziunala Svizra',
          },
          {
            avatar: 'https://static.wixstatic.com/media/7ad5cb_ff5933713c67476391db39f11faf8213.jpg',
            name: 'Alaska Air Group Inc',
            title: 'Транспорт',
            excerpt: 'Америка',
            price:'98$',
            text:'Американский авиационный холдинг со штаб-квартирой в Ситэке, пригород Сиэтла (Вашингтон), владеющий двумя сертифицированными коммерческими авиаперевозчиками: магистральной авиакомпанией Alaska Airlines и региональной авиакомпанией Horizon Air.',
          },
          {
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN11YVJdN6J-Zs0jMez2uRMDzMWyvUILao9A&usqp=CAU',
            name: 'Yandex',
            title: 'IT-сектор',
            excerpt: 'Россия',
            price:'32$',
            text:'Я́ндекс» (англ. «Yandex»)— российская транснациональная компания в отрасли информационных технологий, чьё головное юридическое лицо зарегистрировано в Нидерландах, владеющая одноимённой системой поиска в интернете, интернет-порталом и веб-службами в нескольких странах. Наиболее заметное положение занимает на рынках России, Белоруссии и Казахстана.',
          },
          {
            avatar: 'https://logosklad.ru/photo/logos/521/1469030052.jpg',
            name: 'Norilsk Nickel',
            title: 'Материалы',
            excerpt: 'Россия',
            price:'8$',
            text:'«ПАО «Норникель» — российская горно-металлургическая компания. В настоящее время «Норникель» объединяет группу предприятий, возглавляемую Публичным акционерным обществом "Горно-металлургическая компания «Норильский никель»',
          },
          {
            avatar: 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-65e040f40fbf04601dc75759bec78b99.png',
            name: 'Microsoft',
            title: 'IT',
            excerpt: 'Америка',
            price:'12$',
            text:'Ма́йкрософт — одна из крупнейших транснациональных компаний по производству проприетарного программного обеспечения для различного рода вычислительной техники — персональных компьютеров, игровых приставок, КПК, мобильных телефонов и прочего',
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
