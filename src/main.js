/*
 * @Author: your name
 * @Date: 2021-01-18 11:12:58
 * @LastEditTime: 2021-01-18 14:14:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue-antd-admin/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import { initRouter } from "./router";
import "./theme/index.less";
import Antd from "ant-design-vue";
import Viser from "viser-vue";
import "@/mock";
import store from "./store";
import "animate.css/source/animate.css";
import Plugins from "@/plugins";
import { initI18n } from "@/utils/i18n";
import bootstrap from "@/bootstrap";
import "moment/locale/zh-cn";
// 将api挂载到vue的原型上
import api from "./api/student_api";
import kpi from "./api/teacher_api";
import oralContestApi from "./api/oral_contest";
import appApi from "./api/app";
import newApi from "./api/new_api";
Vue.prototype.$api = api;
Vue.prototype.$kpi = kpi;
Vue.prototype.$oralContestApi = oralContestApi;
Vue.prototype.$appApi = appApi;
Vue.prototype.$newApi = newApi;

const router = initRouter(store.state.setting.asyncRoutes);
const i18n = initI18n("CN", "US");

Vue.use(Antd);
Vue.config.productionTip = false;
Vue.use(Viser);
Vue.use(Plugins);

bootstrap({ router, store, i18n, message: Vue.prototype.$message });

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount("#app");
