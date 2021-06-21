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
                              v-if="0"
                              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
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
import jwt_decode from "jwt-decode";
  export default {
    components:{

    },
    name: 'Settings',
    data: () => ({
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


