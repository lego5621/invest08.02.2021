import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {dark:true,
    themes: { 
      light: {
        bacMain: "#E0E0E0",
        footBac: "#FFFFFF",
        textLink: "#4E4E4E",
        textLinkResult: "#1465b5",
      },
      dark: {
        bacMain: "#121212",
        footBac: "#1E1E1E",
        textLink: "#F8F8F8",
        textLinkResult: "#1465b5",
      },
    },
  },
  })
