import NewRouterTypeRaw from "../router.d";
export default [
  {
    path: "/Video",
    component: () => import("../../views/VideoView/index.vue"),
    meta: {
      isShowFooter: true,
      isAuth: true,
    },
  },
] as NewRouterTypeRaw[];
  