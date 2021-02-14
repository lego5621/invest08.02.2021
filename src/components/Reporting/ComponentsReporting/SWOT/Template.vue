<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        lg="10"
        xl="8"
        offset-lg="1"
        offset-xl="2"
      >
        <v-container class="pa-0">
            <Description/>
            <Card/>
            <Footer/>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Footer from '@/components/Footer'
import Card from '@/components/Reporting/ComponentsReporting/SWOT/Card'
import Description from '@/components/Reporting/ComponentsReporting/SWOT/Description'

  export default {
    components:{
      Footer,
      Card,
      Description,
    },
    name: 'Analysis',
    data: () => ({
      expand: false,
    }),
  }
</script>

<style lang="css" scoped>

</style>


