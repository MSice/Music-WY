<!--  -->
<template>
  <div class="content">
    <div class="nav">
      <div class="toper">
        <i class="iconfont icon-fanhui-wangyiicon" @click="goLastPage"></i>
        <span>歌手分类</span>
      </div>
      <div class="navList">
        <div class="top">
          <span
            v-for="(item,index) in titleList1"
            :key="index"
            :class="{active:index==spanIndex1}"
            @click="clickIndex1(index)"
          >{{item}}</span>
        </div>
        <div class="bottom">
          <span
            v-for="(item,index) in titleList2"
            :key="index"
            :class="{active:index==spanIndex2}"
            @click="clickIndex2(index)"
          >{{item}}</span>
        </div>
      </div>
    </div>
    <div class="singerList">
      <div class="top">
        <span>热门歌手</span>
      </div>
      <div class="singerDetails">
        <div class="list" v-for="(item,index) in singerList" :key="index">
          <div class="left">
            <span class="img">
              <img :src="item.img1v1Url" alt />
            </span>
            <span
              style="text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"
              class="name"
            >{{item.name}}</span>
            <span class="icon">
              <i class="iconfont icon-singer"></i>
            </span>
          </div>
          <div class="right">
            <span class="button">
              <button>+ 关注</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      titleList1: ["华语", "欧美", "日本", "韩国", "其他"],
      titleList2: ["男", "女", "乐队组合"],
      spanIndex1: "0",
      spanIndex2: "0",
      singerList: [
        {
          img:
            "https://p1.music.126.net/R5fsMgpLHC9mJbLLA6EKLA==/109951164561120345.jpg?param=100y100",
          name: "x邓紫棋",
          icon: ""
        },
        {
          img:
            "https://p1.music.126.net/R5fsMgpLHC9mJbLLA6EKLA==/109951164561120345.jpg?param=100y100",
          name: "邓紫棋",
          icon: ""
        },
        {
          img:
            "https://p1.music.126.net/R5fsMgpLHC9mJbLLA6EKLA==/109951164561120345.jpg?param=100y100",
          name: "邓紫棋",
          icon: ""
        },
        {
          img:
            "https://p1.music.126.net/R5fsMgpLHC9mJbLLA6EKLA==/109951164561120345.jpg?param=100y100",
          name: "邓紫棋",
          icon: ""
        },
        {
          img:
            "https://p1.music.126.net/R5fsMgpLHC9mJbLLA6EKLA==/109951164561120345.jpg?param=100y100",
          name: "邓紫棋",
          icon: ""
        },
        {
          img:
            "https://p1.music.126.net/R5fsMgpLHC9mJbLLA6EKLA==/109951164561120345.jpg?param=100y100",
          name: "邓紫棋",
          icon: ""
        },
        {
          img:
            "https://p1.music.126.net/R5fsMgpLHC9mJbLLA6EKLA==/109951164561120345.jpg?param=100y100",
          name: "邓紫棋",
          icon: ""
        },
        {
          img:
            "https://p1.music.126.net/R5fsMgpLHC9mJbLLA6EKLA==/109951164561120345.jpg?param=100y100",
          name: "邓紫棋",
          icon: ""
        },
        {
          img:
            "https://p1.music.126.net/R5fsMgpLHC9mJbLLA6EKLA==/109951164561120345.jpg?param=100y100",
          name: "邓紫棋",
          icon: ""
        },
        {
          img:
            "https://p1.music.126.net/R5fsMgpLHC9mJbLLA6EKLA==/109951164561120345.jpg?param=100y100",
          name: "邓紫棋",
          icon: ""
        },
        {
          img:
            "https://p1.music.126.net/R5fsMgpLHC9mJbLLA6EKLA==/109951164561120345.jpg?param=100y100",
          name: "邓紫棋",
          icon: ""
        }
      ],
      checkType: ""
    };
  },
  computed: {},
  watch: {
    spanIndex1(val) {
      val.toString();
      const Str = val.toString();
      const id = Str + this.spanIndex2;
      this.getId(id);
    },
    spanIndex2(val) {
      val.toString();
      const Str = val.toString();
      const id = this.spanIndex1 + Str;
      this.getId(id);
    }
  },
  methods: {
    goLastPage() {
      this.$router.push("search");
    },
    clickIndex1(index) {
      this.spanIndex1 = index;
    },
    clickIndex2(index) {
      this.spanIndex2 = index;
    },
    getId(index) {
      switch (index) {
        case "00": {
          this.getArtistList("1001");
          break;
        }
        case "01": {
          this.getArtistList("1002");
          break;
        }
        case "02": {
          this.getArtistList("1003");
          break;
        }
        case "10": {
          this.getArtistList("2001");
          break;
        }
        case "11": {
          this.getArtistList("2002");
          break;
        }
        case "12": {
          this.getArtistList("2003");
          break;
        }
        case "20": {
          this.getArtistList("6001");
          break;
        }
        case "21": {
          this.getArtistList("6002");
          break;
        }
        case "22": {
          this.getArtistList("6003");
          break;
        }
        case "30": {
          this.getArtistList("7001");
          break;
        }
        case "31": {
          this.getArtistList("7002");
          break;
        }
        case "32": {
          this.getArtistList("7003");
          break;
        }
        case "41": {
          this.getArtistList("4001");
          break;
        }
        case "42": {
          this.getArtistList("4002");
          break;
        }
        case "43": {
          this.getArtistList("4003");
          break;
        }
      }
    },
    // getArtistList() {
    //   if (this.spanIndex1 === 0 && this.spanIndex2 === 0) {
    //     const id = "5001";
    //     _getArtistList(id).then(res => {
    //       console.log(res.data.artists);
    //       this.singerList = res.data.artists;
    //     });
    //   }
    // }

    getArtistList(id) {
      const requestUrl = "http://zyuanyuan.com:3000/artist/list?cat=";

      axios.get(requestUrl + id).then(res => {
        console.log(res.data.artists);
        this.singerList = res.data.artists;
      });
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getArtistList("1001");
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.content {
  color: #333;
}
/**导航开始 */
.nav {
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100%;
}
/*导航顶部开始*/
.toper {
  padding: 0.2rem;
}
.toper i {
  font-size: 0.5rem;
}
.toper span {
  margin-left: 0.3rem;
  font-size: 0.45rem;
  font-weight: bolder;
}
/**导航顶部结束 */
/**导航列表开始 */
.navList {
  padding: 0.3rem 0.2rem;
}
.navList .active {
  color: red;
}
.navList span {
  margin: 0 0.3rem;
  font-size: 0.3rem;
}
.navList .top {
  padding-bottom: 0.2rem;
}
/**导航列表结束 */
/**导航结束 */
/**歌手列表开始 */
.singerList {
  margin-top: 2.8rem;
}
.singerList .top {
  height: 0.5rem;
  line-height: 0.5rem;
  background-color: #ddd;
}
.singerList .top span {
  font-size: 0.3rem;
  padding: 0 0.3rem;
}
.singerList .list {
  margin-top: 0.25rem;
  width: 100%;
  height: 1.6rem;
  line-height: 1.6rem;
  display: flex;
}
.singerList .left {
  flex-grow: 1;
  display: flex;
  width: 50%;
}
.singerList .right {
  flex-grow: 1;
  width: 50%;
}
.singerList .list span {
  display: inline-block;
}
.singerList .list .img {
  flex-grow: 2;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.singerList .img img {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
}
.singerList .list .name {
  flex-grow: 1;
  font-size: 0.35rem;
  width: 40%;
}
.singerList .list .icon {
  flex-grow: 1;
}
.singerList .icon i {
  color: aliceblue;
  background-color: red;
  border-radius: 50%;
  width: 0.25rem;
  height: 0.25rem;
}
.singerList .list .button {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  align-items: center;
}
.singerList .list button {
  margin-right: 0.3rem;
  border: none;
  border-radius: 0.5rem;
  border: coral solid 1px;
  color: coral;
  width: 1.2rem;
  height: 0.5rem;
  background-color: #fff;
}
/**歌手列表结束 */
</style>
