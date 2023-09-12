import NewRouterTypeRaw from "../router.d";
export default [
  {
    path: "/type",
    component: () => import("../../views/TypeView/index.vue"),
    meta: {
      isAuth: true,
      isShowFooter: true,
    },
  },
] as NewRouterTypeRaw[];
