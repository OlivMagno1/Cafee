import { createRouter, createWebHistory } from "vue-router";
import CafeView from "@/views/CafeView.vue";
import ExpressoView from "@/views/ExpressoView.vue";
import FrappuccinoView from "@/views/FrappuccinoView.vue";
import LatteView from "@/views/LatteView.vue";
import AboutCafe from "@/views/AboutCafe.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: CafeView,
  },
  {
    path: "/aboutcafe/",
    name: "about",
    component: AboutCafe,
  },
  {
    path: "/expresso",
    name: "expresso",
    component: ExpressoView,
  },
  {
    path: "/latte",
    name: "latte",
    component: LatteView,
  },
  {
    path: "/frappuccino",
    name: "frappuccino",
    component: FrappuccinoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
