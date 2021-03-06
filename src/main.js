import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import './mock/mock'
import 'iview/dist/styles/iview.css'
import '@/assets/css/reset.css'
import Axios from "axios";
Vue.use(iView)
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
