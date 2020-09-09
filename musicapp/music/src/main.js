import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import axios from './utils/axios';
import '../src/assets/js/rem.js';
import './assets/iconfont/iconfont.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/css/swiper.css';
import vueSwiper from 'vue-awesome-swiper';
import musicplayer from './components/js/MusicPlayer';
import loading from './components/js/Loading';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.use(vueSwiper);
Vue.use(musicplayer);
Vue.use(loading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
