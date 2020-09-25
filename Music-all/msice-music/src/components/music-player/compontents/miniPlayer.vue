<!-- 迷你播放器 -->
<template>
    <div class="mini-player">
        <div class="picture" :style="{'animation-play-state': playing?'running':'paused'}">
            <img :src="music_info.picSrc" alt />
        </div>
        <div class="content">
            <div class="music-info">
                <div class="sings-name">{{music_info.name}}</div>
                <div class="sings-other">{{music_info.author}}</div>
            </div>
            <div class="playing-btn" ref="palyingBtn" @click="play()">
                <circle-process
                    :width="processConfig.width"
                    :strokeWidth="processConfig.strokeWidth"
                    :percentage="percentage"
                    :backgroundColor="'#180707d0'"
                    :processColor="'#e7111c'"
                ></circle-process>
                <span :class="['btn', 'iconfont', playing?'icon-la-':'icon-yousanjiao']"></span>
            </div>
        </div>
        <div class="list-btn">
            <strong class="iconfont icon-caidan"></strong>
        </div>
    </div>
</template>

<script>
import { CircleProcess } from "@/components/tool";
export default {
    components: {
        CircleProcess
    },
    data() {
        return {
            processConfig: {
                width: 30,
                strokeWidth: 2
            }
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

    methods: {
        play() {
            this.$emit("play");
        },
        init() {
            let playingBtnWidth = this.$refs.palyingBtn.clientWidth;
            let playingBtnHeight = this.$refs.palyingBtn.clientHeight;
            let playingBtnStyle =
                playingBtnHeight >= playingBtnWidth
                    ? playingBtnWidth
                    : playingBtnHeight;
            if (playingBtnStyle >= 30) {
                this.processConfig.width = playingBtnStyle-2;
                this.processConfig.strokeWidth =
                    Math.ceil(playingBtnStyle / 9)-2;
            }
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.init();
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
.mini-player {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 95.5%;
    display: flex;
    height: 2.6rem;
    z-index: 10000;
    padding: 0.4rem 1.5% 0.4rem 3%;
    border-top: 1px solid #c0c0c0be;
    background-color: #f8f8f8be;
    // background-color: rgb(179, 179, 179);
}

.mini-player .picture,
.mini-player .list-btn {
    width: 2.6rem;
    height: 2.6rem;
}

.mini-player .picture {
    animation: rotating 18s linear infinite;
    img {
        // animation: rotating 2s linear infinite;
        // animation-play-state: running;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    .music-info {
        width: 12rem;
        // background-color: rgba(255, 0, 0, 0.446);
        display: flex;
        flex-direction: column;
        padding: 0 4.5% 0 3%;
        .sings-name {
            font-size: 1rem;
            height: 1.5rem;
            overflow: hidden;
        }
        .sings-other {
            font-size: 0.8rem;
            height: 1.1rem;
            color: rgba(153, 153, 153, 0.659);
            // background-color: rgba(255, 255, 255, 0.275);
            // background-color: #180707d0;
        }
    }
    .playing-btn {
        width: 2.2rem;
        height: 2.2rem;
        // border: 0.2rem solid #000;
        // border-radius: 50%;
        // background-color: rgba(250, 0, 0, 0.446);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-38%, -48%);
            font-weight: 600;
        }
        .icon-la- {
            font-size: 0.85rem;
            transform: translate(-50%, -50%);
        }
    }
}
</style>
