<template>
  <div class="mt-5">
    <h2>Registrarse</h2>
    <form @submit.prevent="register" class="card w-25 mx-auto d-flex flex-column">
      <label for="firstName" class="w-50 mx-auto mt-3">Nombre</label>
      <input type="text" name="firstName" v-model="firstName" class="w-50 mx-auto" />
      <div v-if="errorFirstName" class="alert-warning mi-alert w-75 mx-auto">
        {{ msgErrorFistName }}
      </div>

      <label for="lastName" class="w-50 mx-auto mt-3">Apellido</label>
      <input type="text" name="lastName" v-model="lastName" class="w-50 mx-auto" />
      <div v-if="errorLastName" class="alert-warning mi-alert w-75 mx-auto">
        {{ msgErrorLastName }}
      </div>

      <label for="username" class="w-50 mx-auto mt-3">Username</label>
      <input type="text" name="username" v-model="username" class="w-50 mx-auto" />
      <div v-if="errorUsername" class="alert-warning mi-alert w-75 mx-auto">
        {{ msgErrorUsername }}
      </div>

      <label for="email" class="w-50 mx-auto mt-3">Email</label>
      <input type="text" name="email" v-model="email" class="w-50 mx-auto" />
      <div v-if="errorEmail" class="alert-warning mi-alert w-75 mx-auto">
        {{ msgErrorEmail }}
      </div>

      <label for="password" class="w-50 mx-auto mt-3">Contraseña</label>
      <input type="password" name="password" v-model="password" class="w-50 mx-auto" />
      <div v-if="errorPassword" class="alert-warning mi-alert w-75 mx-auto">
        {{ msgErrorPassword }}
      </div>

      <div class="w-50 mx-auto mt-3">
        <input
        type="checkbox"
        name="admin"
        id="admin"
        value="true"
        v-model="adminMode"
      />
      <label for="admin">Administrador</label>
      </div>

      <div class="w-50 mx-auto">
        <input type="submit" value="Registrarse" class="btn btn-secondary w-75 mx-auto mt-3"/>
        <button @click="toLogin" class="btn btn-danger w-75 mx-auto my-3">Iniciar Sesión</button>
      </div>
      
    </form>
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
