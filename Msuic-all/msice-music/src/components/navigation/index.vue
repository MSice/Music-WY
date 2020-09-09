<!-- 导航栏 -->
<template>
  <div>
    <div class="nav">
      <div class="menu">
        <i class="iconfont icon-MENU"></i>
      </div>
      <div class="list">
        <ul>
          <li
            v-for="(item,index) in navList"
            :key="index"
            @click="goPage(item)"
            :class="{active:item.name == nowPage}"
          >
            <div class="shade">{{item.pageName}}</div>
          </li>
        </ul>
      </div>
      <div class="search" @click="goPage(search)">
        <i class="iconfont icon-sousuo"></i>
      </div>
    </div>
    <transition name="meum-show">
      <div class="left-menu" :style="{height:setheight()+'px'}" v-show="show" @click="show=!show">
        <meum :show="show" />
      </div>
    </transition>
  </div>
</template>
<script>
    import axios from '../../utils/request';
export default {
  data() {
    return {
      nowPage: "Finding",
      nowPath: "/",
      show: false,
      navList: [
        {
          id: "0001",
          name: "Mine",
          pageName: "我的",
          path: "/mine"
        },
        {
          id: "0002",
          name: "Finding",
          pageName: "发现",
          path: "/finding"
        },
        {
          id: "0003",
          name: "Friend",
          pageName: "云村",
          path: "/friend"
        },
        {
          id: "0004",
          name: "Video",
          pageName: "视频",
          path: "/video"
        },
        {
          id: "0005",
          name: "test",
          pageName: "text",
          path: "/test"
        }
      ],
      search: {
        id: "0006",
        name: "Search",
        pageName: "search",
        path: "/search"
      },
      menu: {
        id: "0007",
        name: "Menu",
        pageName: "menu",
        path: "/menu"
      }
    };
  },
  methods: {
    goPage(item) {
      if (item.name !== this.nowPage) {
        this.$router.push(item.path);
        this.nowPage = item.name;
        sessionStorage.setItem("thisItem", item);
        sessionStorage.setItem("thisName", item.name);
      }
    },
    goSearch() {},
    setheight() {
      const htmlDom = document.documentElement;
      const hHeight = htmlDom.clientHeight;
      return hHeight;
    }
  },
  watch: {
    $route: {
      handler: function(val) {
        // console.log(val.name);
        // console.log(this.nowPage);
        this.nowPage = val.name;
        // console.log(this.nowPage);
      },
      // 深度观察监听
      deep: true
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {
    const Name = sessionStorage.getItem("thisName");
    if (Name) {
      this.nowPage = Name;
    }axios({
    url: '/playlist/detail?id=2532527491',
    method: 'get'
  }).then( res =>{console.log(res)})
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
//导航栏主体
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  color: #666;
  height: 1rem;
  text-align: center;
   background-color: white;
  z-index: 100;
}
// .nav i {
//   font-size: 0.4rem;
// }
//导航左侧菜单
.nav .menu {
  flex-grow: 1;
  display: flex;
  padding-right: 5%;
  align-items: center;
  font-size: 0.43rem;
  justify-content: center;
  height: 100%;
  width: 10%;
 
}
//导航中部列表
.nav .list {
  flex-grow: 8;
}
.nav .list ul {
  display: flex;
}
.nav ul li {
  flex-grow: 1;
}
.left-menu {
  position: fixed;
  top: 0;
  z-index: 10001;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
//导航右部搜索
.nav .search {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5%;
  font-size: 0.43rem;
  height: 100%;
  width: 10%;
}
.nav .active {
  font-weight: initial;
  font-size: 0.37rem;
  color: black;
}
.meum-show {
  &-enter {
    opacity: 0.4;
    &-to {
      opacity: 1;
    }
    &-active {
      transition: opacity 0.8s ease;
    }
  }
  &-leave {
    opacity: 1;
    &-to {
      opacity: 0.4;
    }
    &-active {
      transition: opacity 0.8s ease;
    }
  }
}
</style>
