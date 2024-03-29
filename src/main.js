import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n

import "@/styles/index.scss"; // global css

import App from "./App";
import store from "./store";
import router from "./router";

import "@/icons"; // icon
import "@/permission"; // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false;

import API from "@/api";
Vue.prototype.$API = API;

/* 三级联动组件，注册为全局样式 */
import CategorySelect from "@/components/CategorySelect";
Vue.component(CategorySelect.name, CategorySelect);
/* 鼠标掠过显示信息按钮 */
import HintButton from "@/components/HintButton";
Vue.component(HintButton.name, HintButton);

// 注册一个全局自定义指令 `v-focus`
Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    // el.focus()
    el.querySelector("input").focus();
  },
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
