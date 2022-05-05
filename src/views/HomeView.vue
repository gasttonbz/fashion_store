<template>
  <div class="mt-5">
      <h2>¡Bienvenido a Fashion Store!</h2>
      <p>Para empezar a comprar Inicie Sesión o Registrese</p>
      <button @click="toLogin" class="btn btn-secondary mx-2">Iniciar Sesion</button>
      <button @click="toRegister" class="btn btn-secondary mx-2">Registrarse</button>
  </div>
</template>

<script>
export default {
    methods: {
        toLogin() {
            this.$store.dispatch('toLogin')
            this.$router.push({path:'getIn'})
        },
        toRegister() {
            this.$store.dispatch('toRegister')
            this.$router.push({path: 'getIn'})
        }
    }
}
</script>

<style>

</style>