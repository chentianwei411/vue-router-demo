import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Cart from "./views/Cart.vue";
// Admin Components
import Index from "./views/admin/Index.vue"
import New from './views/admin/New.vue'
import Products from './views/admin/Products.vue'
import Edit from './views/admin/Edit.vue'


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: "Cart",
      component: Cart
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      // children
      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          // path的值是空字符串，因此/admin路径会调用这个组件
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
