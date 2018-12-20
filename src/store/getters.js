export const productGetters = {
  // Product.vue, ProductList.vue内使用：（computed对象中的products函数）
  allProducts (state, getters) {
    return state.products
  },
  //  Edit.vue内使用: (computed对象的model对象)
  productById: (state, getters) => id => {
    if (getters.allProducts.length > 0) {
      return getters.allProducts.filter(p => p._id === id)[0]
    } else {
      return state.product
    }
  },
}


export const manufacturerGetters = {
  //Edit.vue, New.vue内使用： （computed对象中的 manufacturers函数
  allManufacturers: state => state.manufacturers
}
