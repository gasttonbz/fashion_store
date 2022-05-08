<template>
  <div class="w-50 mx-auto mt-5 d-flex flex-row card p-2">
    <div class="w-50 d-flex align-items-center">
      <img :src="productDetail.image" alt="" class="w-100" />
    </div>
    <div class="w-50 m-5">
      <h4>{{ productDetail.title }}</h4>
      <p>{{ productDetail.description }}</p>
      <p>Precio: <span class="fw-bold">${{ productDetail.price }}</span></p>
      <p>Categoria: {{ productDetail.category }}</p>
      <button @click="volver" class="btn btn-secondary m-2">Volver</button>
      <button @click="agregar(productDetail.id)" class="btn btn-danger m-2">Agregar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailProduct",
  computed: {
    productDetail() {
      return this.$store.getters.detallesProducto;
    },
  },
  methods: {
    volver() {
      this.$router.push({ path: "/productos" });
    },
    agregar(id) {
        this.$store.dispatch('agregarAlCarrito', id);
    }
  },
};
</script>

<style></style>
