<!-- 播放器 -->
<template>
    <div class="music-player">
        <div v-show="fullScreen">
            <full-player
                :playing="playing"
                :show_mini="!fullScreen"
                :music_info="music_info"
                @play="play"
                @setfullscreen="setfullscreen"
            >
                <template v-slot:nowtime>{{nowTime}}</template>
                <template v-slot:slide>
                    <slide-process
                        :percenTage="percentage"
                        @chenge_percentage="chenge_time"
                    ></slide-process>
                </template>
                <template v-slot:maxtime>{{maxTime}} </template>
            </full-player>
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
        <!-- 
            controls -->
        <audio
            ref="AudioPlayer"
            @play="onPlay"
            @pause="onPause"
            @ended="end"
            @timeupdate="updateTime"
            @loadedmetadata="onLoadedmetadata"
            :src="music_info.musicUrl"
        >
            浏览器不支持该播放器
        </audio>
    </div>
</template>

<script>
// FullPlayer
import { MiniPlayer, FullPlayer } from "./compontents";
import { SlideProcess } from "@/components/tool";
import { music_time } from "@/utils/fillter";
import { mapMutations, mapGetters } from "vuex";
import { _getSongDetail, _getSongUrl } from "@/api/musicPlayer";
export default {
    components: { MiniPlayer, FullPlayer, SlideProcess },
    data() {
        return {
            musicUrl: "",
            musicName: "",
            musicPicUrl: "",
            musicAuthor: "",
            percentage: 0,
            time: {
                maxtime: 0,
                nowtime: 0,
            }
        };
    },
    // 监听属性 类似于data概念
    computed: {
        music_info: function() {
            return {
                name: this.musicName,
                author: this.musicAuthor,
                picSrc: this.musicPicUrl,
                musicUrl: this.musicUrl
            };
        },
        maxTime: function() {
            return music_time(this.time.maxtime);
        },
        nowTime: function() {
            return music_time(this.time.nowtime);
        },
        ...mapGetters([
            "playing",
            "fullScreen",
            "musicId",
            "PlayingIndex",
            "MusicList",
            "RandomList",
            "LastMusicList",
            "HistoryMusicList",
            "mode"
        ])
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
    methods: {
        ...mapMutations("musicPlayer", {
            setPlaying: "music_Start",
            setfullscreen: "music_FullScreen"
        }),
        async get_all(id) {
            console.log(id);
            await _getSongDetail(id).then(ret => {
                this.musicName = ret.songs[0].al.name;
                this.musicPicUrl = ret.songs[0].al.picUrl;
                this.musicAuthor = ret.songs[0].ar[0].name;
            });
            await _getSongUrl(id).then(ret => {
                this.musicUrl = ret.data[0].url;
                console.log(this.musicUrl);
            });
        },
        chenge_time(perstenge) {
            this.$refs.AudioPlayer.currentTime = this.time.maxtime * perstenge;
            return true;
        },
        show() {
            this.setFullScreen();
        },

        //audio 相关
        play() {
            this.setPlaying(!this.playing);
        },
        updateTime(e) {
            this.time.nowtime = parseInt(e.target.currentTime);
            if (e.target.currentTime === 0) {
                this.percentage = 0;
            } else {
                const time = e.target.currentTime / this.time.maxtime;
                this.percentage = time;
            }
        },
        onLoadedmetadata(e) {
            this.time.maxtime = e.target.duration;
        },
        onPlay() {
            this.setPlaying(true);
        },
        onPause() {
            this.setPlaying(false);
        },
        end() {
            this.setPlaying(false);
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.get_all(this.musicId);
    },
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {}
};
</script>
<style lang="scss" scoped>
// @import url(); 引入公共css类
</style>
