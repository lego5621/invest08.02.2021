<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        lg="10"
        xl="6"
        offset-lg="1"
        offset-xl="4"
      >
        <v-container class="pa-0">
          <v-row class="mt-5 mb-16">
              <v-col cols="12" lg="4" > 
                  <v-sheet min-height="200px" color="specialColor" class="rounded-xl"> 
                    <v-row>
                        <v-col cols="12" class="d-flex flex-column align-center"> 
                          <v-avatar size="200">
                            <img
                              v-if="1"
                              src="https://cdn.vuetifyjs.com/images/john.jpg"
                              alt="John"
                            >
                            <v-icon
                              v-else
                              size="150"
                            >mdi-account</v-icon>
                          </v-avatar>
                          <p class="mt-5 mb-1 text-h6">{{ lastname }} {{ firstname }}</p>
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
                            label="Имя"
                            required
                        ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        >
                        <v-text-field
                          v-model="lastname"
                          label="Фамилия"
                          required
                        ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        >
                        <v-text-field
                          v-model="email"
                          label="E-mail"
                          required
                        ></v-text-field>
                        </v-col>
                        <v-col
                        cols="12"
                        >
                        <v-text-field
                          v-model="password"
                          label="Пароль"
                          required
                          :type="show ? 'text' : 'password'"
                          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="show = !show"
                        ></v-text-field>
                        </v-col>
                        <!-- <v-btn
                          color="blue lighten-1"
                          class="white--text"
                          elevation="0"
                        >
                        Сохранить
                        </v-btn> -->
                        <v-dialog
                          v-model="dialog"
                          width="500"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              color="blue lighten-1"
                              dark
                              v-bind="attrs"
                              v-on="on"
                            >
                              Сохранить
                            </v-btn>
                          </template>

                          <v-card>
                            <v-card-title class="text-h5  lighten-2">
                              Ошибка
                            </v-card-title>

                            <v-card-text>
                              Это тестовый аккаунт, вы не можете изменить данные, свяжитесь с администратором.
                            </v-card-text>


                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn
                                color="primary"
                                text
                                @click="dialog = false"
                              >
                                Закрыть
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
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
import jwt_decode from "jwt-decode";
  export default {
    components:{

    },
    name: 'Settings',
    data: () => ({
      dialog: false,


      show: false,
      valid: false,
      firstname: '',
      lastname: '',
      password:'',
      email: '',
      nameRules: [
        v => !!v || 'Имя не корректно',
        v => v.length <= 20 || 'Имя должно быть менее 20 символов',
      ],
      emailRules: [
        v => !!v || 'Почта не корректна',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    
    created: function () {
      let user = jwt_decode(localStorage.getItem("Token"))
      this.firstname = user.firstname
      this.lastname = user.lastname
      this.email = user.email
    }
  }
</script>

<style lang="css" scoped>

</style>


