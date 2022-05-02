<template>
  <div class="container-fluid">
    <div class="row justify-content-evenly">
      <article v-for="(product, index) in $store.getters.products" :key="index" class="card col-2 m-2">
        <h3>{{ product.title }}</h3>
        <img :src="product.image" alt="" class="w-100"/>
        <p>$ {{ product.price }}</p>
        <button @click="agregar(product.id)">Agregar</button>
        <button @click="verDetalles(product.id)">Ver detalles</button>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductosUser",
  beforeMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => (this.$store.dispatch('loadProducts', json)));
  },
  methods: {
    agregar(id) {
      this.$store.dispatch('agregarAlCarrito', id);
    },
    verDetalles(id) {console.log('comprado producto ' + id)} //pendiente
  }
};
</script>

<style scoped>
</style>
