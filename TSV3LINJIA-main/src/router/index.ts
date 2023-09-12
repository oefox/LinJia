import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "./home/home";
import Video from "./home/VideoView";
import Cart from "./home/CartView";
import Type from "./home/TypeView";
import User from "./home/UserView";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "home",
  },
  ...Home,
  ...Video,
  ...Cart,
  ...Type,
  ...User,
  //配置出错路由
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
    meta: {
      isFooterShow: false,
      isAuth: false,
    },
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
