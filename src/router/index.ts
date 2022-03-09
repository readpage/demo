import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页",
    },
    component: () => import("@/views/home/index.vue"),
  }, 
  {
    path: "/echarts",
    name: "echarts",
    meta: {
      title: "可视化视图"
    },
    component: () => import("@/views/echarts/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

 //beforeEach是router的钩子函数，在进入路由前执行
router.beforeEach((to, form, next) => {
  document.title = to.meta.title as string
  next()
})



export default router
