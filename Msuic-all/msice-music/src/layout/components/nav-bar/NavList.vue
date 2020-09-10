<!--  -->
<template>
    <div class="header">
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            navList: [
                {
                    id: "0001",
                    name: "Mine",
                    pageName: "我的",
                    path: "/mine"
                },
                {
                    id: "0002",
                    name: "Finding",
                    pageName: "发现",
                    path: "/finding"
                },
                {
                    id: "0003",
                    name: "Friend",
                    pageName: "云村",
                    path: "/friend"
                },
                {
                    id: "0004",
                    name: "Video",
                    pageName: "视频",
                    path: "/video"
                },
                {
                    id: "0005",
                    name: "test",
                    pageName: "text",
                    path: "/test"
                }
            ]
        };
    },
    props: {},
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
.header {
    width: 100%;
    height: 100%;
    background-color: rgb(0, 225, 255);
}
</style>
