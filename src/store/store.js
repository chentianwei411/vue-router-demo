import Vue from "vue";
import Vuex from "vuex";
import { productGetters, manufacturerGetters } from './getters.js'
import { productMutations, cartMutations, manufacturerMutations } from './mutations.js'
import { productActions, manufacturerActions } from './actions.js'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [],
    // all manufacturers
    manufacturers: []
  },
  // 把传入的对象合并：Object.assign()
  getters: Object.assign({}, productGetters, manufacturerGetters),

  mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
  // 使用actions激活这些mutations(因为actions是异步的！)
  // 流flow：
  // 1.组件派遣一个action,
  // 2.这个action 发出一个异步的请求，并提交到mutation.
  // 3.mutations更新state,并且state被传递到components，来更新需要改变的view部分！
  actions: Object.assign({}, productActions)
});
