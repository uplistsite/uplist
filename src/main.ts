import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports.js";
Amplify.configure(awsconfig);

createApp(App).use(store).use(router).mount("#app");
