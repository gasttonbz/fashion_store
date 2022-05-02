<template>
  <div>
      <h2>¡Bienvenido a Fashion Store!</h2>
      <p>Para empezar a comprar Inicie Sesion o Registrese</p>
      <button @click="toLogin">Iniciar Sesion</button>
      <button @click="toRegister">Registrarse</button>
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