<!--  -->
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
// import Navigation from "./components/navigation";
export default {
    components: {
        // Navigation
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
    mounted() {}
};
</script>
<style lang="scss">
// @import url(); 引入公共css类
</style>
