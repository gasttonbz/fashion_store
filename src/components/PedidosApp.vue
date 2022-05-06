<template>
  <div class="container">
      <h2 class="mt-2">Pedidos</h2>
      <button @click="regresar">Regresar</button>
    <div v-for="pedido in pedidos" :key="pedido.id" class="w-50 mx-auto mt-5">
      <div class="d-flex flex-row justify-content-between mb-2">
        <div class="w-25 fw-bold">Pedido Nº {{ pedido.id }}</div>
        <div class="w-25 fw-bold">Total ${{ pedido.total }}</div>
      </div>
      <div>
        <item-pedidos :productos="pedido.productos"></item-pedidos>
      </div>
    </div>
  </div>
</template>

<script>
import ItemPedidos from '@/components/ItemPedidos.vue'
export default {
  name: "PedidosApp",
  components: {
      ItemPedidos
  },
  beforeMount() {
    this.$store.dispatch("downloadPedidos");
  },
  computed: {
    pedidos() {
      return this.$store.getters.pedidos;
    },
  },
  methods: {
      regresar() {
          this.$router.push({path: 'admin'})
      }
  }
};
</script>

<style></style>
