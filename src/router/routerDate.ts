import type { RouteRecordRaw } from "vue-router"
// import BlankLayout from "@/layout/BlankLayout.vue"

const newRouterDate: Array<RouteRecordRaw> = [
  {
    path: "/photos/filmSpace",
    component: () => import("@/views/photos/filmSpace.vue")
  },
  {
    path: "/photos/parkExterior",
    component: () => import("@/views/photos/parkExterior.vue")
  },
  {
    path: "/photos/chineseStyle",
    component: () => import("@/views/photos/chineseStyle.vue")
  },
  {
    path: "/photos/hanayome",
    component: () => import("@/views/photos/hanayome.vue")
  }
]

export default newRouterDate
