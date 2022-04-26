<template>
  <div>
      <h1>Bienvenido</h1>
      <login-app v-if="$store.getters.showLogin"></login-app>
      <register-app v-if="$store.getters.showRegister"></register-app>
  </div>
</template>

<script>
import LoginApp from '@/components/LoginApp.vue'
import RegisterApp from '@/components/RegisterApp.vue'

export default {
 components: {
     LoginApp,
     RegisterApp
 }
}
</script>

<style>

</style>