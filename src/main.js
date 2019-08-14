// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import navitem from './components/navitem'
import 'font-awesome/css/font-awesome.css'
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.echarts = echarts
Vue.component('navbar', navitem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
