import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import ErrorPage from "../views/ErrorPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import HomePage from "../views/HomePage.vue";
import EventViewPage from "../views/EventViewPage.vue";
import FileViewPage from "../views/FileViewPage.vue";
import PaslonPage from "../views/PaslonPage.vue";
import DetailEventViewPage from "../views/DetailEventViewPage.vue";
import DetailFileViewPage from "../views/DetailFileViewPage.vue";
import DetailPaslonPage from "../views/DetailPaslonPage";
import TimelinePage from "../views/TimelinePage.vue";

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
  {
    path: "/RegisterPage",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/HomePage",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/EventViewPage",
    name: "EventViewPage",
    component: EventViewPage,
  },
  {
    path: "/FileViewPage",
    name: "FileViewPage",
    component: FileViewPage,
  },
  {
    path: "/PaslonPage",
    name: "PaslonPage",
    component: PaslonPage,
  },
  {
    path: "/DetailEventViewPage",
    name: "DetailEventViewPage",
    component: DetailEventViewPage,
  },
  {
    path: "/DetailFileViewPage",
    name: "DetailFileViewPage",
    component: DetailFileViewPage,
  },
  {
    path: "/DetailPaslonPage",
    name: "DetailPaslonPage",
    component: DetailPaslonPage,
  },
  {
    path: "/TimelinePage",
    name: "TimelinePage",
    component: TimelinePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
