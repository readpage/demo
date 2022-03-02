import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页",
    },
    component: () => import("@/views/home/index.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

 //beforeEach是router的钩子函数，在进入路由前执行
router.beforeEach((to, form, next) => {
  document.title = to.meta.title+ ""
  next()
})



export default router
