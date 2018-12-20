<template>
  <!-- product-form组件发出emit的save-product事件被监听 -->
  <product-form
    @save-product="addProduct"
    :model="model"
    :manufacturers="manufacturers" >
  </product-form>
</template>

<script>
  import ProductForm from '@/components/products/ProductForm.vue'

  export default {
    data() {
      return {
        model: {},
        // manufacturers: [
        //   {
        //     _id: 'sam',
        //     name: 'Samsung',
        //   },
        //   {
        //     _id: 'apple',
        //     name: 'Apple',
        //   },
        // ],
      }
    },
    // 创建这个组件实例时，Sstore从API得到所有 manufacturers
    created() {
      this.$store.dispatch('allManufacturers')
    },
    computed: {
      manufacturers() {
        return this.$store.getters.allManufacturers
      }
    },
    // 使用Vuex.Store的实例方法dispatch,把数据指派给action。
    methods: {
      addProduct(model) {
        console.log('model', model)
        this.$store.dispatch('addProduct', model)
      }
    },
    components: {
      'product-form': ProductForm
    }
  }
</script>
