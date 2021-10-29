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
import DetailPaslonPage from "../views/DetailPaslonPage.vue";
import TimelinePage from "../views/TimelinePage.vue";
import ProfilePage from "../views/ProfilePage.vue";
import ViolationReport from "../views/ViolationReport.vue";
import RegisDPTPage from "../views/RegisDPTPage.vue";
import SelectPaslon from "../views//SelectPaslon.vue";

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
  {
    path: "/ProfilePage",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/ViolationReport",
    name: "ViolationReport",
    component: ViolationReport,
  },
  {
    path: "/RegisDPTPage",
    name: "RegisDPTPage",
    component: RegisDPTPage,
  },
  {
    path: "/SelectPaslon",
    name: "/SelectPaslon",
    component: SelectPaslon,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
