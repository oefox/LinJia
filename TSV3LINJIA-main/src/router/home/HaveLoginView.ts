import NewRouterTypeRaw from "../router.d";
export default [
  {
    path: "/isLogin",
    component: () => import("./HaveLoginView.ts"),
    meta: {
      isAuth: true,
      isShowFooter: true,
    },
  },
] as NewRouterTypeRaw[];
