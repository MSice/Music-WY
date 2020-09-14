<!-- 迷你播放器 -->
<template>
    <div class="mini-player">
        <div class="picture">
            <img src="@/assets/defult-image/music.jpg" alt="">
        </div>
        <div class="content"></div>
        <div class="list-btn">
            <strong class="iconfont icon-caidan"></strong>
        </div>
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
.mini-player {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 94%;
    display: flex;
    height: 2.6rem;
    z-index: 10000;
    padding: .4rem 3%;
    border-top: 1px solid #c0c0c0be;
    background-color: #f9f9f9e5;
}

.mini-player .picture, .mini-player .list-btn {
    width: 2.6rem;
    height: 2.6rem;
}

.mini-player .picture {
    img {
        width: 100%;
        border-radius: 50%;
    }
}

.mini-player .list-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 600;
}

.mini-player .content {
    flex-grow: 8;
}
</style>
