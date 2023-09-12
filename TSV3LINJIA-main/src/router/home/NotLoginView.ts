import NewRouterTypeRaw from "../router.d";
export default [
  {
    path: "/Not",
    component: () => import("../home/NotLoginView.ts"),
    meta: {
      isAuth: false,
      isShowFooter: false,
    },
  },
] as NewRouterTypeRaw[];
