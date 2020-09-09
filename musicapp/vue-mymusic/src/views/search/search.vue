<template>
  <div class="content">
    <div class="toper">
      <div class="left">
        <Return />
      </div>
      <div class="input">
        <input
          type="text"
          :placeholder="hotSearch"
          v-model.trim="searchDate"
          @keyup="getSearchDate(searchDate)"
        />
      </div>
      <div class="right" @click="goSinger">
        <i class="iconfont icon-person"></i>
      </div>
    </div>
    <div class="searchList" v-show="showsearchList">
      <div class="searchContent">搜索&nbsp;“{{searchDate}}”</div>
      <div
        v-for="(item,index) in searchList"
        :key="index"
        class="clearfix searchList-List"
        @click="songDetails(item.keyword)"
      >
        <div class="iconfont icon-sousuo"></div>
        <div class="songName">{{item.keyword}}</div>
      </div>
    </div>
      <div class="history" v-show="historyList.length && !showsearchList">
        <div class="top clearfix">
          <div class="left">
            <span>历史纪录</span>
          </div>
          <div class="right" @click="clearfull">
            <i class="iconfont icon-lajitong"></i>
          </div>
        </div>
        <div class="info clearfix">
          <ul class="clearfix">
            <li v-for="(item,index) in historyList" :key="index">
              <button @click="goDetails(item)">{{item}}</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="searchHost" v-show="!showsearchList">
        <div class="top">
          <span>热搜榜</span>
        </div>
        <div
          class="list"
          v-for="(item,index) in hotSearchList"
          :key="index"
          @click="goDetails(item.searchWord)"
        >
          <li class="left">
            <span :class="{active:index==1||index==0||index==2}">{{index+1}}</span>
          </li>
          <div class="details">
            <div class="name">
              <span>{{item.searchWord}}</span>
              <img
                :style="{width:setWidth(item.iconType)}"
                v-if="item.iconUrl"
                :src="item.iconUrl"
                alt
              />
            </div>
            <div class="info">
              <span>{{item.content}}</span>
            </div>
          </div>
          <div class="right">
            <span>{{item.score}}</span>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import Return from "@/components/return/return";
import {
  _getSearchDefault,
  _getSearchHot,
  _getSearchSuggest,
  _getSearch
} from "@/api/API";
export default {
  components: {
    Return,
  },
  methods: {
    /**初始化启动 */
    getAll() {
      this.getSearchList();
      this.getHostSearch();
      this.historyList = JSON.parse(localStorage.getItem("historyData"));
    },
    
    /**搜索进入具体歌曲 */
    songDetails(keywords) {
      console.log(keywords);
      this.historyList.push(keywords);
      localStorage.setItem("historyData", JSON.stringify(this.historyList));
      _getSearch(keywords).then(res => {
        // console.log(res.data.result.songs);
        this.$router.push({ path: `/songdetails/${keywords}`});
      });
      
    },
    /**进入歌曲详情 */
    goDetails(keywords) {
      console.log(keywords);
      this.historyList.push(keywords);
      localStorage.setItem("historyData", JSON.stringify(this.historyList));
      _getSearch(keywords).then(res => {
        // console.log(res.data.result.songs);
        // this.$router.push({ name: 'SongDetails', params: { searchName: keywords }});
        this.$router.push({ path: `/songdetails/${keywords}`});
      });
    },
    /**字符判断 */
    setWidth(type) {
      if (type === 1 || type === 2) {
        return "0.45rem";
      }
    },
    /**清空历史纪录 */
    clearfull() {
      localStorage.setItem(
        "historyData",
        JSON.stringify((this.historyList = []))
      );
    },
    /**获取热搜列表 */
    getSearchList() {
      _getSearchHot().then(res => {
        console.log(res);
        this.hotSearchList = res.data.data;
      });
    },
    /**获取当前导航热搜 */
    getHostSearch() {
      _getSearchDefault().then(res => {
        console.log(res);
        this.hotSearch = res.data.data.showKeyword;
      });
    },
    /**匹配搜索 */
    getSearchDate(keywords) {
      if (keywords) {
        _getSearchSuggest(keywords).then(res => {
          console.log(res.data.result.allMatch);
          this.searchList = res.data.result.allMatch;
        });
      }
    },
    /**跳转到歌手界面 */
    goSinger() {
      this.$router.push("singer");
    }
  },
  data() {
    return {
      showsearchList: false,
      searchDate: "",
      hotSearch: "",
      historyList: [
        // {
        //   name: "你把爱情给了谁"
        // },
        // {
        //   name: "光辉岁月"
        // },
        // {
        //   name: "千千阙歌"
        // },
        // {
        //   name: "我的好兄弟"
        // }
      ],
      searchList: [],
      hotSearchList: [
        {
          id: 1,
          name: "少年",
          count: 33333,
          info: '"少年"这个词实在是太受到关注了'
        },
        {
          id: 2,
          name: "少年",
          count: 33333,
          info: '"少年"这个词实在是太受到关注了'
        },
        {
          id: 3,
          name: "少年",
          count: 33333,
          info: '"少年"这个词实在是太受到关注了'
        },
        {
          id: 4,
          name: "少年",
          count: 33333,
          info: '"少年"这个词实在是太受到关注了'
        }
      ]
    };
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getAll();
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  watch: {
    searchDate(val) {
      // console.log(val);
      if (val) {
        this.showsearchList = true;
      } else {
        this.showsearchList = false;
      }
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
/* 顶部导航开始*/
.content {
  padding: 1.5rem 0.2rem;
}
.toper {
  background-color: #fff;
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 0.8rem;
  padding-top: 0.1rem;
  z-index: 100;
  line-height: 0.8rem;
}
.toper .left {
  flex-grow: 1;
  width: 5%;
  display: inline-block;
}
.toper .input {
  flex-grow: 8;
  height: 100%;
  margin-left: 0.3rem;
  margin-right: 0.5rem;
  width: 50%;
}
.toper .input input {
  padding-left: 5px;
  width: 100%;
  border: none;
  border-bottom: #666 solid 0.5px;
  background: none;
  outline: none;
  height: 100%;
  font-size: 0.35rem;
  line-height: 100%;
}
.toper .right {
  flex-grow: 1;
  width: 10%;
  display: inline-block;
}
.toper .right i {
  font-size: 0.5rem;
}
/*顶部导航结束*/
/**搜索列表开始 */
.searchList {
  position: fixed;
  top: 1.5rem;
}
.searchList .searchContent {
  font-size: 0.35rem;
  color: cornflowerblue;
}
.searchList .searchList-List {
  margin-top: 0.5rem;
  font-size: 0.35rem;
  color: #666;
}
.searchList .icon-sousuo {
  float: left;
  font-size: 0.4rem;
}
.searchList .songName {
  float: left;
  margin-left: 0.5rem;
}
/**搜索列表结束 */
/*历史记录开始 */
.history {
  width: 100%;
  margin-bottom: 0.8rem;
}
.history .top {
  margin: 10px 10px;
}
.history .top .left {
  float: left;
}
.history .left span {
  font-size: 0.4rem;
  font-weight: bolder;
  color: black;
}
.history .top .right {
  float: right;
}
.history .right i {
  font-size: 0.4rem;
  color: #666;
}
.history .info {
  margin: 10px 10px;
}
/* .history .info ul {
  display: flex;
} */
.history .info li {
  float: left;
  margin-top: 0.2rem;
  margin-right: 0.2rem;
}
.history .info button {
  height: 0.6rem;
  background-color: #dddddd;
  border: none;
  border-radius: 25px;
  opacity: 0.8;
  padding: 5px;
}
/*历史记录结束 */
/*热搜榜开始*/
.searchHost {
  margin: 0rem auto;
  width: 94%;
  /* overflow: scroll; */
}
.searchHost .top {
  margin-bottom: 20px;
}
.searchHost .top span {
  font-size: 0.4rem;
  font-weight: bolder;
  color: black;
}
.searchHost .list {
  display: flex;
  margin-top: 10px;
  height: 1rem;
}
.searchHost .list .left {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 10%;
  margin-left: -20px;
  margin-right: 10px;
}
.searchHost .left span {
  line-height: 1rem;
  color: #666;
}
.searchHost .list .active {
  color: red;
}
.searchHost .list .details {
  flex-grow: 6;
  width: 60%;
  height: 100%;
}
.searchHost.name span {
  font-size: 0.4rem;
  color: black;
}
.searchHost img {
  margin-left: 10px;
  height: 0.3rem;
  width: 0.25rem;
}
.searchHost .details .info {
  width: 100%;
  height: 100%;
}
.searchHost .info span {
  width: 100%;
  font-size: 0.25rem;
  color: #aaaaaa;
  /* text-overflow:ellipsis; */
  /* overflow: hidden; */
}
.searchHost .list .right {
  flex-grow: 3;
  height: 100%;
  width: 10%;
  margin-left: 10px;
}
.searchHost .right span {
  line-height: 1rem;
  font-size: 0.3rem;
  color: #aaa;
}
/*热搜榜结束 */
</style>
