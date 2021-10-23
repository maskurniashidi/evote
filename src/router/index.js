import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import ErrorPage from "../views/ErrorPage.vue";
import LoginPage from "../views/LoginPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/errorPage",
    name: "ErrorPage",
    component: ErrorPage,
  },
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: LoginPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
