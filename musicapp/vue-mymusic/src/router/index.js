import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/finding/finding.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Finding',
    component: Home,
    alias: '/finding'
  },
  {
    path: '/friend',
    name: 'Friend',
    component: () => import('../views/friend/friend.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/mine/mine.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/video/video.vue')
  },
  {
    path: '/test',
    name: 'Text',
    component: () => import('../views/test/test.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/search/search.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/menu/menu.vue')
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import('../views/search/singer.vue')
  },
  {
    path:'/songdetails/:searchName',
    name:'SongDetails',
    component:()=>import('../views/search/songDetails.vue'),
    children:[
      {
        path: '/zonghe/:name',
        name: 'ZongHe',
        component: ()=> import('../views/search/components/songDetailsZH'),
      },
      {
        path: '/danqu/:name',
        name: 'DanQu',
        component: ()=> import('../views/search/components/songDetailsDQ'),
      },
      {
        path: '/yuncun/:name',
        name: 'YunCun',
        component: ()=> import('../views/search/components/songDetailsYC'),
      },
      {
        path: '/gedan/:name',
        name: 'Gedan',
        component: ()=> import('../views/search/components/songDetailsGD'),
      },
      {
        path: '/geshou/:name',
        name: 'GeShou',
        component: ()=> import('../views/search/components/songDetailsGS'),
      },
      {
        path: '/zhuanji/:name',
        name: 'ZhuanJi',
        component: ()=> import('../views/search/components/songDetailsZJ'),
      },
      {
        path: '/shipin/:name',
        name: 'ShiPin',
        component: ()=> import('../views/search/components/songDetailsSP'),
      },
      {
        path: '/geci/:name',
        name: 'GeCi',
        component: ()=> import('../views/search/components/songDetailsGC'),
      },
      {
        path: '/diantaizhubo/:name',
        name: 'DianTaiZhuBo',
        component: ()=> import('../views/search/components/songDetailsZB'),
      },
      {
        path: '/geci/:name',
        name: 'GeCi',
        component: ()=> import('../views/search/components/songDetailsGC'),
      },
      {
        path: '/yonghu/:name',
        name: 'YongHu',
        component: ()=> import('../views/search/components/songDetailsYH'),
      },
      // {
      //   path: '/songdetails/:searchName',
      //   name: 'Child3',
      //   component: ()=> import('../views/text.page/Child3Page.vue'),
      // },
      // {
      //   path: '/songdetails/:searchName',
      //   name: 'Child4',
      //   component: ()=> import('../views/text.page/Child4Page.vue'),
      // },
      // {
      //   path: '/songdetails/:searchName~34op[',
      //   redirect: '/',
      // },
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
