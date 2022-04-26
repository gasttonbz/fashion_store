<template>
  <div>
      <h2>Registrarse</h2>
      <form @submit.prevent="register">

          <label for="firstName">Nombre</label>
          <input type="text" name="firstName" v-model="firstName">
          <div v-if="errorFirstName" class="alert-warning mi-alert">
        {{ msgErrorFistName }}
      </div>

          <label for="lastName">Apellido</label>
          <input type="text" name="lastName" v-model="lastName">
          <div v-if="errorLastName" class="alert-warning mi-alert">
        {{ msgErrorLastName }}
      </div>

          <label for="email">Email</label>
          <input type="text" name="email" v-model="email">
          <div v-if="errorEmail" class="alert-warning mi-alert">
        {{ msgErrorEmail }}
      </div>

          <label for="password">Contraseña</label>
          <input type="password" name="password" v-model="password">
          <div v-if="errorPassword" class="alert-warning mi-alert">
        {{ msgErrorPassword }}
      </div>

          <input type="submit" value="Registrarse">
      </form>
  </div>
</template>

<script>
export default {
    name: 'RegisterApp',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',

            errorFirstName: false,
            errorLastName: false,
            errorEmail: false,
            errorPassword: false,

            msgErrorFistName: '',
            msgErrorLastName: '',
            msgErrorEmail: '',
            msgErrorPassword: ''
        }
    },
    methods: {
        register() {
            this.errorFirstName= false,
            this.errorLastName= false,
            this.errorEmail= false,
            this.errorPassword= false

            if(this.firstName == '') {
                this.errorFirstName = true;
                this.msgErrorFistName = 'Ingrese su Nombre'
            } else {
                if(this.lastName == '') {
                    this.errorLastName = true;
                    this.msgErrorLastName = 'Ingrese su apellido'
                } else {
                    if(this.email == '') {
                        this.errorEmail = true;
                        this.msgErrorEmail = 'Ingrese su email'
                    } else {
                        if(this.password == '') {
                            this.errorPassword = true;
                            this.msgErrorPassword = 'Ingrese su contraseña'
                        } else {
                            alert('registro completo') // realizar registro usuario y llevar a login
                        }
                    }
                }
            }
        }
    }
}
</script>

<style>

</style>