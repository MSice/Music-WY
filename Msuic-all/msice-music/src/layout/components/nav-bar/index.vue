<!--  -->
<template>
    <div class="nav-bar">
        <div class="meum" style="font-weight: 600">
            <i class="iconfont icon-meum-copy"></i>
        </div>
        <div class="nav-list">
            <nav-list></nav-list>
        </div>
        <div class="serch">
            <i class="iconfont icon-sousuo"></i>
        </div>
    </div>
</template>

<script>
import NavList from "./NavList";
export default {
    components: {
        NavList
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
.nav-bar {
    position: fixed;
    height: 3.3rem;
    width: 96%;
    display: flex;
    text-align: center;
    line-height: 3.3rem;
    font-size: .95rem;
    padding: 0 2%;
    z-index: 10000;
    .meum, .serch {
        font-size: 1.2rem;
        font-weight: 500;
        flex-grow: 1.6;
    }
    .nav-list {
        padding: 0 4%;
        flex-grow: 8;
    }
}
</style>
