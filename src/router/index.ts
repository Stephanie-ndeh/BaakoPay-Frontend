import { createRouter, createWebHistory } from "vue-router";
import transactions from "@/router/transactions";

const routes = [
  {
    name: "landing",
    path: "",
    component: () => import("../layouts/LandingLayout.vue"),
  },
  {
    name: "admin",
    path: "/admin",
    redirect: { name: "admin.dashboard" },
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        name: "admin.dashboard",
        path: "dashboard",
        component: () => import("@/views/admin/AdminView.vue"),
        meta: {
          breadcrumb: "Dashboard",
        },
        children: [
          transactions
        ],
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
