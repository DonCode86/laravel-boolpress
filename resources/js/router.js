import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// @ts-ignore
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/chi-siamo",
            name: "about",
            component: About,
        },
        {
            path: "/*",
            name: "not-found",
            component: NotFound,
        },
    ],
});

export default router;
