<template>
  <div id="app">
    <header>
      <div class="w-25 d-flex align-items-center"><img src="@/assets/logo.png" id="logo" alt="" class="w-75"></div>
      <nav class="w-25">
        <router-link to="/carrito">Carrito</router-link>
        <router-link to="/admin">Pagina de administrador</router-link>
        <router-link to="/user">Productos</router-link>
        <router-link to="/getIn">get in</router-link>
      </nav>
    </header>

    <router-view />
  </div>
</template>

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
</style>
