<!--  -->
<template>
    <div class="header">
        <ul>
            <li
                v-for="page in navList"
                :key="page.id"
                :class="$route.path == page.path? 'active' : ''"
                @click="goPage(page.path)"
            >{{page.pageName}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    id: "0001",
                    name: "mine",
                    pageName: "我的",
                    path: "/Mine"
                },
                {
                    id: "0002",
                    name: "find",
                    pageName: "发现",
                    path: "/Find"
                },
                {
                    id: "0003",
                    name: "friend",
                    pageName: "云村",
                    path: "/Friend"
                },
                {
                    id: "0004",
                    name: "video",
                    pageName: "视频",
                    path: "/Video"
                },
                {
                    id: "0005",
                    name: "test",
                    pageName: "test",
                    path: "/Test"
                }
            ]
        };
    },
    methods: {
        goPage(path) {
            console.log(path);
            this.$router.push(path);
        }
    }
};
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    height: 100%;
    ul {
        display: flex;
        li {
            color: #696969;
            flex-grow: 1;
            // padding-bottom: 0.4rem;
        }
        .active {
            font-size: 1.1rem;
            color: #000;
            font-weight: initial;
        }
    }
}
</style>
