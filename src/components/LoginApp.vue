<template>
  <div>
    <h2>Inicie sesión</h2>
    <form @submit.prevent="signIn">
      <label for="username">Nombre de usuario</label>
      <input type="text" name="username" v-model="username" />
      <div v-if="errorUsername" class="alert-warning mi-alert">
        {{ msgErrorUsername }}
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

      <input type="submit" value="Ingresar" />
    </form>
    <button @click="toRegister">Ir a Registro</button>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "LoginApp",
  data() {
    return {
      username: "juan_perez",
      password: "hola1234",

      errorUsername: false,
      errorPassword: false,

      msgErrorUsername: "",
      msgErrorPassword: "",

      adminMode: false,
      users: [],
      admins: [],
    };
  },
  methods: {
    async verifyUser() {
      let respuesta = await axios.get(
        "https://626f7d59c508beec48844b22.mockapi.io/usuarios"
      );
      this.users = respuesta.data;
      let existeUsuario = this.users.some(
        (user) => user.username == this.username
      );
      if (existeUsuario) {
        let correctPassword = this.users.some(
          (user) => user.password == this.password
        );
        if (correctPassword) {
          alert("Inicio de sesión exitoso");
          this.$router.push({ path: "/user" });
        } else {
          this.errorUsername = true;
          this.msgErrorUsername = "La contraseña es incorrecta";
        }
      } else {
        this.errorUsername = true;
        this.msgErrorUsername = "El nombre de usuario es incorrecto";
      }
    },
    async verifyAdmin() {
      let respuesta = await axios.get(
        "https://626f7d59c508beec48844b22.mockapi.io/admins"
      );
      this.admins = respuesta.data;
      let existeAdmin = this.admins.some(
        (admin) => admin.username == this.username
      );
      if (existeAdmin) {
        let correctPassword = this.admins.some(
          (admin) => admin.password == this.password
        );
        if (correctPassword) {
          alert("Inicio de sesión exitoso");
          this.$router.push({ path: "/admin" });
        } else {
          this.errorUsername = true;
          this.msgErrorUsername = "La contraseña es incorrecta";
        }
      } else {
        this.errorUsername = true;
        this.msgErrorUsername = "El nombre de usuario es incorrecto";
      }
    },
    signIn() {
      this.errorUsername = false;
      this.errorPassword = false;

      if (this.username === "") {
        this.errorUsername = true;
        this.msgErrorUsername = "Debe ingresar un nombre de usuario";
      } else {
        if (this.password === "") {
          this.errorPassword = true;
          this.msgErrorPassword = "Ingrese su contraseña";
        } else {
          if (this.adminMode) {
            this.verifyAdmin();
          } else {
            this.verifyUser();
          }
        }
      }
    },
    toRegister() {
      this.$store.dispatch("toRegister");
    },
  },
};
</script>

<style></style>
