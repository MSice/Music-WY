<!-- 全屏播放器 -->
<template>
    <div class="fullplayer" :style="{ height: height + 'px' }">
        <div
            class="background"
            :style="{
                height: height + 'px',
                'background-image': 'url(' + music_info.picSrc + ')'
            }"
        ></div>
        <div class="head">
            <div class="return" @click="$emit('setfullscreen', false)">
                <span class="iconfont icon-fanhui-wangyiicon"></span>
            </div>
            <div class="music-info">
                <div class="sings-name">{{music_info.name}}</div>
                <div class="sings-other">{{music_info.author}}&gt;</div>
            </div>
            <div class="share">
                <span class="iconfont icon-fenxiangpt"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            height: document.documentElement.clientHeight
        };
    },
    props: {
        playing: {
            type: Boolean
        },
        show_mini: {
            type: Boolean
        },
        music_info: {
            type: Object
        },
        percentage: {
            type: Number
        }
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
<style lang="scss" scoped>
// @import url(); 引入公共css类
.fullplayer {
    position: fixed;
    top: 0;
    width: 92%;
    z-index: 99999;
    padding: 2% 4%;
    background-color: #bfbfbf;
}
.head {
    width: 100%;
    height: 3rem;
    color: #ffffffd0;
    display: flex;
    .return {
        width: 2rem;
        height: 3rem;
        line-height: 3rem;
        font-size: 1.8rem;
    }
    .music-info {
        flex-grow: 1;
        margin-left: 0.5rem;
        .sings-name {
            font-size: 1.1rem;
        }
        .sings-other {
            font-size: 0.9rem;
            color: #00000027
        }
    }
    .share {
        width: 2rem;
        height: 3rem;
        line-height: 3rem;
        font-size: 1.8rem;
        text-align: right;
    }
}
.background {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    filter: blur(170px);
    background-color: #bfbfbf;
    background-size: 150% 150%;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
}
</style>
