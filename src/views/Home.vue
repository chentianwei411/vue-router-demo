<template>
  <div>
    <div class="title">
      <h1>In Stock</h1>
    </div>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '../components/products/ProductList.vue'
export default {
  name: "home",
  data() {
    return {}
  },
  components: {
    'product-list': ProductList
  }
};
</script>

<style scoped>

</style>
