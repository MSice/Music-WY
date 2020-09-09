<template>
  <div class="content clearfix">
    <div class="SwiperBox">
      <swiper :options="swiperOption" class="Swiper">
        <swiper-slide v-for="(item,index) in auditData" :key="index" class="soild">
          <img :src="item.pic" alt />
          <div class="iconName" :style="{backgroundColor:item.titleColor}">{{item.typeTitle}}</div>
        </swiper-slide>
        <!-- 分页器-->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="IconBox">
      <!-- v-for="(item,index) in iconList" :key="index" -->
      <div class="iconList" v-for="(item,index) in iconList" :key="index">
        <div class="iconList-top">
          <div v-if="index==0" class="today">{{item.toDay}}</div>
          <i :class="['iconfont', item.iconName]"></i>
        </div>
        <div class="iconList-bottom">
          <span>{{item.Name}}</span>
        </div>
      </div>
    </div>
    <div class="SongListBox clearfix">
      <div class="SongListBox-top clearfix">
        <div class="left">推荐歌单</div>
        <div class="right">
          <button>歌单广场</button>
        </div>
      </div>
      <div class="SongListBox-content">
        <div class="songList" v-for="(item,index) in songList" :key="index">
          <div class="image">
            <div class="image-icon">
              <i class="iconfont icon-yousanjiao"></i>
              <span>{{item.playCount}}</span>
            </div>
            <img :src="item.coverImgUrl" alt />
          </div>
          <div class="text">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="NewSong">
      <div class="NewSong-top clearfix">
        <div class="left">
          <span :class="{active:Distrue}" class="xindie" @click="changegd(1)">新碟</span>
          <span class="shuxian">|</span>
          <span :class="{active:Gistrue}" class="xinge" @click="changegd(2)">新歌</span>
        </div>
        <div class="right">
          <button>更多新碟</button>
        </div>
      </div>
      <!-- <div class="NewSong-content">
        <div class="xindieList" v-for="(item1,index1) in xindieList" :key="index1" v-show="Distrue">
          <div class="image">
            <img :src="item1.picUrl" />
          </div>
          <div class="text">{{item1.name}}</div>
        </div>
      </div>
      <div class="NewSong-content1">
        <div class="xingeList" v-for="(item,index) in xingeList" :key="index" v-show="Gistrue">
          <div class="image">
            <img :src="item.album.blurPicUrl" />
          </div>
          <div class="text">{{item.name}}</div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import {
  _getBanner,
  _getTopPlaylist,
  _getTopAlbum,
  _getTopSong
} from "@/api/API";
import Vue from "vue";
export default {
  compontent: {},
  data() {
    return {
      Distrue: true,
      Gistrue: false,
      auditData: [
        {
          url:
            "http://p1.music.126.net/a8iNkcIJUHUm0uEyswrBJA==/109951164855460759.jpg",
          iconName: "独家"
        },
        {
          url:
            "http://p1.music.126.net/tv4TeyEAzQokpCNRJ_d1xg==/109951164856058544.jpg",
          iconName: "直播"
        },
        {
          url:
            "http://p1.music.126.net/I8h8MHMqBqm6zL_xl1GxTg==/109951164854642419.jpg",
          iconName: "视频"
        }
      ],
      iconList: [
        {
          iconName: "icon-rili_fuzhi",
          toDay: "1",
          Name: "每日推荐"
        },
        {
          iconName: "icon-gedan",
          Name: "歌单"
        },
        {
          iconName: "icon-paixingbang",
          Name: "排行榜"
        },
        {
          iconName: "icon-diantai",
          Name: "电台"
        },
        {
          iconName: "icon-sirenfm",
          Name: "私人FM"
        }
      ],
      songList: [
        {
          src:
            "http://p2.music.126.net/Xv7iIYdc-VY3JKWMqBmL1w==/109951163104266482.jpg?param=200y200",
          num: "55万",
          text: "LKS的每首歌只能听10秒歌单"
        },
        {
          src:
            "http://p2.music.126.net/Xv7iIYdc-VY3JKWMqBmL1w==/109951163104266482.jpg?param=200y200",
          num: "55万",
          text: "LKS的每首歌只能听10秒歌单"
        },
        {
          src:
            "http://p2.music.126.net/Xv7iIYdc-VY3JKWMqBmL1w==/109951163104266482.jpg?param=200y200",
          num: "55万",
          text: "LKS的每首歌只能听10秒歌单"
        },
        {
          src:
            "http://p2.music.126.net/Xv7iIYdc-VY3JKWMqBmL1w==/109951163104266482.jpg?param=200y200",
          num: "55万",
          text: "LKS的每首歌只能听10秒歌单"
        },
        {
          src:
            "http://p2.music.126.net/Xv7iIYdc-VY3JKWMqBmL1w==/109951163104266482.jpg?param=200y200",
          num: "55万",
          text: "LKS的每首歌只能听10秒歌单"
        },
        {
          src:
            "http://p2.music.126.net/Xv7iIYdc-VY3JKWMqBmL1w==/109951163104266482.jpg?param=200y200",
          num: "55万",
          text: "LKS的每首歌只能听10秒歌单"
        }
      ],
      xindieList: [
        {
          src:
            "http://p2.music.126.net/Xv7iIYdc-VY3JKWMqBmL1w==/109951163104266482.jpg?param=200y200",
          num: "55万",
          text: "LKS的每首歌只能听10秒歌单"
        },
        {
          src:
            "http://p2.music.126.net/Xv7iIYdc-VY3JKWMqBmL1w==/109951163104266482.jpg?param=200y200",
          num: "55万",
          text: "LKS的每首歌只能听10秒歌单"
        },
        {
          src:
            "http://p2.music.126.net/Xv7iIYdc-VY3JKWMqBmL1w==/109951163104266482.jpg?param=200y200",
          num: "55万",
          text: "LKS的每首歌只能听10秒歌单"
        }
      ],
      xingeList: [
        {
          src:
            "http://p2.music.126.net/Xv7iIYdc-VY3JKWMqBmL1w==/109951163104266482.jpg?param=200y200",
          num: "55万",
          text: "LKS的每首歌只能听10秒歌单"
        },
        {
          src:
            "http://p2.music.126.net/Xv7iIYdc-VY3JKWMqBmL1w==/109951163104266482.jpg?param=200y200",
          num: "55万",
          text: "LKS的每首歌只能听10秒歌单"
        },
        {
          src:
            "http://p2.music.126.net/Xv7iIYdc-VY3JKWMqBmL1w==/109951163104266482.jpg?param=200y200",
          num: "55万",
          text: "LKS的每首歌只能听10秒歌单"
        }
      ],
      swiperOption: {
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // },
        autoplay: {
          delay: 3000 // 1秒切换一次
        },
        pagination: {
          el: ".swiper-pagination"
          // bulletActiveClass: 'my-bullet-active',
        },
        slidesPerView: 1,
        freeMode: false,
        loop: true
      }
    };
  },
  methods: {
    /**获取新碟列表 */
    getTopAlbum() {
      _getTopAlbum().then(res => {
        console.log(res.data.albums);
        this.xindieList = res.data.albums;
      });
    },
    /**获取新歌列表 */
    getTopSong() {
      _getTopSong(0, 3).then(res => {
        // var thisData = res.data.slice(0,2);
        console.log(res.data.data.slice(0, 3));
        // Vue.set(this,'xingeList',res.data.data.slice(0, 3))
        this.xingeList = res.data.data.slice(0, 3);
      });
    },
    /** 获取日期 */
    getData() {
      var date = new Date();
      var thisdata = 1;
      thisdata = date.getDate();
      if (thisdata >= 0 && thisdata <= 9) {
        thisdata = "0" + thisdata;
      }
      this.iconList[0].toDay = thisdata;
    },
    /** 获取轮播图 */
    getBanner() {
      _getBanner().then(res => {
        // console.log(res.data.banners);
        this.auditData = res.data.banners;
      });
    },
    /** 获取热歌单 */
    getTopPlaylist() {
      _getTopPlaylist().then(res => {
        // console.log(res.data.playlists);
        this.songList = res.data.playlists;
      });
    },
    /**新歌新碟切换 */
    changegd(id) {
      if (id === 1) {
        this.Distrue = true;
        this.Gistrue = false;
      }
      if (id === 2) {
        this.Distrue = false;
        this.Gistrue = true;
      }
    }
    /** */
  },
  created() {
    this.getBanner();
    this.getData();
    this.getTopPlaylist();
    this.getTopAlbum();
    this.getTopSong();
  }
};
</script>
<style lang="less" scoped>
.content {
  padding: 0.2rem;
  margin-bottom: 1.5rem;
}
/**顶部轮播图开始 */
// .my-bullet-active{
//   background-color: red;
//   opacity: 1;
// }
.SwiperBox {
  width: 100%;
  height: 3rem;
}
.SwiperBox .Swiper {
  width: 100%;
  height: 3rem;
  border-radius: 0.15rem 0.15rem 0 0.15rem;
}
.SwiperBox .soild {
  position: relative;
}
.SwiperBox .iconName {
  height: 0.4rem;
  background-color: blue;
  color: white;
  z-index: 10;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 0.1rem 0 0 0;
  font-size: 0.25rem;
  line-height: 0.4rem;
  padding: 0rem 0.2rem;
}
.SwiperBox img {
  width: 100%;
  height: 100%;
}
/**顶部轮播图结束 */
/**图标列表开始 */
.IconBox {
  margin: 0.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
}
.IconBox .iconList {
  flex-grow: 1;
  margin: 0 auto;
}
.IconBox .iconList-top {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: red;
  color: white;
  line-height: 0.8rem;
  text-align: center;
  margin: 0 auto;
  position: relative;
}
.IconBox .iconList-top .today {
  position: absolute;
  top: 0.1rem;
  left: 0.25rem;
  z-index: 10;
  color: red;
  font-weight: bolder;
  font-size: 0.25rem;
}
.IconBox .iconList-top i {
  font-size: 0.5rem;
}
.IconBox .iconList-bottom {
  margin-top: 0.3rem;
  width: 100%;
}
.IconBox .iconList-bottom span {
  text-align: center;
  width: 100%;
  font-size: 0.25rem;
  color: black;
  display: inline-block;
  font-weight: bolder;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}
/**图标列表结束 */
/**推荐歌单开始 */
.SongListBox {
  width: 100%;
  margin-top: 0.5rem;
}
.SongListBox .SongListBox-top .left {
  float: left;
  font-weight: bolder;
  font-size: 0.4rem;
}
.SongListBox .SongListBox-top .right {
  float: right;
}
.SongListBox .right button {
  border: none;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background-color: white;
  padding: 0.05rem 0.15rem;
  font-size: 0.25rem;
  color: #333;
}
.SongListBox-content {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.SongListBox-content .songList {
  flex-grow: 1;
  width: 30%;
  margin: 0 0.1rem;
}
.SongListBox-content .image {
  width: 100%;
  position: relative;
}
.SongListBox-content .image .image-icon {
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  z-index: 10;
  color: white;
  font-size: 0.25rem;
}
.SongListBox-content .image-icon i {
  font-size: 0.25rem;
}
.SongListBox-content .image img {
  width: 100%;
  border-radius: 0.2rem;
}
.SongListBox-content .text {
  margin: 0.2rem 0;
  font-size: 0.23rem;
  line-height: 0.3rem;
  letter-spacing: 1px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
/**推荐歌单结束 */
/**新碟、新歌开始 */
.NewSong {
  margin-top: 0.5rem;
}
.NewSong .NewSong-top {
  font-size: 0.3rem;
}
.NewSong .NewSong-top .left {
  float: left;
}
.NewSong .left .active {
  font-weight: bolder;
  font-size: 0.35rem;
}
.NewSong .NewSong-top .shuxian {
  color: #cccccc;
  display: inline-block;
  height: 0.25rem;
  padding: 0.1rem;
}
.NewSong .NewSong-top .right {
  float: right;
}
.NewSong .right button {
  border: none;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background-color: white;
  padding: 0.05rem 0.15rem;
  font-size: 0.25rem;
  color: #333;
}
.NewSong .NewSong-content,
.NewSong .NewSong-content1 {
  display: flex;
  margin-top: 0.5rem;
  float: left;
}
.NewSong .NewSong-content .active1,
.NewSong .NewSong-content1 .active1 {
  display: none;
}
.NewSong .NewSong-content .xindieList,
.NewSong .NewSong-content1 .xingeList {
  flex: 1;
  width: 30%;
  margin: 0 0.1rem;
}
.NewSong-content .image,
.NewSong-content1 .image {
  width: 100%;
}
.NewSong-content .image img,
.NewSong-content1 .image img {
  width: 100%;
  border-radius: 0.2rem;
}
.NewSong-content .text,
.NewSong-content1 .text {
  margin: 0.2rem 0;
  font-size: 0.23rem;
  line-height: 0.3rem;
  letter-spacing: 1px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
/**新碟、新歌结束 */
</style>
