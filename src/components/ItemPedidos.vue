<template>
  <table class="table table-bordered mx-auto">
      <tr>
          <th>id</th>
          <th>producto</th>
          <th>cantidad</th>
      </tr>
      <tr v-for="producto in productos" :key="producto.id">
          <td>{{producto.id}}</td>
          <td>{{producto.title}}</td>
          <td>{{producto.cantidad}}</td>
      </tr>
  </table>
</template>

<script>
export default {
    name: 'ItemPedidos',
    props: {
        productos: Array
    }
}
</script>

<style>

</style>