<!-- 歌词组件 -->
<template>
  <div class="CommonLyric">
    <div class="lyric" ref="lyricText" @click="chengeShow">
      <li
        v-for="item in lyricText"
        :key="item.LyricIndex"
        ref="lyricLine"
        :class="index==item.LyricIndex?'active':''"
      >{{item.Lyriclrc}}</li>
    </div>
    <div class="voice">
      <div class="voiceBG" />
      <span class="iconfont icon-laba" />
      <div class="volume" ref="slider" @click="chengeWidth">
        <li class="progress" :style="{width:setwidth+'%'}" />
        <li
          class="btn"
          ref="btn"
          :style="{left:setwidth+'%'}"
          @touchstart.prevent="start"
          @touchmove.prevent="move"
          @touchend="end"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { chengeLyric } from "../../js/Lyric";
import Vue from "vue";
export default {
  data() {
    return {
      setwidth: 100,
      lyricText: "",
      height: 0,
      index: -1,
      setType: true,
      voiceType: true
    };
  },
  props: {
    Time: {
      type: Number
    },
    LyricText: {
      type: String
    },
    Volume: {
      type: Number
    },
    LyricShow: {
      type: Boolean
    },
    MusicLyricType: {
      type: Boolean
    }
  },
  methods: {
    start() {
      this.voiceType = false;
    },
    chengeWidth(e) {
      this.voiceType = false;
      const wid = this.$refs.slider.offsetWidth;
      const left = this.$refs.slider.offsetLeft - wid / 2;
      const clientX = e.clientX;
      this.setwidth = ((clientX - left) / wid) * 100;
      this.$emit("chengeVolume", (clientX - left) / wid);
      this.voiceType = true;
    },
    move(e) {
      if (this.voiceType) {
        return;
      }
      const wid = this.$refs.slider.offsetWidth;
      const left = this.$refs.slider.offsetLeft - wid / 2;
      const clientX = e.touches[0].clientX;
      if (((clientX - left) / wid) * 100 >= 100) {
        this.setwidth = 100;
        this.end();
        return;
      }
      if (((clientX - left) / wid) * 100 <= 0) {
        this.setwidth = 0;
        this.end();
        return;
      }
      this.setwidth = ((clientX - left) / wid) * 100;
      this.$emit("chengeVolume", (clientX - left) / wid);
    },
    end() {
      this.$emit("chengeVolume", this.setwidth / 100);
      this.voiceType = true;
    },
    setLyric() {
      for (let i = 0; i < this.lyricText.length; i++) {
        Vue.set(
          this.lyricText[i],
          "lineHeight",
          this.$refs.lyricLine[i].offsetHeight
        );
      }
    },
    chengeShow() {
      this.$emit("chengeShow", false);
    }
  },
  watch: {
    MusicLyricType() {
      this.index = -1;
      this.$emit("chengeShow", false);
    },
    Time(newval) {
      // if (this.LyricShow) {
      this.lyricText.forEach((text, index) => {
        if (newval >= text.Lyrictime) {
          if (index + 1 < this.lyricText.length) {
            if (
              this.index !== text.LyricIndex &&
              newval < this.lyricText[index + 1].Lyrictime
            ) {
              if (this.LyricShow) {
                this.index = text.LyricIndex;
              }
              this.$emit("chengeLrc", text.Lyriclrc);
            }
          } else {
            if (this.index !== text.LyricIndex) {
              if (this.LyricShow) {
                this.index = text.LyricIndex;
              }
              this.$emit("chengeLrc", text.Lyriclrc);
            }
          }
        }
      });
      // }
    },
    LyricShow() {
      this.setLyric();
      if (this.lyricText !== "") {
        this.lyricText.forEach((text, index) => {
          if (index < this.lyricText.length - 1) {
            if (
              this.Time >= text.Lyrictime &&
              this.Time < this.lyricText[index + 1].Lyrictime
            ) {
              this.index = text.LyricIndex;
              this.$refs.lyricText.scrollTop = 0;
              for (let j = 0; j <= this.index; j++) {
                this.$refs.lyricText.scrollTop += this.lyricText[j].lineHeight;
              }
            }
          }
        });
      }
    },
    index(newval, oldval) {
      if (oldval === -1) {
        oldval = 0;
      }
      let i = 0;
      this.$refs.lyricText.scrollTop = 0;
      if (this.LyricShow) {
        for (let j = 0; j <= oldval; j++) {
          this.$refs.lyricText.scrollTop += this.lyricText[j].lineHeight;
        }
        if (newval > oldval) {
          i = oldval;
          for (i; i < newval; i++) {
            this.$refs.lyricText.scrollTop += this.lyricText[i].lineHeight;
          }
        } else {
          i = oldval;
          for (i; i > newval; i--) {
            this.$refs.lyricText.scrollTop -= this.lyricText[i].lineHeight;
          }
        }
      }
    },
    LyricText() {
      this.lyricText = chengeLyric(this.LyricText);
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style lang='less' scoped>
/* @import url(); 引入css类 */
.CommonLyric {
  position: relative;
  width: 100%;
  height: 100%;
  //   background-color: rgb(0, 255, 191);
}
.CommonLyric .voice {
  position: absolute;
  top: 0;
  width: 100%;
  height: 5%;
  touch-action: none;
  // background-color: #fff;
  .voiceBG {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    // filter: blur(60px);
    // filter: drop-shadow(3px 0px #979797);
  }
  span {
    position: absolute;
    left: 5%;
    top: 50%;
    font-size: 0.28rem;
    transform: translateY(-40%);
    color: rgb(230, 230, 230);
  }
}
.CommonLyric .voice .volume {
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-50%);
  width: 75%;
  height: 0.05rem;
  background-color: rgba(221, 218, 218, 0.856);
  .progress {
    height: 100%;
    background-color: rgb(230, 230, 230);
  }
  .btn {
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    height: 0.18rem;
    width: 0.18rem;
    border-radius: 50%;
    background-color: #fff;
  }
}
.CommonLyric .lyric {
  position: absolute;
  top: 5%;
  width: 100%;
  height: 15%;
  overflow-y: scroll;
  padding: 55% 0 53% 0;
  // background-color: rgba(56, 56, 56, 0.13);
  li {
    width: 80%;
    font-size: 0.3rem;
    // line-height: 0.3rem;
    padding: 0.2rem 0;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.6);
  }
  .active {
    color: #ffffff;
  }
}
.CommonLyric .lyric::-webkit-scrollbar {
  display: none;
}
</style>
