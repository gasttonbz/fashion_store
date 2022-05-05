<template>
  <div>
      <button @click="volver">Volver</button>
      <h4>{{ productDetail.title }}</h4>
      <img :src="productDetail.image" alt="">
      <p>{{ productDetail.description }}</p>
      <p>Precio: ${{ productDetail.price }}</p>
      <p>Categoria: {{ productDetail.category }}</p>
  </div>
</template>

<script>
export default {
    name: 'DetailProduct',
    computed: {
        productDetail() {
            return this.$store.getters.detallesProducto
        }
    },
    methods: {
        volver() {
            this.$router.push({path: '/user'})
        }
    }
}
</script>

<style>

</style>