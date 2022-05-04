<template>
  <div class="card">
    <h2>Su carrito</h2>
    <p>Total $ {{ $store.getters.total }}</p>
    <div class="container-fluid">
      <div class="row justify-content-evenly">
        <article
          v-for="product in carrito"
          :key="product.id"
          class="card col-2 m-2"
        >
          <h4>{{ product.title }}</h4>
          <img :src="product.image" alt="" />
          <p>$ {{ product.price }}</p>
          <p>Cantidad: {{ product.cantidad }}</p>
          <button @click="quitarProducto(product.id)">Quitar</button>
          <button @click="aumentarProducto(product.id)">+</button>
          <button @click="disminuirProducto(product.id)">-</button>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarritoApp",
  methods: {
    quitarProducto(id) {
      this.$store.dispatch('quitarDelCarrito', id)
    },
    aumentarProducto(id) {
      this.$store.dispatch('aumentarProducto', id)
    },
    disminuirProducto(id) {
      this.$store.dispatch('disminuirProducto', id)
    }
  },
  computed: {
    carrito() {
      return this.$store.getters.carrito
    }
  }
};
</script>

<style></style>
