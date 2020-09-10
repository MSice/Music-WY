<!-- 导航栏 -->
<template>
    <div class="layout">
        <div class="nav">
            <div class="menu">
                <i class="iconfont icon-MENU"></i>
            </div>
            <div class="list">
                <heade></heade>
            </div>
            <div class="search" @click="goPage(search)">
                <i class="iconfont icon-sousuo"></i>
            </div>
        </div>
        <transition name="meum-show">
            <div
                class="left-menu"
                :style="{height:setheight()+'px'}"
                v-show="show"
                @click="show=!show"
            >
                <!-- <meum :show="show" /> -->
            </div>
        </transition>
    </div>
</template>
<script>
// import axios from "../../utils/request";
import heade from "../header";
export default {
    components:{
        heade
    },
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
        }
        // axios({
        //     url: "/playlist/detail?id=2532527491",
        //     method: "get"
        // }).then(res => {
        //     console.log(res);
        // });
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
    height: 3.5rem;
    line-height: 3.5rem;
    text-align: center;
    background-color: rgb(255, 255, 255);
    z-index: 100;
    font-size: 1.3rem;
}
// .nav i {
//   font-size: 0.4rem;
// }
//导航左侧菜单
.nav .menu {
    flex-grow: 1;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // height: 100%;
    margin-right: 5%;
    padding-left: 1%;
}
// 右侧搜索
.nav .search {
    flex-grow: 1;
    margin-left: 5%;
    padding-right: 1%;
}
//导航中部列表
.nav .list {
    flex-grow: 8;
    height: 100%;
}
</style>
