import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/countries",
    name: "Countries",
    component: () => import("../views/Countries.vue"),
  },
  {
    path: "/countries/:id",
    name: "CountryDetail",
    component: () => import("../views/CountryDetail.vue"),
  },
  {
    path: "/slots-demo",
    name: "SlotsDemo",
    component: () => import("../views/SlotsDemo.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
