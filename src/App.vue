<template>
  <div id="app">
    <header class="d-flex justify-content-between align-items-center">
      <router-link to="/">Fashion Store</router-link>
      <nav>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  width: 100%;
  height: 10vh;
  padding: 10px;
  background-color: black;
  color: white;
}
header a {
  font-size: 1.2rem;
  text-decoration: none;
  color: white;
}
header nav a {
  color: white;
  text-decoration: none;
  margin: 4px;
}
</style>
