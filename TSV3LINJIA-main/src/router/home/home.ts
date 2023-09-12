import NewRouterTypeRaw from "../router.d";
export default [
  {
    path: "/home",
    component: () => import("../../views/home.vue"),
    meta: {
      isShowFooter: true,
      isAuth: true,
    },
  },
] as NewRouterTypeRaw[];
