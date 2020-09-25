import Vue from "vue";
import Vuex from "vuex";
import musicPlayer from './module/musicPlayer';
import musicList from './module/musicList';
import * as getters  from './getters';
Vue.use(Vuex);
console.log(musicPlayer);
export default new Vuex.Store({
    modules: {
        musicPlayer,
        musicList
    },
    getters
});