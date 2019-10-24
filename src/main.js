import Vue from 'vue'
import App from './App.vue'
import router from './router'
import filter from './filters/filter'
Vue.config.productionTip = false

Vue.filter('sec', filter);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
