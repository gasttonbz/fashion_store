<template>
  <div class="container mt-3">
    <div class="row justify-content-evenly">
      <article
        v-for="(product, index) in $store.getters.products"
        :key="index"
        class="card"
      >
        <h4>{{ product.title }}</h4>
        <img :src="product.image" alt="" />
        <p>$ {{ product.price }}</p>
        <button
          @click="agregar(product.id)"
          class="btn btn-secondary w-75 mt-2 mx-auto"
        >
          Agregar
        </button>
        <button
          @click="verDetalles(product.id)"
          class="btn btn-secondary w-75 mt-2 mx-auto"
        >
          Ver detalles
        </button>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductosUser",
  beforeMount() {
    if (!this.$store.getters.userMode && !this.$store.getters.adminMode) {
      this.$router.push({ path: "/" });
    }
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => this.$store.dispatch("loadProducts", json));
  },
  methods: {
    agregar(id) {
      this.$store.dispatch("agregarAlCarrito", id);
    },
    verDetalles(id) {
      this.$store.dispatch("verDetalles", id);
      this.$router.push({ path: "/productDetail" });
    },
  },
};
</script>

<style scoped>
article {
  width: 15%;
  margin: 4px;
}
article:hover {
  transform: scale(1.003);
  box-shadow: 3px 3px 17px -6px rgba(0, 0, 0, 0.75);
}
article h4 {
  width: 100%;
  font-size: 1.2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
article img {
  width: 100%;
  height: 50%;
  object-fit: contain;
}
</style>
