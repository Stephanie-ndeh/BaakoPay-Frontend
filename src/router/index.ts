import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/PublicLayout.vue"),
    children: [
      {
        name: "home",
        path: "",
        component: () => import("@/views/marketing/HomeView.vue"),
        meta: {
          titleKey: "home.meta.title",
          descriptionKey: "home.meta.description",
        },
      },
      {
        name: "solutions",
        path: "solutions",
        component: () => import("@/views/marketing/SolutionsView.vue"),
        meta: {
          titleKey: "solutions.meta.title",
          descriptionKey: "solutions.meta.description",
        },
      },
      {
        name: "who-we-serve",
        path: "who-we-serve",
        component: () => import("@/views/marketing/WhoWeServeView.vue"),
        meta: {
          titleKey: "whoWeServe.meta.title",
          descriptionKey: "whoWeServe.meta.description",
        },
      },
      {
        name: "how-it-works",
        path: "how-it-works",
        component: () => import("@/views/marketing/HowItWorksView.vue"),
        meta: {
          titleKey: "howItWorks.meta.title",
          descriptionKey: "howItWorks.meta.description",
        },
      },
      {
        name: "integrations",
        path: "integrations",
        component: () => import("@/views/marketing/IntegrationsView.vue"),
        meta: {
          titleKey: "integrations.meta.title",
          descriptionKey: "integrations.meta.description",
        },
      },
      {
        name: "contact",
        path: "contact",
        component: () => import("@/views/marketing/ContactView.vue"),
        meta: {
          titleKey: "contact.meta.title",
          descriptionKey: "contact.meta.description",
        },
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
});

export default router;
