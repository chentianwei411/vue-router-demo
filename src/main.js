import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BootstrapVue from 'bootstrap-vue'
// 验证依赖
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false;
Vue.use(VeeValidate)
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
