export default {
  name: "admin.transactions",
  path: "transactions",
  component: () => import("@/views/transactions/TransactionView.vue"),
  meta: {
    breadcrumb: "Transactions",
    parent: "admin.dashboard",
  },
};
