import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import GlobalComponents from "./plugins/global-components";
import router from "./router";

const app = createApp(App);
app.use(GlobalComponents);
app.use(router);
app.mount("#app");
