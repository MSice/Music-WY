import Vue from "vue";
import VueRouter from "vue-router";
import Find from "@/views/find";
import Layout from "@/layout";
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/find',
        children: [{
            path: 'Find',
            name: 'Find',
            component: Find,
        }]
    },
    {
        path: "/Friend",
        name: "friend",
        component: Layout,
        redirect: '/friend',
        children: [{
            path: '/friend',
            name: 'Friend',
            component: () =>
                import("@/views/friend")
        }]
    },
    {
        path: "/Video",
        name: "video",
        component: Layout,
        redirect: '/video',
        children: [{
            path: '/video',
            name: 'Video',
            component: () =>
                import("@/views/video")
        }]
    },
    {
        path: "/Mine",
        name: "mine",
        component: Layout,
        redirect: '/mine',
        children: [{
            path: '/mine',
            name: 'Mine',
            component: () =>
                import("@/views/mine")
        }]
    },
    {
        path: "/Test",
        name: "test",
        component: Layout,
        redirect: '/test',
        children: [{
            path: '/test',
            name: 'Test',
            component: () =>
                import("@/views/test")
        }]
    },
];

const router = new VueRouter({
    routes
});

export default router;