import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/browse",
    name: "browse",
    component: () => import("../views/BrowseView.vue"),
  },
  {
    path: "/favorite",
    name: "favorite",
    component: () => import("../views/GenreView.vue"),
  },
  {
    path: "/genre/:id",
    name: "genre",
    component: () => import("../views/GenreView.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
