<template>
  <div id="app">
    <nav class="navbar bg-light navbar-expand-sm">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin" class="nav-link">Admin</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'Cart' }" class="nav-link">Cart ({{cartItemsCount}})</router-link>
        </li>
      </ul>
    </nav>

    <router-view />

    <div class="overlay" v-show="showLoader">
      <div class="loading-spinner">
        <div class="dot dotOne"></div>
        <div class="dot dotTwo"></div>
        <div class="dot dotThree"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import toastr from 'toastr'

  import {
    ADD_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT_SUCCESS
  } from './store/mutations-types'

  export default {
    name: 'app',
    data () {
      return {
        cartItems: this.$store.state.cart
      }
    },
    created () {
      // Subscriptions for mutation
      this.$store.subscribe((mutation) => {
        if (mutation.payload) {
          switch (mutation.type) {
            case ADD_PRODUCT_SUCCESS:
              toastr.success('Product created.', 'Success!')
              break
            case UPDATE_PRODUCT_SUCCESS:
              toastr.success('Product updated.', 'Success!')
              break
            case REMOVE_PRODUCT_SUCCESS:
              toastr.warning('Product deleted.', 'Deleted!')
              break
          }
        }
      })
    },
    computed: {
      cartItemsCount () {
        // Cart count
        return this.cartItems.length
      },
      showLoader () {
        // Loading spinner
        return this.$store.state.showLoader
      }
    }
  }
</script>
