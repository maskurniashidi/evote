import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import ErrorPage from "../views/ErrorPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/error",
    name: "ErrorPage",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
