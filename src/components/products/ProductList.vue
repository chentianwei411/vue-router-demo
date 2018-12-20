<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <template v-for="product in products">
          <product-item :product="product"></product-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue'

  export default {
    name: 'product-list',

//在创造组件实例时，向server发送请求，取回products,存入store。
    created() {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts')
      }
    },
// products computed methods从store获得所有的products，
// template循环所有的products,并使用ProductItem组件渲染它们。
    computed: {
      products() {
        return this.$store.getters.allProducts
      }
    },
    data() {
      return {}
    },
    components: {
      'product-item': ProductItem
    }
  }
</script>

<style>
  .products {
    background: #F7F8FB;
    padding: 30px 0;
  }
</style>
