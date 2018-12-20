import axios from 'axios'

// ？？？不理解：一个奇怪的字符串》？
const API_BASE = '<API-URL/api/vi>'

import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS
} from './mutations-types.js'

// 这里定义的actions都是由各个组件来激发的
// 例如： allProducts，它在Products.vue中被激发
// 提交ALL_PRODUCTS mutation，它会开始一个loading spinner即记录此时是加载中。
// 之后使用axios发出一个HTML request,这是异步函数。
// 收到response后，提交一个带有返回data作为参数的success mutation。
// 这个mutiation会修改state的products,并改showLoader为false，代表结束加载。

export const productActions = {
  // Prodcuts.vue, PrdouctList.vue中被使用。(created hook内)
  allProducts ({commit}) {
    commit(ALL_PRODUCTS)
    axios.get(`${API_BASE}/products`).then(response => {
      commit(ALL_PRODUCTS_SUCCESS, response.data)
    })
  },

  productById ({commit}, payload) {
    commit(PRODUCT_BY_ID)
    axios.get(`${API_BASE}/products/${payload}`).then(response => {
      commit(PRODUCT_BY_ID_SUCCESS, response.data)
    })
  },
  // New.vue中被使用
  addProduct({commit}, payload) {
    commit(ADD_PRODUCT)
    axios.post(`${API_BASE}/products`, payload).then(response => {
      commit(ADD_PRODUCT_SUCCESS, response.data)
    })
  },
  // Edit中被使用
  updateProduct({commit}, payload) {
    commit(UPDATE_PRODUCT)
    axios.put(`${API_BASE}/products/${payload._id}`, payload).then(response => {
      commit(UPDATE_PRODUCT_SUCCESS, response.data)
    })
  },
  // Products.vue中的deleteProduct(id)方法dispatch('removeProduct', id)
  removeProduct({commit}, payload) {
    commit(REMOVE_PRODUCT)
    // 通过API删除product
    axios.delete(`${API_BASE}/products/${payload}`, payload).then(response => {
      // 使用console查看返回的data是什么，然后再决定如何处理。即使用mutation
      console.debug('response', response.data)
      commit(REMOVE_PRODUCT_SUCCESS, response.data)
    })
  }
}

export const manufacturerActions = {
  allManufacturers ({ commit }) {
    commit(ALL_MANUFACTURERS)
    // 从api得到所有manufacturers
    axios.get(`${API_BASE}/manufacturers`).then(response => {
      commit(ALL_MANUFACTURERS_SUCCESS, response.data)
    })
  }
}
