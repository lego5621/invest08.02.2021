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
            <v-row class="mt-5 mb-16">
                <v-col cols="12" lg="4" > 
                    <v-sheet min-height="200px" color="specialColor" class="rounded-xl"> 
                        <v-row>
                            <v-col cols="12" class="d-flex flex-column align-center"> 
                                 <v-avatar size="200">
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="John"
                                    >
                                </v-avatar>
                                <p class="mt-5 mb-1 text-h6">Аверьянов Олег</p>
                                <p class="mb-5 font-weight-thin">Частный инвестор</p>
                            </v-col>
                        </v-row>
                    </v-sheet>
                </v-col>
                <v-col cols="12" lg="8" class="pt-0"> 
                   <v-form v-model="valid">
                        <v-container>
                        <v-row>
                            <v-col
                            cols="12"
                            >
                            <v-text-field
                                v-model="firstname"
                                :rules="nameRules"
                                :counter="10"
                                label="Имя"
                                required
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            >
                            <v-text-field
                                v-model="lastname"
                                :rules="nameRules"
                                :counter="10"
                                label="Фамилия"
                                required
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            >
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                            ></v-text-field>
                            </v-col>
                            <v-col
                            cols="12"
                            >
                            <v-text-field
                                v-model="firstname"
                                :rules="nameRules"
                                label="Пароль"
                                required
                            ></v-text-field>
                            </v-col>
                            <v-btn
                                color="blue lighten-1"
                                class="white--text"
                                elevation="0"
                            >
                            Сохранить
                            </v-btn>
                        </v-row>
                        </v-container>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    components:{

    },
    name: 'Settings',
    data: () => ({
        valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>

<style lang="css" scoped>

</style>


