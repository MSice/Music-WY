import Vue from "vue";
import Vuex from "vuex";
import musicPlayer from './module/musicPlayer'
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    musicPlayer
  }
});
