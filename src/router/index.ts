import { createRouter, createWebHashHistory } from "vue-router"
import routerDate from "./routerDate"
import Login from "../views/login/login.vue"

const routeList  = [{
  path: "/home",
  name: "home",
  component: Login
}]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routeList.concat(routerDate as any)
})

// 路由拦截
router.beforeEach((to, from, next) => {
  /* if (to.fullPath === "/") {
    next()
  } */
})

export default router