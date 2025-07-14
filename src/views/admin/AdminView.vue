<script setup lang="ts">
import Breadcrumb from "@/components/common/BreadCrumb.vue";
import { ref, computed } from "vue";
import DataTable from "@/components/dataTable/DataTable.vue";
import transactions from "@/assets/data/fake/transactions.ts";


const headers = [
  { label: "Transaction ID", key: "transactionId" },
  { label: "Order ID", key: "orderId" },
  { label: "User", key: "user" },
  { label: "Amount", key: "amount" },
  { label: "Factory", key: "factory" },
  { label: "Payment Method", key: "paymentMethod" },
  { label: "Status", key: "status", type: "badge" },
  { label: "Date", key: "date" },
];
const cards = ref([
  {
    icon: "TrendingUp",
    price: "XAF 100,000",
    description: "Total Payment Processed",
    color: "primary",
  },
  {
    icon: "Send",
    price: "100",
    description: "Total transactions today",
    color: "success",
  },
  {
    icon: "BadgeDollarSign",
    price: "100",
    description: "Total Payments today",
    color: "secondary",
  },
]);
const lineSeries = [
  { name: "Transactions", data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
];

const barSeries = [
  {
    name: "Revenue",
    data: [5000, 7000, 6500, 8000, 12000, 15000, 20000, 30000, 2000],
  },
];
const categories = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
];

// Sort transactions by date in descending order (newest first)
const sortedTransactions = computed(() => {
  return [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
});

// Get the latest 5 transactions
const latestTransactions = computed(() => {
  return sortedTransactions.value.slice(0, 5);
});
</script>
<template>
  <div class="min-h-full w-full flex flex-col space-y-[30px]">
    <Breadcrumb />

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
<!--      <SummaryCard-->
<!--        v-for="(card, index) in cards"-->
<!--        :key="index"-->
<!--        :icon="card.icon"-->
<!--        :title="card.price"-->
<!--        :description="card.description"-->
<!--        :color="card.color"-->
<!--      />-->
    </div>
    <div
      class="flex flex-col lg:flex-row space-y-[20px] md:space-y-0 lg:space-x-[20px] w-full"
    >
<!--      <Chart-->
<!--        type="line"-->
<!--        header="Total Transactions Overtime"-->
<!--        description="100,000"-->
<!--        :series="lineSeries"-->
<!--        :categories="categories"-->
<!--      />-->
<!--      <Chart-->
<!--        type="bar"-->
<!--        header="Monthly Payments Processed"-->
<!--        description="$50,000"-->
<!--        :series="barSeries"-->
<!--        :categories="categories"-->
<!--      />-->
    </div>
    <div class="w-full h-full mt-[20px]">
      <DataTable
        headerText="Recent Transactions"
        :headers="headers"
        :data="latestTransactions"
        :line-actions="[
          {
            type: 'view',
          },
        ]"
      />
    </div>
  </div>
</template>
