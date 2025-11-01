import "./style.css";
// export * from "./exports";

import App from "./App.vue";
import { createApp } from "vue";

const app = createApp(App);
app.mount("#app");
