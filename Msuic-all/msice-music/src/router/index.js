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
        name: "Friend",
        component: () =>
            import("@/views/friend")
    },
    {
        path: "/Video",
        name: "Video",
        component: () =>
            import("@/views/video")
    },
    {
        path: "/Mine",
        name: "Mine",
        component: () =>
            import("@/views/mine")
    },
    {
        path: "/Test",
        name: "Test",
        component: () =>
            import("@/views/test")
    },
];

const router = new VueRouter({
    routes
});

export default router;