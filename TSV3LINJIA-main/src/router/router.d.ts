//对路由meta进行类型扩展
import { type RouteRecordRaw } from "vue-router";
enum IconType {
  "home-o",
  "label-o",
  "video-o",
  "cart-o",
  "manager-o",
}
enum UrlType {}
type MyRouteRecordRaw = {
  meta?: {
    isShowFooter: Boolean;
    isAuth: Boolean;
    name?: String;
    id?: number;
    icon?: IconType;
  };
};
type NewRouterTypeRaw = MyRouteRecordRaw & RouteRecordRaw;
export default NewRouterTypeRaw;
