import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { XPlugin } from "@empathyco/x-components";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "inicio",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/explora",
    name: "explora",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "explora" */ "../views/DiscoveryView.vue"),
  },
  {
    path: "/busca",
    name: "busca",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "busca" */ "../views/SearchView.vue"),
  },
  {
    path: "/info",
    name: "info",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "info" */ "../views/AboutView.vue"),
  },
  {
    path: "/busca/:id",
    name: "busca_grant",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "busca_grant" */ "../views/BidView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  XPlugin.bus.emit("UserAcceptedAQuery", "");
  next();
});

export default router;
