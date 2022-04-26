<template>
  <div>
    <h2>Inicie sesión</h2>
    <form @submit.prevent="signIn">

      <label for="email">Email</label>
      <input type="email" name="email" v-model="email" />
      <div v-if="errorEmail" class="alert-warning mi-alert">
        {{ msgErrorEmail }}
      </div>

      <label for="password">Contraseña</label>
      <input type="password" name="password" v-model="password" />
      <div v-if="errorPassword" class="alert-warning mi-alert">
        {{ msgErrorPassword }}
      </div>

      <input type="checkbox" name="admin" id="admin" value="true" v-model="adminMode">
      <label for="admin">Administrador</label>

      <input type="submit" value="Ingresar" />
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginApp",
  data() {
    return {
      email: "juanperez@prueba.com",
      password: "hola1234",

      errorEmail: false,
      errorPassword: false,

      msgErrorEmail: "",
      msgErrorPassword: "",

      adminMode: false
    };
  },
  methods: {
    signIn() {
      this.errorEmail = false;
      this.errorPassword = false;

      if (this.email === "") {
        this.errorEmail = true;
        this.msgErrorEmail = "Debe ingresar un email";
      } else {
        if (this.password === "") {
          this.errorPassword = true;
          this.msgErrorPassword = "Ingrese su contraseña";
        } else {
          if(this.adminMode) {
              alert('Ingreso modo administrador') //verificar datos y establecer modo admin
            } else {
                alert('Ingreso modo usuario') //verificar datos y establecer modo user
            }
        }
      }
    },
  },
};
</script>

<style></style>
