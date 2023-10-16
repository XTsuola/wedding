import type { RouteRecordRaw } from "vue-router"
import BlankLayout from "@/layout/BlankLayout.vue"

const newRouterDate: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/layout/BasicLayout.vue"),
    children: []
  }
]

export default newRouterDate
