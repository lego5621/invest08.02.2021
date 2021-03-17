import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {dark:true,
    themes: { 
      light: {
        bacMain: "#FFFFFF",
        footBac: "#FFFFFF",
        textLink: "#4E4E4E",
        textLinkResult: "#1465b5",
        specialColor: "#F2F5F7",
        buttonsColor: "#75b5e6",
        alertColor: "#FFFFFF",
        chipColor: "#E9ECEE",
      },
      dark: {
        bacMain: "#181A1B",
        footBac: "#1E1E1E",
        textLink: "#F8F8F8",
        textLinkResult: "#1465b5",
        specialColor: "#1E2022",
        buttonsColor: "#115a91",
        alertColor: "#1E2022",
        chipColor: "#303233",
      },
    },
  },
  })
