import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS
} from './mutations-types.js'

export const productMutations = {
  // 每个mutation都有一个success mutation, 它会在mutation完成后调用！
  // mutation只会抛出一个等待的pending state, 可以用于过渡的css
  // 然后success mutation更新UI，并关闭pending state。

  // 不明白showLoader 的用途！！
  [ALL_PRODUCTS] (state) {
    state.showLoader = true
  },

  [ALL_PRODUCTS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.products = payload
  },

  [PRODUCT_BY_ID] (state) {
    state.showLoader = true
  },

  [PRODUCT_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
    state.product = payload
  },

  [ADD_PRODUCT]: (state, payload) => {
    state.showLoader = true
  },

  [ADD_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.products.push(payload)
  },
  //
  // addProduct(state, payload) {
  //   state.showLoader = true,
  //   state.products.push(payload)
  // }
  [UPDATE_PRODUCT]: (state, payload) => {
    state.showLoader = true
  },

  // 不理解{...payload, }是什么语法？
  [UPDATE_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader =false
    state.products = state.products.map( p => {
      if (p._id === payload._id) {
        // 这里使用spread syntax
        payload = {...payload, manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0]}
        return payload
      }
      return p
    })
  },

  [REMOVE_PRODUCT]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader =false
    // 根据传入的id来找到products的index，然后使用splice(index, 1)移除这个product
    const index = state.products.findIndex( p => p._id === payload)
    console.debug('index', index)
    state.products.splice(index, 1)
  },
}

// 同样cart, manufacturer的mutations。
export const cartMutations = {
  [ADD_TO_CART]: (state, payload) => state.cart.push(payload),
  [REMOVE_FROM_CART]: (state, payload) => {
    const index = state.cart.findIndex(p => p._id === payload)
    state.cart.splice(index, 1)
    console.log(state.cart, state.cart.length, index)
  },
}

export const manufacturerMutations = {
  [ALL_MANUFACTURERS] (state) {
    state.showLoader = true
  },
  [ALL_MANUFACTURERS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.manufacturers = payload
  }
}
