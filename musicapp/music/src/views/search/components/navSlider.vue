<!--  -->
<template>
  <div class="nav_slider">
    <ui class="nav_slider_list">
      <li
        v-for="(item,index) in list"
        :key="index"
        :class="{active:item.name == nowPage}"
        @click="goPath(item)"
      >{{item.name}}</li>
    </ui>

    <div class="content">{{name}}</div>
  </div>
</template>

<script>
export default {
  props:['selectpath'],
  props: {
    // selectpath:{
    //   type:String,
    //   required:true
    // }
  },
  data() {
    return {
      nowPage: "综合",
      list: [
        {
          name: "综合",
          path: "/zonghe/"
        },
        {
          name: "单曲",
          path: "/danqu/"
        },
        {
          name: "云村",
          path: "/yuncun/"
        },
        {
          name: "歌单",
          path: "/gedan/"
        },
        {
          name: "歌手",
          path: "/geshou/"
        },
        {
          name: "专辑",
          path: "/zhuanji/"
        },
        {
          name: "视频",
          path: "/shipin/"
        },
        {
          name: "歌词",
          path: "/geci/"
        },
        {
          name: "电台主播",
          path: "/diantaizhubo/"
        },
        {
          name: "用户",
          path: "/yonghu/"
        }
      ]
    };
  },
  methods: {
    goPath(item) {
      if (item.name != this.nowPage) {
        this.nowPage = item.name;
        this.$emit("update:selectpath", item.path);
      }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
.nav_slider {
  border-bottom: 1px #f0f0f0 solid;
  padding: 0.3rem 0;
  width: 100%;
  position: fixed;
  top: 1.1rem;
  overflow-x: scroll;
  background-color: white;
  overflow: hidden;
  &_list {
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    height: 0.5rem;
    // display: flex;
    // flex-wrap: nowrap;
    // align-items: center;
    // white-space: nowrap;
    // width: auto;
    // min-width: 100%;
    li {
      color: black;
      // width: 1rem;
      text-align: center;
      padding: 0 0.3rem;
    }
    .active {
      color: blueviolet;
    }
    li:after {
      border-bottom: 1ps red solid;
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>