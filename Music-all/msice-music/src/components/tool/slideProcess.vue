<!-- 直线进度条 -->
<template>
    <div class="slideProcess" ref="slideProcess" @click="chengPercentage">
        <div class="background"></div>
        <div class="process" :style="{ width: percen_tage + '%' }"></div>
        <div
            class="slider"
            :style="{ left: percen_tage + '%' }"
            @touchstart.prevent="start"
            @touchmove.prevent="move"
            @touchend="end"
        ></div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            percentage: 0,
            touch: {
                type: true,
                width: 0
            }
        };
    },
    props: {
        percenTage: {
            type: Number,
            default: 0
        }
    },
    // 监听属性 类似于data概念
    computed: {
        percen_tage: function() {
            if (this.touch.type) {
                this.setpercentage(this.percenTage * 100);
            }
            return this.percentage;
        }
    },
    // 监控data中的数据变化
    watch: {},

    methods: {
        start() {
            this.touch.type = false;
        },
        move(e) {
            if (this.touch.type) {
                return;
            }
            const wid = this.$refs.slideProcess.offsetWidth;
            const left = this.$refs.slideProcess.offsetParent.getBoundingClientRect()
                .left;
            const clientX = e.touches[0].clientX;
            this.touch.width = ((clientX - left) / wid) * 100;
            // const time = parseInt((this.MaxTime * this.touch.width) / 100);
            // this.nowTime = this.formTime(time);
            if (this.touch.width >= 100) {
                this.touch.width = 100;
                this.end();
                this.setpercentage(this.touch.width);
                return;
            }
            if (this.touch.width <= 0) {
                this.touch.width = 0;
                this.end();
                this.setpercentage(this.touch.width);
                return;
            }
            this.setpercentage(this.touch.width);
        },
        end() {
            this.touch.type = this.$emit('chenge_percentage', this.percentage);
            // this.touch.type = true;
        },
        chengPercentage(e) {
            this.touch.type = false;
            const wid = this.$refs.slideProcess.offsetWidth;
            const left = this.$refs.slideProcess.offsetParent.getBoundingClientRect()
                .left;
            let clientX = e.clientX;
            if (clientX < left) {
                clientX = left;
            }
            this.touch.width = ((clientX - left) / wid) * 100;
            this.setpercentage(this.touch.width);
            this.$emit('chenge_percentage', this.percentage);
        },
        setpercentage(val) {
            this.percentage = val;
        },
        return_percentage() {
            return this.percentage;
        }
    },
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
    width: 100%;
    background-color: #0000001a;
    .process {
        height: 110%;
        background-color: #ffffff80;
    }
    .slider {
        position: absolute;
        top: 50%;
        left: 0%;
        touch-action: none;
        transform: translate(-50%, -50%);
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: #fff;
    }
}
</style>
