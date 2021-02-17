<template>
    <v-footer
        padless
        rounded="lg"
        outlined
        color="footBac"
    >
        <v-row
        justify="center"
        no-gutters
        color="grey darken-1"
        >
            <v-btn
            v-for="link in links"
            :key="link"
            text
            rounded
            class="my-2"
            color="grey darken-1"
            >
            {{ link }}
            </v-btn>
            <v-col
                class="py-4 text-center "
                cols="12"
                rounded="lg"
                color="grey darken-1"
            >
                {{ new Date().getFullYear() }} — <strong>Invest. All rights reserved.</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    
    data: () => ({
        links: [
            'Home',
            'About Us',
            'Team',
            'Blog',
            'Contact Us',
        ],
    }),
  }
</script>

<style lang="css" scoped>

</style>
