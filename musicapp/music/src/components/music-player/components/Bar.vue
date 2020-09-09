<!-- 播放进度滑块组件 -->
<template>
  <div class="Bar">
    <span>{{nowTime}}</span>
    <div class="slider" ref="slider" @click="chengPercentage">
      <li class="SProg" :style="{width:percentage+'%'}" />
      <li
        class="Slide"
        :style="{left:percentage+'%'}"
        @touchstart.prevent="start"
        @touchmove.prevent="move"
        @touchend="end"
      />
    </div>
    <span>{{AllTime==""?maxTime:AllTime}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxTime: "00:00",
      nowTime: "00:00",
      percentage: 0,
      touch: {
        type: true,
        width: 0
      }
    };
  },
  props: {
    MaxTime: {
      type: Number
    },
    Time: {
      type: String
    },
    AllTime: {
      type: String
    },
    width: {
      type: Number
    },
    MusicID: {
      type: Number
    }
  },
  methods: {
    start(e) {
      this.touch.type = false;
      this.nowTime = this.Time;
    },
    chengPercentage(e) {
      this.touch.type = false;
      const wid = this.$refs.slider.offsetWidth;
      const left = this.$refs.slider.offsetLeft - wid / 2;
      const clientX = e.clientX;
      this.touch.width = ((clientX - left) / wid) * 100;
      this.setpercentage(this.touch.width);
      this.$emit("setTime", (this.MaxTime * this.touch.width) / 100);
      this.touch.type = true;
    },
    move(e) {
      if (this.touch.type) {
        return;
      }
      const wid = this.$refs.slider.offsetWidth;
      const left = this.$refs.slider.offsetLeft - wid / 2;
      const clientX = e.touches[0].clientX;
      this.touch.width = ((clientX - left) / wid) * 100;
      const time = parseInt((this.MaxTime * this.touch.width) / 100);
      this.nowTime = this.formTime(time);
      if (this.touch.width >= 100) {
        this.touch.width = 100;
        this.end();
        return;
      }
      if (this.touch.width <= 0) {
        this.touch.width = 0;
        this.end();
        return;
      }
      this.setpercentage(this.touch.width);
    },
    end() {
      this.touch.type = true;
      this.$emit("setTime", (this.MaxTime * this.touch.width) / 100);
    },
    setpercentage(val) {
      this.percentage = val;
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
    }
  },
  filters: {},
  watch: {
    MusicID() {
      this.maxTime = "00:00";
      this.nowTime = "00:00";
      this.percentage = 0;
      this.touch = {
        type: true,
        width: 0
      };
    },
    width(newval) {
      if (newval && this.touch.type) {
        this.percentage = newval;
      }
    },
    Time(newval) {
      if (newval && this.touch.type) {
        this.nowTime = newval;
      }
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
.Bar {
  width: 100%;
}
span {
  position: absolute;
  top: 50%;
  right: 3%;
  font-size: 0.3rem;
  transform: translateY(-50%);
}
span:nth-child(1) {
  right: 97%;
  transform: translateX(100%) translateY(-50%);
}
.slider {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 68%;
  height: 0.05rem;
  touch-action: none;
  background-color: rgba(250, 250, 250, 0.562);
  .SProg {
    height: 100%;
    background-color: rgba(255, 255, 255, 0.781);
  }
  .Slide {
    position: absolute;
    top: 50%;
    left: 0%;
    height: 0.16rem;
    width: 0.16rem;
    border-radius: 50%;
    background-color: #ffffff;
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>
