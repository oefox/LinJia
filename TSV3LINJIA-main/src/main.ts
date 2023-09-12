import { createApp } from "vue";
import App from "./App.vue";
//导入第三方库ui
import "./ui-config/index";
//导入路由
import router from "./router/index";
const app = createApp(App);
app.use(router).mount("#app");
