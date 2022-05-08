<template>
  <div id="app">
    <header>
      <div v-if="this.$store.getters.userMode" @click="verPerfil" class="pointer w-25 d-flex justify-content-start"><img role="button" src="@/assets/user.png" alt=""></div>
      <div v-if="this.$store.getters.adminMode" @click="verPerfil" class="w-25 d-flex justify-content-start"><img role="button" src="@/assets/admin.png" alt=""></div>
      <div class="w-25 d-flex align-items-center mx-auto"><img src="@/assets/logo.png" id="logo" alt="" class="w-100 mx-auto"></div>
      <div v-if="this.$store.getters.userMode" @click="verCarrito" class="w-25 d-flex justify-content-end align-items-center"><p v-if="cantidadCarrito > 0" id="infoCarrito">{{ cantidadCarrito }}</p><img role="button" src="@/assets/carrito.png" alt="" id="carritoLogo"></div>
      <div v-if="this.$store.getters.adminMode" @click="verPedidos" class="w-25 d-flex justify-content-end"><img role="button" src="@/assets/pedidos.png" alt="" id="carritoLogo"></div>
    </header>

    <router-view />
  </div>
</template>

<script>
export default {
  beforeMount() {
    let usuario = sessionStorage.getItem('username');
    let contrasenia = sessionStorage.getItem('password');
    let mode = sessionStorage.getItem('mode');

    if(usuario != '' && contrasenia != '') {
      if(mode == 'user') {
        this.$store.dispatch('userMode')
      } else {
        if(mode == 'admin') {
          this.$store.dispatch('adminMode')
        } else {
          this.$store.dispatch('guestMode')
        }
      }
    }
  },
  computed: {
    cantidadCarrito() {
      return this.$store.getters.carrito.length
    }
  },
  methods: {
    verCarrito() {
      this.$router.push({path: '/carrito'})
    },
    verPedidos() {
      this.$router.push({path: '/pedidos'})
    },
    verPerfil() {
      this.$router.push({path: '/perfil'})
    }
  }
}
</script>

<style scoped>
#app {
  text-align: center;
}
header {
  width: 100%;
  height: 10vh;
  padding: 10px;
  background-color: black;
  color: white;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
}

#carritoLogo {
  width: 50px;
}
#infoCarrito {
  color: white;
  background-color: red;
  border-radius: 25%;
}
</style>
