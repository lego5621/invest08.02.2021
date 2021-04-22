<template>
<div>
    <v-row 
      class="hig100"
    >
      <v-col
        cols="12"
        md="6"
        class="d-flex align-content-center flex-wrap"
      >
        <div class="title">
          <p class="text-right text-h3">
            Invesco
          </p>
          <p class="text-right">
            Мы помогаем делать прибыльные инвестиции.
          </p>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="bacMain d-flex align-content-center flex-wrap"
      >
        <v-sheet
          color="specialColor"
          elevation="3"
          class="formLogin rounded-xl  "
        >
          <form class="login" @submit.prevent="login">
            <h1>Войдите в систему</h1>
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
            <v-btn
              elevation="0"
              color="specialColor"
              href="#reg"
            >
              Регистрация
            </v-btn>
          </form>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class="hig100">
      <v-col>
        <p class="text-h3">
          Lorem ipsum dolor sit amet.
        </p>
      </v-col>
    </v-row>
     <v-row 
      class="hig100"
      id="reg"
    >
      <v-col
        cols="12"
        md="6"
        class="d-flex align-content-center flex-wrap"
      >

      </v-col>
      <v-col
        cols="12"
        md="6"
        class="bacMain d-flex align-content-center flex-wrap"
      
      >
        <v-sheet
          color="specialColor"
          elevation="3"
          class="formLogin rounded-xl  "
        >
          <form @submit.prevent="register">
            <h1>Регистрация</h1>
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
              v-model="password1"
              label="Пароль"
              required
              :type="show1 ? 'text' : 'password'"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-text-field
              v-model="password2"
              label="Повторите пароль"
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
    </v-row>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        show1: false,
        email : "",
        password : "",

        firstname : "",
        lastname : "",
        regemail : "",
        password1: "",
        password2: "",
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
        let data = {
          username: this.firstname,
          // lastname: this.lastname,
          email: this.regemail,
          password1: this.password1,
          password2: this.password2,
        }
        this.$store.dispatch('register', data)
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    }
  }
</script>

<style lang="css" scoped>
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
