<template>
  <div>
    <h2>Registrarse</h2>
    <form @submit.prevent="register">
      <label for="firstName">Nombre</label>
      <input type="text" name="firstName" v-model="firstName" />
      <div v-if="errorFirstName" class="alert-warning mi-alert">
        {{ msgErrorFistName }}
      </div>

      <label for="lastName">Apellido</label>
      <input type="text" name="lastName" v-model="lastName" />
      <div v-if="errorLastName" class="alert-warning mi-alert">
        {{ msgErrorLastName }}
      </div>

      <label for="username">Username</label>
      <input type="text" name="username" v-model="username" />
      <div v-if="errorUsername" class="alert-warning mi-alert">
        {{ msgErrorUsername }}
      </div>

      <label for="email">Email</label>
      <input type="text" name="email" v-model="email" />
      <div v-if="errorEmail" class="alert-warning mi-alert">
        {{ msgErrorEmail }}
      </div>

      <label for="password">Contraseña</label>
      <input type="password" name="password" v-model="password" />
      <div v-if="errorPassword" class="alert-warning mi-alert">
        {{ msgErrorPassword }}
      </div>

      <input
        type="checkbox"
        name="admin"
        id="admin"
        value="true"
        v-model="adminMode"
      />
      <label for="admin">Administrador</label>

      <input type="submit" value="Registrarse" />
    </form>
    <button @click="toLogin">Ir a login</button>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: "RegisterApp",
  data() {
    return {
      firstName: "Juan",
      lastName: "Perez",
      email: "juanperez@prueba.com",
      password: "hola1234",
      username: "juan_perez",

      errorFirstName: false,
      errorLastName: false,
      errorEmail: false,
      errorPassword: false,
      errorUsername: false,

      msgErrorFistName: "",
      msgErrorLastName: "",
      msgErrorEmail: "",
      msgErrorPassword: "",
      msgErrorUsername: "",

      adminMode: false
    };
  },
  methods: {
    register() {
      (this.errorFirstName = false),
        (this.errorLastName = false),
        (this.errorEmail = false),
        (this.errorPassword = false);

      if (this.firstName == "") {
        this.errorFirstName = true;
        this.msgErrorFistName = "Ingrese su Nombre";
      } else {
        if (this.lastName == "") {
          this.errorLastName = true;
          this.msgErrorLastName = "Ingrese su apellido";
        } else {
          if (this.username == "") {
            this.errorUsername = true;
            this.msgErrorUsername = "Debe ingresar un nombre de usuario";
          } else {
            if (this.email == "") {
              this.errorEmail = true;
              this.msgErrorEmail = "Ingrese su email";
            } else {
              if (this.password == "") {
                this.errorPassword = true;
                this.msgErrorPassword = "Ingrese su contraseña";
              } else {
                if(this.adminMode) {
                  axios.post("https://626f7d59c508beec48844b22.mockapi.io/admins", {
                    "username": this.username,
                    "password": this.password
                  })
                  .then(alert('registro completo')) // mostrar un mejor mensaje
                .then(this.$store.dispatch("toLogin"))
                } else {
                  axios.post("https://626f7d59c508beec48844b22.mockapi.io/usuarios", {
                  "firstName": this.firstName,
                  "lastName": this.lastName,
                  "username": this.username,
                  "email": this.email,
                  "password": this.password
                })
                .then(alert('registro completo')) // mostrar un mejor mensaje
                .then(this.$store.dispatch("toLogin"))
                }
              }
            }
          }
        }
      }
    },
    toLogin() {
      this.$store.dispatch("toLogin");
    },
  },
};
</script>

<style></style>
