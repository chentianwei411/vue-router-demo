<template>
  <div>
    <div class="title">
      <h1>This is Admin/New</h1>
    </div>
    <!-- product-form组件发出emit的save-product事件被监听 -->
    <product-form
      @save-product="addProduct"
      :model="model"
      :manufacturers="manufacturers" >
    </product-form>
    <hr>
  </div>
</template>

<script>
  import ProductForm from '@/components/products/ProductForm.vue'

  export default {
    data() {
      return {
        model: {},
        manufacturers: [
          {
            _id: 'sam',
            name: 'Samsung',
          },
          {
            _id: 'apple',
            name: 'Apple',
          },
        ],
      }
    },
    methods: {
      addProduct(model) {
        console.log('model', model)
      }
    },
    components: {
      'product-form': ProductForm
    }
  }
</script>
