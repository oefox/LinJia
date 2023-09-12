import { type RouteRecordRaw } from "vue-router";
export default [
  {
    path: "/login",
    component: () => import("../../views/LoginView/index.vue"),

    meta: {
      isAuth: false,
      isShowFooter: false,
    },
  },
] as RouteRecordRaw[];
