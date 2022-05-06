import router from "@/router";
import Vue from "vue";
import Vuex from "vuex";
const axios = require("axios");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showLogin: true,
    showRegister: false,

    products: [],
    carrito: [],
    detallesProducto: {},
    pedidos: []
  },
  getters: {
    showLogin(state) {
      return state.showLogin;
    },
    showRegister(state) {
      return state.showRegister;
    },
    products(state) {
      return state.products;
    },
    carrito(state) {
      return state.carrito;
    },
    total(state) {
      let total = 0;
      for (let i = 0; i < state.carrito.length; i++) {
        let totalProducto = state.carrito[i].cantidad * state.carrito[i].price;
        total += totalProducto;
      }
      return total;
    },
    detallesProducto(state) {
      return state.detallesProducto;
    },
    pedidos(state) {
      return state.pedidos
    }
  },
  mutations: {
    loadProducts(state, { data }) {
      state.products = data;
      for (let product of state.products) {
        product.cantidad = 1;
      }
    },
    agregarAlCarrito(state, { id }) {
      let toAddProduct = state.products.find((product) => product.id == id);
      if (!state.carrito.some((product) => product.id == id)) {
        state.carrito.push(toAddProduct);
      } else {
        this.dispatch("aumentarProducto", id);
      }
    },
    quitarDelCarrito(state, { id }) {
      let productToDelete = state.carrito.find((product) => product.id == id);
      let indiceToDelete = state.carrito.indexOf(productToDelete);
      state.carrito.splice(indiceToDelete, 1);
    },
    aumentarProducto(state, { id }) {
      let productoParaAumentar = state.carrito.find(
        (product) => product.id == id
      );
      let indexProducto = state.carrito.indexOf(productoParaAumentar);
      let newProduct = productoParaAumentar;
      newProduct.cantidad++;
      Vue.set(state.carrito, indexProducto, newProduct);
    },
    disminuirProducto(state, { id }) {
      let productoParaDisminuir = state.carrito.find(
        (product) => product.id == id
      );
      if (productoParaDisminuir.cantidad !== 0) {
        let indexProducto = state.carrito.indexOf(productoParaDisminuir);
        let newProduct = productoParaDisminuir;
        newProduct.cantidad--;
        Vue.set(state.carrito, indexProducto, newProduct);
      }
    },
    toLogin(state) {
      state.showLogin = true;
      state.showRegister = false;
    },
    toRegister(state) {
      state.showLogin = false;
      state.showRegister = true;
    },
    verDetalles(state, { id }) {
      state.detallesProducto = state.products.find(
        (product) => product.id == id
      );
    },
    vaciarCarrito(state) {
      state.carrito = []
    },
    setPedidos(state, {response}) {
      state.pedidos = response.data
    }
  },
  actions: {
    agregarAlCarrito(context, id) {
      context.commit("agregarAlCarrito", { id });
    },
    loadProducts(context, data) {
      context.commit("loadProducts", { data });
    },
    quitarDelCarrito(context, id) {
      context.commit("quitarDelCarrito", { id });
    },
    aumentarProducto(context, id) {
      context.commit("aumentarProducto", { id });
    },
    disminuirProducto(context, id) {
      context.commit("disminuirProducto", { id });
    },
    toLogin(context) {
      context.commit("toLogin");
    },
    toRegister(context) {
      context.commit("toRegister");
    },
    vaciarCarrito(context) {
      context.commit('vaciarCarrito')
    },
    realizarPedido() {
      if (this.getters.carrito.length !== 0 && this.getters.total !== 0) {
        let data = [];
        for (let i = 0; i < this.getters.carrito.length; i++) {
          let cartProduct = {};
          cartProduct.title = this.getters.carrito[i].title;
          cartProduct.cantidad = this.getters.carrito[i].cantidad;
          cartProduct.id = this.getters.carrito[i].id;
          data.push(cartProduct);
        }
        axios
          .post("https://626f7d59c508beec48844b22.mockapi.io/pedidos", {
            total: this.getters.total,
            productos: data,
          })
          .then(alert("pedido exitoso, seras redirigido a la seccion productos"));
          this.dispatch('vaciarCarrito')
          router.push({path: '/user'})
      } else {
        alert("carrito vacio");
      }
    },
    verDetalles(context, id) {
      context.commit("verDetalles", { id });
    },
    downloadPedidos(context) {
      axios.get("https://626f7d59c508beec48844b22.mockapi.io/pedidos")
        .then(response => {context.commit('setPedidos', {response})})
        .catch(error => console.log(error))
    }
  },
  modules: {},
});
