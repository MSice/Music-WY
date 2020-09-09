<!-- 播放歌单组件 -->
<template>
  <div>
    <transition name="ListShow">
      <div class="PosionSwiper" ref="PosionSwiper" v-show="ListShow">
        <swiper :options="swiperOption">
          <swiper-slide>
            <div class="otherTitle">
              <div class="otherTitle-name">历史播放</div>
              <div class="otherTitle-from">{{Listfrom.historyFrom}}</div>
            </div>
            <div class="otherListLineBG">
              <li v-for="item in HistoryMusicList" :key="item.id">
                <span>{{item.name}}</span>
                <span class="singer">
                  -
                  <span v-for="(siger,index) in item.ar" :key="siger.id">
                    <span v-if="index!=0">/</span>
                    <span>{{siger.name}}</span>
                  </span>
                </span>
              </li>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="otherTitle">
              <div class="otherTitle-name">上一次播放</div>
              <div class="otherTitle-from">{{Listfrom.lastFrom}}</div>
            </div>
            <div class="otherListLineBG">
              <li v-for="item in OldMusicList" :key="item.id">
                <span>{{item.name}}</span>
                <span class="singer">
                  -
                  <span v-for="(siger,index) in item.ar" :key="siger.id">
                    <span v-if="index!=0">/</span>
                    <span>{{siger.name}}</span>
                  </span>
                </span>
              </li>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="title">
              <div class="title-top">
                当前播放
                <span>({{MusicList.length}})</span>
              </div>
              <div class="title-bottom">
                <div class="title-bottom-left">
                  <li class="mode" @click="chengemode">
                    <span :class="['iconfont','FSize',mode.class]" />
                    {{mode.text}}
                  </li>
                  <li class="collection">
                    <span class="iconfont icon-wenjianjia" />
                    收藏全部
                  </li>
                </div>
                <div class="title-bottom-right" @click="DeleteALL">
                  <span class="iconfont icon-lajitong1" />
                </div>
              </div>
            </div>
            <div class="ListLineBG">
              <div class="ListLine" v-for="(item,index) in MusicList" :key="item.id">
                <div class="ListLine-left">
                  <div
                    :class="['ListLine-left-info',MusicID==item.id?'ListLine-left-active':'']"
                    @click="playThis(item.id,index)"
                  >
                    <span class="iconfont icon-laba1" v-show="MusicID==item.id" />
                    <span>{{item.name}}</span>
                    <span :class="['singer',MusicID==item.id?'singer-active':'']">
                      -
                      <span v-for="(siger,index) in item.ar" :key="siger.id">
                        <span v-if="index!=0">/</span>
                        <span>{{siger.name}}</span>
                      </span>
                    </span>
                  </div>
                  <div class="ListLine-left-from" v-show="MusicID==item.id">
                    <span
                      @touchstart.prevent="show(item.MusicFrom)"
                      @touchend="end"
                      :class="Listshow?'active':''"
                    >播放来源</span>
                  </div>
                </div>
                <div class="ListLine-right">
                  <span class="iconfont icon-cha" @click="deleLine(index)" />
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { _getPlaylistDetail } from "@/api/API.js";
import Vue from "vue";
export default {
  data() {
    return {
      Listshow: false,
      swiperOption: {
        width: 380,
        spaceBetween: 20,
        slideClass: "slider",
        slideActiveClass: "slider-active",
        slidesOffsetBefore: 20,
        initialSlide: 2,
        nowINdex: 2,
        centeredSlides: true
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true
        //   // bulletClass: "bullet"
        //   // bulletActiveClass: "bullet-active"
        // }
      }
    };
  },
  props: {
    ListID: {
      type: String
    },
    ListShow: {
      type: Boolean
    },
    MusicID: {
      type: Number
    }
  },
  computed: {
    ...mapGetters([
      "PlayingIndex",
      "MusicListID",
      "MusicList",
      "HistoryMusicList",
      "OldMusicList",
      "Listfrom",
      "mode"
    ])
  },
  watch: {},
  methods: {
    getAll(id) {
      this.getMusicListInfo(id);
    },
    getMusicListInfo(id) {
      _getPlaylistDetail(id).then(res => {
        const trcks = res.data.playlist.tracks;
        for (let i = 0; i < trcks.length; i++) {
          Vue.set(
            trcks[i],
            "MusicFrom",
            "歌单 「" + res.data.playlist.name + "」"
          );
        }
        this.chengeList(res.data.playlist.tracks);
        this.chengeListfrom("歌单 「" + res.data.playlist.name + "」");
      });
    },
    show(show) {
      this.$emit("chengeFrom", show);
      setTimeout(() => {
        this.$emit("chengeFrom");
      }, 2500);
      this.Listshow = true;
    },
    end() {
      this.Listshow = false;
    },
    playThis(id, ind) {
      this.$emit("Playthis", ind, id);
    },
    deleLine(ind) {
      this.deleteMusicListLine(ind);
      this.$emit("Playthis", ind, 1, true);
    },
    chengemode() {
      this.$emit("chengemode");
    },
    DeleteALL() {
      this.chengeList("");
      this.$emit("Playthis", -1, 0);
    },
    setwidth() {
      const htmlDom = document.documentElement;
      this.swiperOption.width = htmlDom.clientWidth * 0.86;
      this.swiperOption.spaceBetween = htmlDom.clientWidth * 0.03;
      this.swiperOption.slidesOffsetBefore = htmlDom.clientWidth * 0.07;
    },
    ...mapMutations({
      chengeList: "chenge_MusicList",
      chegeRandomList: "chege_RandomList",
      deleteMusicListLine: "delete_MusicListLine",
      chengeListfrom: "chenge_Listfrom"
    })
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {
    this.setwidth();
    this.getAll(2879909669);
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style lang='less'  scoped>
/* @import url(); 引入css类 */
.PosionSwiper {
  position: absolute;
  bottom: 6%;
  width: 100%;
  height: 9rem;
}
.slider {
  border-radius: 0.35rem;
  height: 9rem;
  background-color: #fff;
  flex-shrink: 0;
  width: 100%;
  position: relative;
  opacity: 0.5;
  transition-property: transform;
}
.slider-active {
  pointer-events: auto;
  opacity: 1;
}
// List GO
// 当前播放歌单
.title {
  height: 15.5%;
  width: 92%;
  padding: 2% 4% 0;
  border-radius: 0.35rem 0.35rem 0 0;
  // background-color: red;
  &-top {
    font-size: 0.35rem;
    padding: 0 3%;
    height: 0.65rem;
    line-height: 0.65rem;
    // background-color: rgb(0, 225, 255);
    span {
      font-size: 0.3rem;
      color: rgb(112, 112, 112);
    }
  }
  &-bottom {
    width: 100%;
    height: 0.48rem;
    line-height: 0.48rem;
    font-size: 0.27rem;
    display: flex;
    .iconfont {
      color: rgb(139, 139, 139);
    }
    // background-color: rgb(234, 0, 255);
    &-left {
      width: 82%;
      height: 100%;
      display: flex;
      flex-grow: 1;
      // background-color: rgb(0, 4, 255);
      div {
        flex-grow: 1;
        .FSize {
          font-size: 0.32rem;
        }
      }
      .collection {
        text-align: right;
        margin-left: 40%;
        // background-color: rgb(255, 0, 106);
      }
    }
    &-right {
      flex-grow: 1;
      padding-left: 5%;
      font-size: 0.38rem;
      text-align: right;
    }
  }
}
.ListLineBG {
  height: 83%;
  width: 100%;
  overflow-y: scroll;
  border-radius: 0 0 0.35rem 0.35rem;
}
.ListLineBG::-webkit-scrollbar {
  display: none;
}
.ListLineBG .ListLine {
  position: relative;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.25rem;
  // background-color: rgb(0, 247, 255);
  &-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 82%;
    padding-left: 4%;
    &-active {
      // letter-spacing: 0.2rem;
      color: red;
    }
    &-info {
      float: left;
      width: 70%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      // background-color: rgb(247, 0, 255);
      .iconfont {
        font-size: 0.3rem;
        // font-weight: 500;
        margin-right: 0.15rem;
        color: red;
      }
      .singer {
        font-size: 0.2rem;
        margin-left: 0.05rem;
        display: inline-block;
        color: rgb(139, 139, 139);
        &-active {
          color: red;
        }
      }
    }
    &-from {
      float: left;
      width: 30%;
      text-align: center;
      touch-action: none;
      // background-color: rgb(0, 17, 255);
      span {
        padding: 0.05rem 0.2rem;
        border-radius: 0.25rem;
        border: 1px solid rgba(214, 206, 206, 0.9);
      }
      .active {
        background-color: rgba(214, 206, 206, 0.7);
      }
    }
  }
  &-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 14%;
    height: 0.8rem;
    text-align: center;
  }
}
.ListShow {
  &-enter-active,
  &-leave-active {
    transition: transform 0.5s ease;
  }
  &-enter {
    transform: translateY(120%);
    &-to {
      transform: translateY(0%);
    }
  }
  &-leave {
    transform: translateY(0%);
    &-to {
      transform: translateY(120%);
    }
  }
}

// 其他播放歌单
.otherTitle {
  height: 14%;
  width: 92%;
  padding: 3.5% 4% 0;
  border-radius: 0.35rem 0.35rem 0 0;
  &-name {
    width: 100%;
    font-size: 0.35rem;
    height: 0.63rem;
    line-height: 0.63rem;
  }
  &-from {
    width: 100%;
    font-size: 0.27rem;
    height: 0.5rem;
    line-height: 0.5rem;
    color: rgb(139, 139, 139);
  }
}
.otherListLineBG {
  width: 92%;
  height: 83.5%;
  padding: 0 4%;
  overflow-y: scroll;
  border-radius: 0 0 0.35rem 0.35rem;
  li {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.26rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .singer {
      font-size: 0.2rem;
      margin-left: 0.05rem;
      color: rgb(139, 139, 139);
    }
  }
  .otherListLineBG::-webkit-scrollbar {
    display: none;
  }
}
</style>
