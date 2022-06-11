import Vue from 'vue'
import App from './App.vue'
import router from './router'
// css初始化
import '@/assets/css/bace.css'
// 自定义适配
// import './assets/js/phone.js'
import '@/plugins/vant.js'
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

//使用开发插件
import echarte from './plugins/echarts.js'
Vue.use(echarte)

//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
