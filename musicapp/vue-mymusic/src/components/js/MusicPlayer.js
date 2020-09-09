// import Vue from 'vue'
import MusicPlayer from '../music-player/MusicPlayer.vue';

const musicplayer = {
    install: function (Vue) {
        Vue.component('musicplayer', MusicPlayer);
    }
};
export default musicplayer;
