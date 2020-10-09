<!-- 直线进度条 -->
<template>
    <div class="slideProcess">
        <div class="background"></div>
        <div class="process"></div>
        <div class="slider"></div>
    </div>
</template>

<script>
export default {
    components: {},
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
.slideProcess {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 0.15rem;
    border-radius: 50%;
    .process,
    .background {
        position: absolute;
        width: 100%;
        height: 110%;
        background-color: #ffffff80
    }
    .background {
        width: 100%;
        background-color: #0000001a;
    }
    .slider {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(-50%, -50%);
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: #fff;
    }
}
</style>
