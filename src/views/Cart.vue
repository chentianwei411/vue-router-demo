<template>
  <div v-if="cart.length > 0">
    <div class="title">
      <h1>Your cart</h1>
    </div>
    <template v-for="product in cart">
      <ProductDetails :product='product' :key="product.id"></ProductDetails>
    </template>
  </div>
  <div v-else class='title'>
    <h1>Your Cart is Empty</h1>
  </div>
</template>

<script>
  import ProductDetails from '../components/products/ProductDetails.vue'

  export default {
    name: 'cart',
    data() {
      return {
        cart: this.$store.state.cart
      }
    },
    components: {
      ProductDetails
    }
  }
</script>
