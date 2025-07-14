<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import DataTable from "@/components/dataTable/DataTable.vue";
import Breadcrumb from "@/components/common/BreadCrumb.vue";

const transactions = ref([]);
const searchFilters = ref({ transactionId: "", orderId: "", factory: "" });

const headers = [
  { label: "Transaction ID", key: "transaction_id" },
  { label: "Type", key: "type" },
  { label: "Amount", key: "amount" },
  { label: "Status", key: "status", type: "badge" },
  { label: "Date", key: "createdAt" },
];

const fetchTransactions = async () => {
  const res = await axios.get("http://localhost:3000/api/transactions");
  transactions.value = res.data;
};

onMounted(fetchTransactions);
</script>

<template>
  <div class="min-h-full w-full flex flex-col space-y-[20px]">
    <Breadcrumb />
    <div class="h-full">
      <DataTable
        HeaderText="All Transactions"
        :headers="headers"
        :data="transactions"
        :search-filters="searchFilters"
        :line-actions="[{ icon: 'Eye' }]"
      />
    </div>
  </div>
</template>
