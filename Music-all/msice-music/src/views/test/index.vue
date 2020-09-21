<!-- 测试-->
<template>
    <div class>
        练习
        <circle-process :width="60" :strokeWidth="3" :percentage="test"></circle-process>
        <div class="div" style="width:50px;height: 50px;background-color:#00000099;dispaly:flex;">
            <span class="btn iconfont icon-yousanjiao"></span>
        </div>
    </div>
</template>

<script>
import { CircleProcess } from "@/components/tool";
// ['width', 'strokeWidth', 'backgroundColor', 'processColor', 'percentage']
export default {
    components: { CircleProcess },
    data() {
        return {
            test: 0
        };
    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},

    methods: {},
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        // let timer = setInterval(() => {
        //     this.test++;
        //     if (this.test == 100) {
        //         clearInterval(timer);
        //     }
        //     console.log(this.test);
        // }, 200);
    },
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
.div {
    justify-content: center;
    align-items: center;
    line-height: 50px;
    text-align: center;
}
</style>
