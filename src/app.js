import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store.js"

new Vue(
  {
    el: "#app",
    store,
    router,
    components:{App},
    template:"<App/>",
  }
)
