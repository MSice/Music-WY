<!-- 全局播放组件  -->
<template>
  <div v-show="MusicList!=''">
    <div class="Miniplayer" v-show="!fullScreen" ref="Miniplayer">
      <div class="Miniplayer-pic" ref="MiniplayerPic" @click="setFullScreen(!fullScreen)">
        <img :src="MusicAudio.MusicPic" alt />
      </div>
      <div class="info">
        <li class="info-song">{{MusicAudio.MusicSong}}</li>
        <li class="info-singer">
          <span v-show="!playing">{{MusicAudio.MusicSinger}}</span>
          <span v-show="playing">{{Fullpalyer.Lyric.nowLine}}</span>
        </li>
      </div>
      <div class="palyingBG">
        <div class="palying" ref="mpalying" @click="play()">
          <el-progress
            type="circle"
            :percentage="percentage"
            color="#f56c6c"
            :show-text="false"
            :width="Miniplayer.width"
            :stroke-width="Miniplayer.strokeWidth"
          />
          <span :class="['iconfont',playing?'icon-la-':'icon-yousanjiao']" />
        </div>
      </div>
      <div class="musicList">
        <span class="iconfont icon-caidan" @click="ListShow=!ListShow" />
      </div>
    </div>
    <div class="Fullplayer" :style="{height:Fullpalyer.height+'px'}" v-show="fullScreen">
      <div
        class="FullBG"
        :style="{height:Fullpalyer.height+'px','background-image': 'url('+MusicAudio.MusicPic+')'}"
      />
      <div class="nav">
        <span class="iconfont icon-fanhui-wangyiicon" @click="setFullScreen(!fullScreen)" />
        <div class="info">
          <li class="song">{{MusicAudio.MusicSong}}</li>
          <li class="singer">{{MusicAudio.MusicSinger}}</li>
        </div>
        <span class="iconfont icon-fenxiangpt" />
      </div>
      <div class="Pic-Lyric">
        <div class="Pic-nav" v-show="!Fullpalyer.Lyric.show">
          <div
            class="pic"
            ref="FullplayerPic"
            @click="Fullpalyer.Lyric.show=!Fullpalyer.Lyric.show"
          >
            <img :src="MusicAudio.MusicPic" alt />
          </div>
          <div class="Pnav">
            <li class="iconfont icon-xihuan-kongpt-wangyiicon" />
            <li class="iconfont icon-xiazaipt" />
            <li class="iconfont icon-lingsheng1" />
            <li class="iconfont icon-pinglunpt1">
              <span>10w+</span>
            </li>
            <li class="iconfont icon-xinxipt" />
          </div>
        </div>
        <div class="Lyric" v-show="Fullpalyer.Lyric.show">
          <Lyric
            :Time="musicinfo.NowTime"
            :LyricShow="Fullpalyer.Lyric.show"
            @chengeVolume="chengeVolume"
            @chengeShow="chengeShow"
            @chengeLrc="chengeNowLine"
            :LyricText="MusicAudio.MusicLyric"
            :MusicLyricType="MusicAudio.MusicLyricType"
          />
        </div>
      </div>
      <div class="ProgAndPlay">
        <div class="progress">
          <bar
            :AllTime="musicinfo.maxTime"
            :Time="musicinfo.nowTime"
            :width="percentage"
            :MaxTime="musicinfo.MaxTime"
            @setTime="setTime"
          />
        </div>
        <div class="player">
          <li :class="['iconfont',mode.class]" @click="chengMode" />
          <li class="iconfont icon-shangyiqu" @click="LastMusic" />
          <li :class="['iconfont',playing?'icon-bofang':'icon-zanting','palying']" @click="play()" />
          <li class="iconfont icon-xiayiqu" @click="NextMusic" />
          <li class="iconfont icon-caidan" @click="ListShow=!ListShow" />
        </div>
      </div>
    </div>
    <transition name="ListShow">
      <div
        class="PlayList"
        :style="{height:Fullpalyer.height+'px'}"
        v-show="ListShow"
        @click="ListShow=!ListShow"
      >
        <div class="swiper" @click.stop>
          <PlayList
            :ListID="MusicListID"
            :ListShow="ListShow"
            :MusicID="MusicAudio.MusicId"
            @Playthis="Playthis"
            @chengemode="chengMode"
            @chengeFrom="chengeFrom"
          />
        </div>
      </div>
    </transition>
    <transition name="listFromShow">
      <div class="list-from" v-show="MusicAudio.MusicFromShow">
        <div>{{MusicAudio.MusicFrom}}</div>
      </div>
    </transition>
    <!-- controls -->
    <audio
      ref="AudioPlayer"
      @play="onPlay"
      @pause="onPause"
      @timeupdate="updateTime"
      @loadedmetadata="onLoadedmetadata"
      @ended="end"
      :src="MusicAudio.MusicUrl"
    />
  </div>
</template>

<script>
import bar from "./components/Bar.vue";
import Lyric from "./components/Lyric.vue";
import PlayList from "./components/PlayingList.vue";
import { playMode } from "../js/mode.js";
import { mapGetters, mapMutations } from "vuex";
import {
  _getCheckMusic,
  _getLyric,
  _getSongDetail,
  _getSongUrl,
  _getCommentMusic
} from "@/api/API.js";
import Vue from "vue";
export default {
  data() {
    return {
      percentage: 0,
      docmHeight: document.documentElement.clientHeight,
      ListShow: false,
      musicinfo: {
        MaxTime: 0,
        NowTime: 0,
        maxTime: "",
        nowTime: "00:00"
      },
      MusicAudio: {
        MusicId: 0,
        MusicLyricType: true,
        MusicUrl: "",
        MusicSinger: "",
        MusicSong: "",
        MusicPic: "",
        MusicLyric: "该歌曲暂无歌词",
        MusicLoading: false,
        MusicFrom: "",
        MusicFromShow: false
      },
      Miniplayer: {
        type: false,
        width: 35,
        strokeWidth: 2
      },
      Fullpalyer: {
        height: 0,
        Lyric: {
          show: false,
          nowLine: ""
        }
      }
    };
  },
  computed: {
    ...mapGetters([
      "playing",
      "fullScreen",
      "MusicListID",
      "PlayingIndex",
      "MusicList",
      "RandomList",
      "mode"
    ])
  },
  watch: {
    // MusicList() {
    //   this.chengePlayingInd(-1);
    // },
    playing(newPlaying) {
      const audio = this.$refs.AudioPlayer;
      if (newPlaying) {
        this.$refs.MiniplayerPic.style.animationPlayState = "running";
        this.$refs.FullplayerPic.style.animationPlayState = "running";
      } else {
        this.$refs.MiniplayerPic.style.animationPlayState = "paused";
        this.$refs.FullplayerPic.style.animationPlayState = "paused";
      }
      this.$nextTick(() => {
        newPlaying ? audio.play() : audio.pause();
      });
    },
    PlayingIndex(newind) {
      if (newind >= 0) {
        if (this.mode !== playMode.random) {
          this.MusicAudio.MusicId = this.MusicList[newind].id;
        } else {
          this.MusicAudio.MusicId = this.RandomList[newind].id;
        }
        this.getAll(this.MusicAudio.MusicId);
      }
    },
    docmHeight() {
      this.setALL();
    }
  },
  methods: {
    ...mapMutations({
      setPlaying: "music_Start",
      setFullScreen: "music_FullScreen",
      chengePlayingInd: "chenge_PlayingIndex",
      chengeMode: "chenge_Mode",
      chegeRandomList: "chege_RandomList"
    }),
    // Get相关
    getAll(id, type = true) {
      this.MusicAudio.MusicId = id;
      this.MusicAudio.MusicLyricType = !this.MusicAudio.MusicLyricType;
      this.percentage = 0;
      this.MusicAudio.MusicLoading = false;
      this.setPlaying(false);
      if (this.getMusicCheck(id)) {
        this.gerMusicUrl(id, type);
      } else {
        this.NextMusic();
      }
      this.getMusicInfo(id);
      this.getLyric(id);
      this.getCommentMusic(id);
    },
    getMusicCheck(id) {
      let type = true;
      _getCheckMusic(id).then(res => {
        type = res;
      });
      return type;
    },
    getMusicInfo(id) {
      _getSongDetail(id).then(res => {
        this.MusicAudio.MusicSinger = res.data.songs[0].ar[0].name;
        this.MusicAudio.MusicSong = res.data.songs[0].name;
        this.MusicAudio.MusicPic = res.data.songs[0].al.picUrl;
        this.Fullpalyer.Lyric.nowLine = res.data.songs[0].ar[0].name;
      });
    },
    getCommentMusic(id) {
      _getCommentMusic(id).then(res => {
        console.log(res);
      });
    },
    getLyric(id) {
      _getLyric(id).then(res => {
        this.MusicAudio.MusicLyric = res.data.lrc.lyric;
      });
    },
    gerMusicUrl(id, type) {
      _getSongUrl(id).then(res => {
        this.MusicAudio.MusicUrl = res.data.data[0].url;
        this.MusicAudio.MusicLoading = true;
        if (type) {
          this.play();
        }
      });
    },
    // music相关
    play() {
      if (this.MusicAudio.MusicUrl === "" && this.MusicList !== "") {
        this.MusicAudio.MusicId = this.MusicList[0].id;
        this.chengePlayingInd(0);
      }
      if (this.MusicAudio.MusicLoading && this.MusicAudio.MusicUrl !== "") {
        this.setPlaying(!this.playing);
      }
    },

    // audio控件函数
    // audio  onLoadedmetadata 事件当指定的音频/视频的元数据已加载时，会发生 loadedmetadata 事件
    onLoadedmetadata(e) {
      Vue.set(this.musicinfo, "MaxTime", parseInt(e.target.duration));
      const time = this.musicinfo.MaxTime;
      Vue.set(this.musicinfo, "maxTime", this.formTime(time));
    },
    updateTime(e) {
      this.musicinfo.currentTime = parseInt(e.target.currentTime);
      this.musicinfo.NowTime = e.target.currentTime;
      const time = this.musicinfo.currentTime;
      Vue.set(this.musicinfo, "nowTime", this.formTime(time));
      for (let i = 0; i < 10; i++) this.Miniplayer.imgRotate += 0.1;
      if (this.musicinfo.currentTime === 0) {
        this.percentage = 0;
      } else {
        const time = this.musicinfo.currentTime / this.musicinfo.MaxTime;
        this.percentage = time * 100;
      }
    },
    onPlay() {
      Vue.set(this.$store.state.PlayerAudio, "playing", true);
    },
    onPause() {
      Vue.set(this.$store.state.PlayerAudio, "playing", false);
    },
    end() {
      if (this.mode.type === 0) {
        this.percentage = 0;
        this.getAll(this.MusicAudio.MusicId);
      } else {
        this.NextMusic();
      }
    },
    NextMusic() {
      if (this.PlayingIndex + 1 === this.MusicList.length) {
        this.chengePlayingInd(0);
        return;
      }
      this.chengePlayingInd(this.PlayingIndex + 1);
    },
    LastMusic() {
      if (this.PlayingIndex - 1 === -1) {
        this.chengePlayingInd(this.MusicList.length - 1);
        return;
      }
      this.chengePlayingInd(this.PlayingIndex - 1);
    },
    formTime(time) {
      let stime = 0;
      let ltime = 0;
      let rtime = "";
      stime = Math.floor(time / 60);
      ltime = time % 60;
      if (stime < 10) rtime = "0" + stime + ":";
      else rtime = stime + ":";
      if (ltime < 10) rtime = rtime + "0" + ltime;
      else rtime = rtime + ltime;
      return rtime;
    },
    Playthis(ind, id, type = false) {
      const playType = this.playing;
      this.ListShow = false;
      if (id === 0) {
        const audio = this.$refs.AudioPlayer;
        audio.currentTime = 0;
        this.setPlaying(false);
        return;
      }
      if (type) {
        this.MusicAudio.MusicId = this.MusicList[ind].id;
        this.getAll(this.MusicAudio.MusicId, playType);
      } else {
        this.chengePlayingInd(ind);
        this.MusicAudio.MusicId = id;
      }
    },
    setTime(time) {
      const audio = this.$refs.AudioPlayer;
      audio.currentTime = time;
    },
    chengeVolume(volume) {
      const audio = this.$refs.AudioPlayer;
      audio.volume = volume;
    },
    chengeNowLine(val) {
      this.Fullpalyer.Lyric.nowLine = val;
    },
    chengeShow(type) {
      this.Fullpalyer.Lyric.show = type;
    },
    chengeFrom(from = "") {
      if (from !== "") {
        this.MusicAudio.MusicFrom = from;
      }
      this.MusicAudio.MusicFromShow = !this.MusicAudio.MusicFromShow;
    },
    chengMode() {
      let modeIdex = this.mode.type + 1;
      const newList = this.MusicList.slice(0);
      if (modeIdex > 2) {
        modeIdex = 0;
      }
      if (modeIdex === 0) {
        this.chengeMode(playMode.Only);
      } else if (modeIdex === 1) {
        this.chengeMode(playMode.loop);
      } else if (modeIdex === 2) {
        this.chengeMode(playMode.random);
        this.chegeRandomList(newList);
      }
    },
    setALL() {
      this.Miniplayer.type = true;
      this.MiniplayerOption();
      this.FullpalyerOption();
    },

    MiniplayerOption() {
      const htmlDom = document.documentElement;
      const hHeight = htmlDom.clientHeight;
      Vue.set(this.Miniplayer, "width", hHeight * 0.05);
      Vue.set(this.Miniplayer, "strokeWidth", hHeight * 0.0025);
    },
    FullpalyerOption() {
      const htmlDom = document.documentElement;
      const hHeight = htmlDom.clientHeight;
      this.Fullpalyer.height = hHeight;
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // 监听resize方法
    this.MusicAudio.MusicUrl = "";
    this.setALL();
    window.addEventListener("resize", this.setALL, false);
  },
  beforeDestroy() {
    // 移除监听
    window.removeEventListener("resize", this.setALL, false);
  },
  components: {
    bar,
    Lyric,
    PlayList
  }
};
</script>
<style lang='less' scoped>
/* @import url(); 引入css类 */
@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes goran {
  0% {
    transform: rotate(0deg) translate(-50%);
  }
  100% {
    transform: rotate(360deg) translate(-50%);
  }
}
/**迷你播放器 */
.Miniplayer {
  position: fixed;
  bottom: 0;
  z-index: 10000;
  width: 100%;
  height: 1rem;
  overflow: hidden;
  border-top: 1px solid #c9c8c8ce;
  background-color: rgba(255, 255, 255, 0.808);
  &-pic {
    width: 0.76rem;
    height: 0.76rem;
    margin: 0.12rem 0.2rem 0;
    border-radius: 50%;
    background-color: rgba(184, 180, 180, 0.808);
    float: left;
    animation: rotating 24s linear infinite;
    animation-play-state: paused;
    img {
      width: 0.76rem;
      height: 0.76rem;
      border-radius: 50%;
    }
  }
  .info {
    width: 60%;
    height: 0.8rem;
    float: left;
    margin: 0.1rem 0;
    &-song {
      height: 0.45rem;
      line-height: 0.45rem;
      padding: 0 0.1rem;
      font-size: 0.3rem;
      overflow: hidden;
      color: rgb(0, 0, 0);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-singer {
      height: 0.35rem;
      line-height: 0.35rem;
      padding: 0 0.1rem;
      font-size: 0.25rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: rgba(139, 139, 139);
    }
  }
}
.Miniplayer .palyingBG {
  position: absolute;
  top: -20%;
  right: 10%;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
}
.Miniplayer .palyingBG:active {
  background-color: rgba(112, 111, 111, 0.212);
}
.Miniplayer .palying {
  position: absolute;
  top: 27%;
  right: 24%;
  height: 47%;
  width: 47%;
  .iconfont {
    position: absolute;
    top: 21%;
    left: 28%;
    font-size: 0.4rem;
    color: #000;
  }
  .icon-la- {
    top: 29%;
    left: 29%;
    font-size: 0.3rem;
    color: #f73c3c;
  }
}
.Miniplayer .musicList {
  position: absolute;
  top: 0;
  right: 0;
  height: 1rem;
  width: 1rem;
  line-height: 1rem;
  font-size: 0.56rem;
  color: #000;
  text-align: center;
}

/* 全屏播放器 */
.Fullplayer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  background-color: rgb(204, 204, 204);
}
.Fullplayer .FullBG {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  filter: blur(90px);
}
.Fullplayer .nav {
  position: absolute;
  top: 0;
  height: 1rem;
  width: 94%;
  padding: 0 3%;
  color: #fff;
  line-height: 1rem;
  // background-color: rgb(0, 225, 255);
  span {
    position: absolute;
    top: 2%;
    left: 2%;
    font-size: 0.5rem;
  }
  .icon-fenxiangpt {
    left: 89%;
  }
}
.Fullplayer .nav .info {
  font-size: 0.34rem;
  position: absolute;
  top: 0%;
  left: 13%;
  height: 100%;
  width: 62%;
  padding: 0.1rem 0;
  .song {
    line-height: 0.5rem;
    width: 100%;
    height: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .singer {
    width: 100%;
    height: 30%;
    line-height: 0.3rem;
    font-size: 0.26rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(255, 255, 255, 0.781);
    // color: #9b9b9b;
  }
}
.Fullplayer .Pic-Lyric {
  position: absolute;
  top: 1rem;
  width: 100%;
  height: 73%;
  text-align: center;
  // background-color: red;
}
.Fullplayer .Pic-Lyric .Pic-nav {
  position: relative;
  width: 96%;
  height: 100%;
  padding: 0 2%;
}
.Fullplayer .Pic-nav .pic {
  position: absolute;
  top: 18%;
  left: 50%;
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 50%;
  transform-origin: 0 50%;
  padding: 1%;
  background-image: url("https://s2.ax1x.com/2019/09/12/n0yYqK.md.png");
  background-size: cover;
  background-color: rgba(133, 131, 131, 0.534);
  animation: goran 24s linear infinite;
  animation-play-state: paused;
  img {
    margin: 0.9rem;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
  }
}
.Fullplayer .Pic-nav .Pnav {
  position: absolute;
  bottom: 0%;
  width: 96%;
  height: 1rem;
  display: flex;
  li {
    position: relative;
    flex-grow: 1;
    margin: 0 2%;
    line-height: 1rem;
    font-size: 0.6rem;
    color: rgba(255, 255, 255, 0.6);
    span {
      position: absolute;
      top: 20%;
      right: -2%;
      line-height: 0.2rem;
      font-size: 0.2rem;
    }
  }
}
.Fullplayer .Lyric {
  position: relative;
  width: 96%;
  height: 100%;
  padding: 0 2%;
}
.Fullplayer .ProgAndPlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 19%;
  color: rgba(255, 255, 255, 0.692);
  .progress {
    position: relative;
    width: 100%;
    height: 0.8rem;
    margin: 0 auto;
    line-height: 0.8rem;
  }
  .player {
    width: 94%;
    height: 1.9rem;
    display: flex;
    padding: 0 3%;
    li {
      text-align: center;
      margin: 0.1rem;
      height: 1.4rem;
      line-height: 1.4rem;
      font-size: 0.6rem;
      flex-grow: 1;
    }
    .palying {
      font-size: 1.4rem;
    }
  }
}

/**当前播放歌单 */
.PlayList {
  position: fixed;
  top: 0%;
  width: 100%;
  z-index: 10001;
  background-color: rgba(58, 53, 53, 0.23);
  .swiper {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70%;
  }
}
.ListShow {
  &-enter {
    background-color: rgba(58, 53, 53, 0.23);
    &-to {
      background-color: rgba(58, 53, 53, 0.23);
    }
    &-active {
      transition: transform 0.1s ease;
    }
  }
  &-leave {
    background-color: rgba(58, 53, 53, 0.23);
    &-to {
      background-color: rgba(58, 53, 53, 0.23);
    }
    &-active {
      transition: transform 0.5s ease;
    }
  }
}

/**播放来源 */
.list-from {
  position: fixed;
  bottom: 12%;
  left: 0;
  width: 90%;
  padding: 0 5%;
  z-index: 99999;
  text-align: center;
  font-size: 0.28rem;
  line-height: 0.4rem;
  overflow: auto;
  word-wrap: break-word;
  word-break: break-all;
  div {
    display: inline-block;
    padding: 2% 4%;
    color: #fff;
    border-radius: 0.08rem;
    background-color: rgba(0, 0, 0, 0.767);
  }
}
.listFromShow {
  &-enter {
    opacity: 0;
    &-to {
      opacity: 1;
    }
    &-active {
      transition: opacity 0.5s ease;
    }
  }
  &-leave {
    opacity: 1;
    &-to {
      opacity: 0;
    }
    &-active {
      transition: opacity 0.5s ease;
    }
  }
}
</style>
