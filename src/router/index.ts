import { createRouter, createWebHashHistory, createWebHistory, 
    RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[]= [
    {
        path:"/home",
        name: "home",
        component: () => import("../views/home/Home.vue")
    },
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/news",
        name: "news",
        component: () => import("../views/home/News.vue")
    },

    {
        path:"/search",
        name: "search",
        component: () => import("../views/home/Search.vue")
    },
    {
        path:"/chat",
        name: "chat",
        component: () => import("../views/home/Chat.vue")
    },
    {
        path:"/mood",
        name: "mood",
        component: () => import("../views/home/Mood.vue")
    },
    
]


const router = createRouter({

    history: createWebHashHistory(),  //路由模式

    // 路由配置(对象同名)
    routes,
})

export default router
