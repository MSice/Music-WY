<!-- 全局布局渲染 -->
<template>
    <div class>
        <nav-bar></nav-bar>
        <app-main></app-main>
        <music-player></music-player>
    </div>
</template>

<script>
import { AppMain, Meum, NavBar } from "./components";
import MusicPlayer from "@/components/music-player";
export default {
    components: {
        AppMain,
        Meum,
        NavBar,
        MusicPlayer
    },
    data() {
        return {};
    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},

    methods: {},
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    // 如果页面有keep-alive缓存功能，这个函数会触发
    activated() {}
};
</script>
<style lang="scss" scoped>
// @import url(); 引入公共css类
</style>
