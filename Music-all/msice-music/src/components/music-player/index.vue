<!-- 播放器 -->
<template>
    <div class="music-player">
        <!-- controls -->
        <!-- @play="onPlay"
      @pause="onPause"
      @timeupdate="updateTime"
      @loadedmetadata="onLoadedmetadata"
        @ended="end"-->
        <div v-show="fullScreen">
            <full-player
                :playing="playing"
                :show_mini="!fullScreen"
                :music_info="music_info"
                :percentage="percentage"
                @play="play"
                @setfullscreen="setfullscreen"
            ></full-player>
        </div>
        <div class="mini" v-show="!fullScreen">
            <mini-player
                :playing="playing"
                :show_mini="!fullScreen"
                :music_info="music_info"
                :percentage="percentage"
                @play="play"
                @setfullscreen="setfullscreen"
            ></mini-player>
        </div>
        <audio
            ref="AudioPlayer"
            @timeupdate="updateTime"
            @loadedmetadata="onLoadedmetadata"
            controls
            :src="music_info.musicUrl"
        >
            浏览器不支持该播放器
        </audio>
    </div>
</template>

<script>
// FullPlayer
import { MiniPlayer, FullPlayer } from "./compontents";
import playerControl from "./miXin/playerControl";
export default {
    components: { MiniPlayer, FullPlayer },
    data() {
        return {};
    },
    mixins: [playerControl],
    // 监听属性 类似于data概念
    computed: {
        music_info: function() {
            return {
                name: this.musicName,
                author: this.musicAuthor,
                picSrc: this.musicPicUrl,
                musicUrl: this.musicUrl
            };
        }
    },
    // 监控data中的数据变化
    watch: {
        playing: function(newPlaying) {
            const audio = this.$refs.AudioPlayer;
            this.$nextTick(() => {
                newPlaying ? audio.play() : audio.pause();
            });
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
</style>
