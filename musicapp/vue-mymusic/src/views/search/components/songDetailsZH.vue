<!--  -->
<template>
  <div class="song_details">
    <div class="song_details_toper clearfix">
      <div class="left">单曲</div>
      <div class="right">
        <button>播放全部</button>
      </div>
    </div>
    <div class="song_details_list clearfix" v-for="(item,index) in songList" :key="index" @click="playSong(item)">
      <div class="left">
        <div class="top">
          <span class="songname">{{item.name}}</span>
          <span class="more"></span>
        </div>
        <span class="bottom">{{item.artists[0].name}}-{{item.album.name}}</span>
      </div>
      <div class="right clearfix">
        <div>
          <i class="iconfont icon-gengduo"></i>
        </div>
        <div>
          <i class="iconfont icon-shipin"></i>
        </div>
      </div>
    </div>
    <div class="song_details_bottom">
        <span>查看全部{{songNUm}}首单曲&nbsp;></span>
    </div>
  </div>
</template>

<script>
import { _getSearch } from "@/api/API";
import {  mapMutations } from "vuex";
export default {
  // props: ["name"],
  // props: {
  //   name: String
  // },
  data() {
    return {
      songList: [],
      songNUm:0,
      name:"",
    };
  },
  methods: {
    ...mapMutations({
      searchAdd : 'search_Add',
      
    }),
      /**获取歌曲 */
    getData() {
      console.log(this.name+1);
      _getSearch(this.name).then(res => {
        console.log(res.data.result.songs.length);
        this.songNUm = res.data.result.songs.length;
        this.songList = res.data.result.songs.slice(0, 6);
      });
    },
    /**播放歌曲 */
    playSong(item){
        this.searchAdd(item);
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.name = this.$route.params.name;
    this.getData();
    
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
@color: #f0f0f0;

.song_details {
  padding: 0 0.2rem;
  &_toper {
    padding: 0.2rem 0;
    border-bottom: 1px @color solid;

    .left {
      float: left;
      font-weight: bolder;
    }
    .right {
      float: right;
      button {
        border: none;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
        background-color: white;
        padding: 0.05rem 0.15rem;
        font-size: 0.25rem;
        color: #333;
      }
    }
  }
  &_list {
    padding: 0.2rem 0;
    border-bottom: 1px @color solid;
    height: 0.8rem;
    width: 100%;
    .left {
      float: left;
      width: 70%;
      .top {
          font-size: 0.3rem;
        white-space: nowrap; /*强制span不换行*/
        display: inline-block; /*将span当做块级元素对待*/
        width: 100%; /*限制宽度 可设px*/
        overflow: hidden; /*超出宽度部分隐藏*/
        text-overflow: ellipsis; /*超出部分以点号代替*/
        .songname {
          color: dodgerblue;
          margin-right: 0.2rem;
        }
      }
      .bottom {
        font-size: 0.25rem;
        color: #666666;
        white-space: nowrap; /*强制span不换行*/
        display: inline-block; /*将span当做块级元素对待*/
        width: 100%; /*限制宽度 可设px*/
        overflow: hidden; /*超出宽度部分隐藏*/
        text-overflow: ellipsis; /*超出部分以点号代替*/
      }
    }
    .right {
      height: 100%;
      float: right;
      width: 30%;
      div {
        height: 0.8rem;
        line-height: 0.8rem;
        float: right;
        i {
          color: #666666;
          font-size: 0.5rem;
        }
        .icon-shipin {
          margin-right: 0.3rem;
        }
      }
    }
  }
  &_bottom{
      margin-top:0.2rem ;
      height: 0.5rem;
      line-height: 0.5rem;
        text-align: center;
      span{
          
          width:100% ;
          font-size: 0.3rem;
          color: #aaaaaa;
      }
  }
}
</style>