import Vue from "vue";
import App from "./app.vue";
import Home from "./home.vue";
import vip from "./vip.vue";
import shopcar from "./shopcar.vue";
import search from "./search.vue";
import NewsList from "./news/newsList.vue";



//mint-ui
import MintUi from "mint-ui";
import "../../node_modules/mint-ui/lib/style.css";
import "./static/libs/mui-master/dist/css/mui.css";
Vue.use(MintUi);


//router
import VueRouter from "vue-router";
let router = new VueRouter({
    routes: [
        { path: "/", component: Home },
        { name: "Home", path: "/home", component: Home },
        { name: "vip", path: "/vip", component: vip },
        { name: "shopcar", path: "/shopcar", component: shopcar },
        { name: "search", path: "/search", component: search },
        { name: "NewsList", path: "/newslist", component: NewsList }
    ]
})
Vue.use(VueRouter);
//axios
import Axios from "axios";
Vue.prototype.Axios = Axios;
Axios.defaults.baseURL = "http://182.254.146.100:8899/api/"




new Vue({
    el: "#app",
    router,
    render: c => c(App)
})