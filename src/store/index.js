import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLogin: true,
    showRegister: false,

    products: [],
    carrito: [],
    total: 0
  },
  getters: {
    showLogin(state) {
      return state.showLogin
    },
    showRegister(state) {
      return state.showRegister
    },
    products(state) {
      return state.products
    },
    carrito(state) {
      return state.carrito
    },
    total(state) {
      return state.total
    }
  },
  mutations: {
    loadProducts(state, {data}) {
      state.products = data;
      for(let product of state.products) {
        product.cantidad = 1;
      }
    },
    agregarAlCarrito(state, {id}) {
      let toAddProduct = state.products.find((product) => product.id == id);
      if(!state.carrito.includes(toAddProduct)) {
        state.carrito.push(toAddProduct);
      } else {
        let toIncrease = state.carrito.find((product) => product.id == id);
        toIncrease.cantidad ++
      }
    },
    quitarDelCarrito(state, {id}) {
      let productToDelete = state.carrito.find((product) => product.id == id);
      let indiceToDelete = state.carrito.indexOf(productToDelete);
      state.carrito.splice(indiceToDelete, 1);
    },
    aumentarProducto(state, {id}) {
      let productoParaAumentar = state.carrito.find((product) => product.id == id);
      productoParaAumentar.cantidad ++;
    },
    disminuirProducto(state, {id}) {
      let productoParaDisminuir = state.carrito.find((product) => product.id == id);
      productoParaDisminuir.cantidad --;
    },
    toLogin(state) {
      state.showLogin = true;
      state.showRegister = false;
    },
    toRegister(state) {
      state.showLogin = false;
      state.showRegister = true;
    }
  },
  actions: {
    agregarAlCarrito(context, id) {
      context.commit('agregarAlCarrito', {id})
    },
    loadProducts(context, data) {
      context.commit('loadProducts', {data})
    },
    quitarDelCarrito(context, id) {
      context.commit('quitarDelCarrito', {id})
    },
    aumentarProducto(context, id) {
      context.commit('aumentarProducto', {id})
    },
    disminuirProducto(context, id) {
      context.commit('disminuirProducto', {id})
    },
    toLogin(context) {
      context.commit('toLogin');
    },
    toRegister(context) {
      context.commit('toRegister');
    }
  },
  modules: {
  }
})
