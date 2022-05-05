<template>
  <div class="container">
    <h2>Su carrito</h2>
    <p>Total $ {{ $store.getters.total }}</p>
    <table class="table">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Aumentar/Disminuir</th>
          <th>Quitar producto</th>
          <th>Total producto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in carrito" :key="producto.id">
          <td>{{ producto.title }}</td>
          <td>{{ producto.price }}</td>
          <td>{{ producto.cantidad }}</td>
          <td><button @click="aumentarProducto(producto.id)" class="btn btn-secondary me-2">+</button><button @click="disminuirProducto(producto.id)" class="btn btn-secondary">-</button></td>
          <td><button @click="quitarProducto(producto.id)" class="btn btn-danger">Quitar</button></td>
          <td>{{ producto.cantidad * producto.price}}</td>
        </tr>
      </tbody>
    </table>

    <button @click="continuarViendo" class="btn btn-secondary mx-2">Seguir viendo productos</button>    
    <button @click="realizarPedido" class="btn btn-primary mx-2">Realizar Pedido</button>
  </div>
</template>

<script>
export default {
  name: "CarritoApp",
  methods: {
    quitarProducto(id) {
      this.$store.dispatch("quitarDelCarrito", id);
    },
    aumentarProducto(id) {
      this.$store.dispatch("aumentarProducto", id);
    },
    disminuirProducto(id) {
      this.$store.dispatch("disminuirProducto", id);
    },
    realizarPedido() {
      this.$store.dispatch("realizarPedido");
    },
    continuarViendo() {
      this.$router.push({ path: "/user" });
    },
  },
  computed: {
    carrito() {
      return this.$store.getters.carrito;
    }
  },
};
</script>

<style></style>
