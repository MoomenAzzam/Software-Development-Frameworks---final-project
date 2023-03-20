import { createRouter, createWebHistory } from "vue-router";
import news from "@/components/news.vue";
import profile from "@/components/Profile.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import NewsDitales from "../views/NewsDitales.vue";

const routes = [
  {
    path: "/",
    name: "news",
    component: news,
  },
  {
    path: "/profile",
    name: "profile",
    component: profile,
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/NewsDitales",
    name: "NewsDitales",
    component: NewsDitales,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
