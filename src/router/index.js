import { createRouter, createWebHistory } from "vue-router";
import OverviewView from "@/views/OverviewView.vue";
import ExamplesView from "@/views/ExamplesView.vue";
import TourView from "@/views/TourView.vue";
import BlogView from "@/views/BlogView.vue";
import HelpView from "@/views/HelpView.vue";

const routes = [
  {
    path: "/",
    name: "overview",
    component: OverviewView,
  },
  {
    path: "/examples",
    name: "examples",
    component: ExamplesView,
  },
  {
    path: "/tour",
    name: "tour",
    component: TourView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/help",
    name: "help",
    component: HelpView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
