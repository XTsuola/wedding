import { createRouter, createWebHashHistory } from "vue-router"
import routerDate from "./routerDate"
import Home from "../views/home.vue"
import Tx from "../views/texiao.vue"
import Shiyan from "../views/shiyanPage.vue"


const routeList = [{
  path: "/",
  redirect: "/home"
}, {
  path: "/home",
  name: "home",
  component: Home
}, {
  path: "/texiao",
  name: "texiao",
  component: Tx
}, {
  path: "/shiyan",
  name: "shiyan",
  component: Shiyan
}]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routeList.concat(routerDate as any)
})

// 路由拦截
router.beforeEach((to, from, next) => {
  next()
  /* if (to.fullPath === "/") {
    next()
  } */
})

export default router