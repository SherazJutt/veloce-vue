import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import GlobalComponents from "./plugins/global-components";

const app = createApp(App);
app.use(GlobalComponents);
app.mount("#app");
