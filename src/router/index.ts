import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "landing",
    path: "",
    component: () => import("../layouts/LandingLayout.vue"),
  },
  //   {
  //     name: "admin",
  //     path: "/admin",
  //     redirect: { name: "admin.dashboard" },
  //     component: () => import("@/layouts/MainLayout.vue"),
  //     children: [
  //       {
  //         name: "admin.dashboard",
  //         path: "dashboard",
  //         component: () => import("@/views/admin/AdminDashboard.vue"),
  //         meta: {
  //           breadcrumb: "Dashboard",
  //         },
  //       },
  //       {
  //         name: "admin.transactions",
  //         path: "transactions",
  //         component: () => import("@/views/admin/transactions/TransactionsView.vue"),
  //         meta: {
  //           breadcrumb: "Transactions",
  //           parent: "admin.dashboard",
  //         },
  //       },
  //       {
  //         name: "admin.reports",
  //         path: "Reports",
  //         component: () => import("@/views/admin/reports/ReportsView.vue"),
  //         meta: {
  //           breadcrumb: "Reports",
  //           parent: "admin.dashboard",
  //         },
  //       },
  //       {
  //         name: "admin.profile",
  //         path: "profile",
  //         component: () => import("@/views/admin/profile/ProfileView.vue"),
  //         meta: {
  //           breadcrumb: "profile",
  //           parent: "admin.dashboard",
  //         },
  //       },
  //     ],
  //   },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
