import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// @ts-ignore
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SinglePost from "./pages/SinglePost";

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
            path: "/posts/:slug",
            name: "single-post",
            component: SinglePost,
        },
        {
            path: "/*",
            name: "not-found",
            component: NotFound,
        },
    ],
});

export default router;
