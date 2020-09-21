<!-- 播放器 -->
<template>
    <div class="music-player">
        <!-- controls -->
        <!-- @play="onPlay"
      @pause="onPause"
      @timeupdate="updateTime"
      @loadedmetadata="onLoadedmetadata"
        @ended="end"-->
        <div class="mini">
            <mini-player
                :playing="playing"
                :show_mini="!fullScreen"
                :music_info="music_info"
                :percentage="percentage"
                @play="play"
            ></mini-player>
        </div>
        <audio
            ref="AudioPlayer"
            @timeupdate="updateTime"
            @loadedmetadata="onLoadedmetadata"
            controls
            src="@/assets/defult-music/defult-one.mp3"
        />
    </div>
</template>

<script>
// FullPlayer
import { MiniPlayer } from "./compontents";
import playerControl from "./miXin/playerControl";
export default {
    components: { MiniPlayer },
    data() {
        return {};
    },
    mixins: [playerControl],
    // 监听属性 类似于data概念
    computed: {
        music_info: function() {
            return {
                name: "摩天动物园",
                author: "邓紫棋",
                picSrc: "@/assets/defult-image/music.jpg"
            };
        }
    },
    // 监控data中的数据变化
    watch: {
        playing: function (newVal) {
            console.log(newVal);
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {}
};
</script>
<style lang="scss" scoped>
// @import url(); 引入公共css类
.music-player {
}
</style>
