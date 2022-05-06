<template>
  <div class="card w-25 mx-auto mt-5 p-3">
      <h3 class="mt-2">@{{ usuario }}</h3>
      <p v-if="mode == 'admin'">Perfil de Administrador</p>
      <p v-if="mode == 'user'">Perfil de Usario</p>
      <img v-if="mode == 'admin'" src="@/assets/admin3.png" alt="">
      <img v-if="mode == 'user'" src="@/assets/user3.png" alt="">
      <button class="btn btn-secondary w-50 m-2 mx-auto" v-if="mode == 'admin'" @click="volver('admin')">Volver a productos</button>
      <button class="btn btn-secondary w-50 m-2 mx-auto" v-if="mode == 'user'" @click="volver('user')">Volver a productos</button>
      <button class="btn btn-danger w-50 m-2 mx-auto" @click="cerrarSesion">Cerrar Sesión</button>
  </div>
</template>

<script>
export default {
    name: 'ProfileApp',
    computed: {
        usuario() {
            return sessionStorage.getItem('username');
        },
        mode() {
            return sessionStorage.getItem('mode')
        }
    },
    methods: {
        cerrarSesion() {
            sessionStorage.setItem('username', '');
            sessionStorage.setItem('password', '');
            sessionStorage.setItem('mode', '');
            this.$store.dispatch('cerrarSesion')
            this.$router.push({path: '/getIn'})
        },
        volver(mode) {
            if(mode == 'user') {
                this.$router.push({path: '/user'})
            } else {
                this.$router.push({path: '/admin'})
            }
        }
    }
}
</script>

<style>

</style>