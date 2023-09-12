import NewRouterTypeRaw from "../router.d";
export default [
  {
    path: "/user",
    component: () => import("./TypeView.ts"),
    meta: {
      isShowFooter: true,
      isAuth: true,
    },
  },
] as NewRouterTypeRaw[];
