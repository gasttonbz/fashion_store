import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showLogin: true,
    showRegister: false,

    products: [],
    carrito: [],
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
      //return state.carrito.reduce((acu, product) => acu + product.cantidad, 0);
      let total = 0;
      for(let i = 0; i < state.carrito.length; i++) {
        let totalProducto = state.carrito[i].cantidad * state.carrito[i].price;
        total += totalProducto
      }
      return total
    },
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
        this.dispatch('aumentarProducto', id)
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
  },
  modules: {},
});
