<!-- 全屏播放器 -->
<template>
    <div class="fullplayer" :style="{ height: height + 'px' }">
        <div class="head">
            <div class="return" @click="$emit('setfullscreen', false)">
                <span class="iconfont icon-fanhui-wangyiicon"></span>
            </div>
            <div class="music-info">
                <div class="sings-name">{{ music_info.name }}</div>
                <div class="sings-other">{{ music_info.author }}&gt;</div>
            </div>
            <div class="share">
                <span class="iconfont icon-fenxiangpt"></span>
            </div>
        </div>
        <div class="content">
            <div class="music-pic">
                <img :src="music_info.picSrc" alt="歌曲主题图片" />
            </div>
        </div>
        <div class="control">
            <div class="control-choose">
                <li class="choose">
                    <span class="iconfont icon-xihuan-kongpt-wangyiicon"></span>
                </li>
                <li class="choose">
                    <span class="iconfont icon-xiazaipt"></span>
                </li>
                <li class="choose">
                    <span class="iconfont icon-ttpodicon"></span>
                </li>
                <li class="choose">
                    <span class="iconfont icon-pinglunpt1"></span>
                </li>
                <li class="choose">
                    <span class="iconfont icon-xinxipt"></span>
                </li>
            </div>
            <div class="control-slide">
                <div class="nowtime">00:00</div>
                <div class="slide">
                    <slide-process></slide-process>
                </div>
                <div class="maxtime">03:41</div>
            </div>
            <div class="control-btn">
                <li class="other">
                    <span class="iconfont icon-danquxunhuan"></span>
                </li>
                <li class="other-1">
                    <span class="iconfont icon-shangyiqu"></span>
                </li>
                <li class="playing" @click="$emit('play')">
                    <span
                        :class="[
                            'iconfont',
                            playing ? 'icon-bofang' : 'icon-zanting'
                        ]"
                    ></span>
                </li>
                <li class="other-2">
                    <span class="iconfont icon-xiayiqu"></span>
                </li>
                <li class="other">
                    <span class="iconfont icon-meum-copy"></span>
                </li>
            </div>
        </div>
        <div
            class="background"
            :style="{
                height: height + 'px',
                'background-image': 'url(' + music_info.picSrc + ')'
            }"
        ></div>
    </div>
</template>

<script>
import { SlideProcess } from "@/components/tool";
export default {
    components: { SlideProcess },
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
.background {
    position: fixed;
    top: 0;
    width: 100%;
    filter: blur(100px);
    background-color: #bfbfbf;
    background-size: 150% 150%;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    z-index: -1;
}

.fullplayer {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10004;
    padding: 4rem 3% 11rem;
    box-sizing: border-box;
    background-color: #bfbfbf;
}
.head {
    position: fixed;
    top: 0.7rem;
    left: 4%;
    width: 92%;
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
            color: #ffffff80;
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

.content {
    width: 100%;
    height: 100%;
    position: relative;
    .music-pic {
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translate(-50%, 0);
        width: 16rem;
        height: 16rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("http://s2.music.126.net/style/web2/img/coverall.png?4490303f2ffc5c36f0672a045dce31da");
        background-position: -11.54rem -46.89rem;
        background-size: 191%;
        border: 0.5rem solid #d1d1d154;
        border-radius: 50%;
        img {
            height: 70%;
            border-radius: 50%;
        }
    }
}

.control {
    position: fixed;
    bottom: 1rem;
    left: 4%;
    width: 92%;
    height: 8rem;
    &-choose {
        box-sizing: border-box;
        width: 100%;
        height: 35%;
        display: flex;
        line-height: 2.8rem;
        padding: 0 1.5rem;
        li {
            font-size: 1.5rem;
            flex-grow: 1;
            text-align: center;
            color: #ffffffd0;
        }
        li:nth-child(3) {
            width: 12%;
        }
    }
    &-slide {
        width: 100%;
        height: 20%;
        font-size: 0.2rem;
        line-height: 1.6rem;
        color: #ffffffd0;
        display: flex;
        div {
            flex-grow: 1;
        }
        .slide {
            position: relative;
            width: 68%;
            height: 100%;
        }
        .maxtime {
            text-align: right;
        }
    }
    &-btn {
        box-sizing: border-box;
        width: 100%;
        height: 45%;
        display: flex;
        line-height: 3.6rem;
        padding: 0 1.5rem;
        li {
            font-size: 1.5rem;
            flex-grow: 1;
            text-align: center;
            color: #ffffffd0;
        }
        .playing {
            width: 12%;
            font-size: 3.5rem;
        }
    }
}
</style>
