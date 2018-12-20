<template>
  <div>
    <button v-if="isAdding" class="btn bt-primary" @click="addToCart">Add to cart</button>
    <button v-else class="btn btn-danger" @click="removeFromCart(product._id)">Remove from Cart</button>
  </div>
</template>

<script>
  import {
    ADD_TO_CART,
    REMOVE_FROM_CART
  } from '../../store/mutations-types.js'

  export default {
    props: ['product'],
    data() {
      return {
        cart: this.$store.state.cart
      }
    },
    computed: {
// 简单的add|remove按钮的切换。这里购物车同种商品只能添加1个。
      isAdding() {
        return this.cart.indexOF(this.product) < 0
      }
    },
    methods: {
// 不涉及用axios发送异步的request,所以直接用mutation
      addToCart() {
        this.$store.commit(ADD_TO_CART, this.product)
      },
      removeFromCart(id) {
        this.$store.commit(REMOVE_FROM_CART, id)
      }
    }
  }

</script>
