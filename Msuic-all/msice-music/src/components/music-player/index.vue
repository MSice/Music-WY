<!-- 播放器 -->
<template>
    <div class="music-player">
        <audio src=""></audio>
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
.music-player {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10000;
    height: 3.6rem;
    width: 100%;
    background-color: blue;
}
</style>
