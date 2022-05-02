<template>
  <div>
    <div class="container-fluid">
      <div class="row justify-content-evenly">
        <article
          v-for="(product, index) in $store.getters.products"
          :key="index"
          class="card col-2 m-2"
        >
          <h3>{{ product.title }}</h3>
          <img :src="product.image" alt="" class="w-100" />
          <p>$ {{ product.price }}</p>
          <button>Eliminar</button>
          <button>Modificar</button>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductosAdmin",
  beforeMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => (this.$store.dispatch('loadProducts', json)));
  }
};
</script>

<style></style>
