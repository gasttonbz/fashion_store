<template>
  <div class="mt-5">
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="signIn" class="card w-25 mx-auto d-flex flex-column">
      <label for="username" class="w-50 mx-auto mt-3">Nombre de usuario</label>
      <input
        type="text"
        name="username"
        v-model="username"
        class="w-50 mx-auto"
      />
      <div v-if="errorUsername" class="alert-warning mi-alert w-75 mx-auto">
        {{ msgErrorUsername }}
      </div>

      <label for="password" class="w-50 mx-auto mt-3">Contraseña</label>
      <input
        type="password"
        name="password"
        v-model="password"
        class="w-50 mx-auto"
      />
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
        <input
          type="submit"
          value="Ingresar"
          class="btn btn-secondary w-75 mx-auto mt-3"
        />
        <button @click="toRegister" class="btn btn-danger w-75 mx-auto my-3">
          Registrarse
        </button>
      </div>
    </form>
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
    guardarDatos(username, password, mode) {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('password', password);
      sessionStorage.setItem('mode', mode);
    },
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
          this.guardarDatos(this.username, this.password, 'user');
          alert("Inicio de sesión exitoso");
          this.$store.dispatch('userMode');
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
          this.guardarDatos(this.username, this.password, 'admin');
          alert("Inicio de sesión exitoso");
          this.$store.dispatch('adminMode');
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
