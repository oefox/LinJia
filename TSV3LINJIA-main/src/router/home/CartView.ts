import NewRouterTypeRaw from "../router.d";
export default [
  {
    path: "/Cart",
    component: () => import("../../views/CartView/index.vue"),
    meta: {
      isAuth: true,
      isShowFooter: true,
    },
  },
] as NewRouterTypeRaw[];
