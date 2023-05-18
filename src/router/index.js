import { createRouter, createWebHistory } from "vue-router";
import news from "@/components/news.vue";
import profile from "@/components/Profile.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import NewsDitales from "../views/NewsDitales.vue";

const routes = [
  {
    path: "/home",
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
    path: "/NewsDitales/:newsLink",
    name: "NewsDitales",
    component: NewsDitales,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
// {
//   path: "/:catchAll(.*)",
//   name: "news",
//   component: news,
// },
