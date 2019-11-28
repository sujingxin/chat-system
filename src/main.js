import Vue from 'vue';
import ElementUI from 'element-ui'
import App from './App';
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/router';
import './style/helper.css'
import store from './store/index'

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: 'small' })

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
