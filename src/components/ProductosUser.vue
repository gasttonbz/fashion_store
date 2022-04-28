<template>
  <div class="container-fluid">
    <div class="row justify-content-evenly">
      <article v-for="(product, index) in products" :key="index" class="card col-2 m-2">
        <h3>{{ product.title }}</h3>
        <img :src="product.image" alt="" class="w-100"/>
        <p>$ {{ product.price }}</p>
        <button>Agregar</button>
        <button>Ver detalles</button>
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
      .then((json) => (this.products = json));
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>

<style scoped>
</style>
