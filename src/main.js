import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { registerPlugins } from './plugins'
import anime from './plugins/anime'


import './css/reset.css'
import './css/main.css'


registerPlugins(Vue)
Vue.use(anime)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
