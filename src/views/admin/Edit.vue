<template>
  <product-form
    @save-product="updateProduct"
    :model="model"
    :manufacturers="manufacturers"
    :isEditing="true"></product-form>
</template>


<script>
  import ProductForm from '../../components/products/ProductForm.vue'
  export default {
    // 因为使用Vuex管理state, 这里就无需使用data对象，而是：
    // 改为使用computed对象，调用Vuex.Store中的data。
    // 因为涉及到根据id搜索products,所以使用Vuex.store.getters中定义的函数。
    // computed对象只是调用getters中的函数，并传递参数。

    // 这样做的目的之一是为了更清晰的逻辑：
    // 1. 公用的data只储存在Vuex.store.state中
    // 2. 对这些data的计算函数统一放到getters对象中
    // 3. 组件调用Vuex中的state数据，通过自身的computed对象内的函数调用getters中的函数。

    created() {
      if (!this.model.name) {
        console.log('dispatched')
        this.$store.dispatch('productById', this.$route.params['id'])
      }
      if (this.manufacturers.length === 0) {
        this.$store.dispatch('allManufacturers')
      }
    },
    computed: {
      manufacturers() {
        return this.$store.getters.allManufacturers
      },
      model () {
        const productById = this.$store.getters.productById(this.$route.params['id'])
        return Object.assign({}, productById)
      }
    },
    methods: {
      updateProduct (model) {
        console.log('model', model)
        this.$store.dispatch("updateProduct", model)
      }
    },
    components: {
      'product-form': ProductForm
    }
  }
</script>
