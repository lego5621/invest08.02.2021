<template>
<div>
    <v-row 
      class="hig100"
      no-gutters
    >
      <v-col
        cols="12"
        md="6"
        class="d-flex align-content-center flex-wrap pr-1"
      >
        <div class="title">
          <p class="text-center text-md-right text-h3">
            Invesco
          </p>
          <p class="text-center text-md-right">
            Мы помогаем делать прибыльные инвестиции.
          </p>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="bacMain d-flex align-content-center justify-center justify-md-start flex-wrap pl-1"
      >
        <v-sheet
          color="specialColor"
          elevation="3"
          class="formLogin rounded-xl  "
        >
          <form class="login" @submit.prevent="login">
            <h1>Войдите в систему</h1>
            <v-alert
              text
              type="error"
              rounded="xl"
               v-if="this.$store.state.auth.status"
            >
              Неверный логин или пароль
            </v-alert>
            <v-text-field
              v-model="email"
              label="Электроная почта"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Пароль"
              required
              :type="show1 ? 'text' : 'password'"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-btn
              elevation="0"
              type="submit"
              color="specialColor"
            >
              Войти
            </v-btn>
            <!-- <v-btn
              elevation="0"
              color="specialColor"
              href="#reg"
            >
              Регистрация
            </v-btn> -->
          </form>
        </v-sheet>
      </v-col>
    </v-row>
    <!-- <v-row class="hig100"       no-gutters>
      <v-col
        cols="8"
        lg="8"
        xl="8"
        offset-lg="1"
        offset-xl="2"
      >
        <v-tabs>
          <v-tab>Item One</v-tab>
          <v-tab>Item Two</v-tab>
          <v-tab>Item Three</v-tab>
        </v-tabs>
      </v-col>
    </v-row> -->
     <!-- <v-row 
      class="hig100"
      id="reg"
      no-gutters
    > 
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column justify-center align-center align-md-end pr-2"
      >
      <p class="text-h5">При регистрации вы соглашаетесь с :</p>
        <a href="#" class="text-h6 textLinkResult--text underline mt-2"><v-icon>mdi-link</v-icon> Пользовательским соглашением</a>
        <a href="#" class="text-h6 textLinkResult--text underline  mt-2"><v-icon>mdi-link</v-icon> Условиями использования</a>
        <a href="#" class="text-h6 textLinkResult--text underline  mt-2"><v-icon>mdi-link</v-icon> Политикой цен</a>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="bacMain d-flex align-content-center justify-center justify-md-start flex-wrap pl-2"
      >
        <v-sheet
          color="specialColor"
          elevation="3"
          class="formLogin rounded-xl  "
        >
          <form @submit.prevent="register">
            <h1>Регистрация</h1>
            <v-alert
              text
              type="error"
              rounded="xl"
               v-if="this.$store.state.auth.status_reg"
            >
              Данные заполнены неверно.
            </v-alert>
            <v-text-field
              v-model="firstname"
              label="Имя"
              required
            ></v-text-field>
            <v-text-field
              v-model="lastname"
              label="Фамилия"
              required
            ></v-text-field>
            <v-text-field
              v-model="regemail"
              label="Электроная почта"
              required
            ></v-text-field>
            <v-text-field
              v-model="passwordReg"
              label="Пароль"
              required
              :type="show1 ? 'text' : 'password'"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-btn
              type="submit"
              elevation="0"
              color="specialColor"
            >
              Регистрация
            </v-btn>
          </form>
        </v-sheet>
      </v-col>
    </v-row>-->
  </div>
</template>
<script>
  export default {

    data(){
      return {
        show1: false,
        email : "",
        password : "",
        passwordReg : "",

        firstname : "",
        lastname : "",
        regemail : "",
      }
    },
    methods: {
      login: function () {
        let email = this.email 
        let password = this.password
        this.$store.dispatch('login', { email, password })
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      },
      register: function () {
        let user = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.regemail,
          password: this.passwordReg,
        }
        this.$store.dispatch('register', user)
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    }
  }
</script>

<style lang="css" scoped>
  .underline{
    border-bottom: 1px dashed #000080;
  }

  .formLogin{
    width: 400px;
    padding: 20px;
  }
  .hig94{
    min-height: 94vh;
  }
  .hig100{
    min-height: 100vh;
  }
  .title{
    width: 100%;
  }
</style>
