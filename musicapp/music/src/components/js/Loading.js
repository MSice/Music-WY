// import Vue from 'vue'
import Loading from '../loading/Loading.vue';

const loading = {
    install: function (Vue) {
        Vue.component('loading', Loading);
    }
};
export default loading;
