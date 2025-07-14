<script setup lang="ts">
import { computed, ref } from "vue";
import DataTableLine from "@/components/dataTable/DataTableLine.vue";
import DataTableCell from "@/components/dataTable/DataTableCell.vue";
import BaseButton from "@/components/bases/BaseButton.vue";
import BaseModal from "@/components/bases/BaseModal.vue";
import BottomBar from "@/components/navigation/BottomBar.vue";
import FilterDropDown from "@/components/common/FilterDropDown.vue";

const props = defineProps({
  lineActions: { type: Array, default: () => [] },
  headers: { type: Array, default: () => [] },
  headerText: { type: String, default: "" },
  data: { type: Array, default: () => [] },
  searchFilters: {
    type: Object,
    default: () => ({ transactionId: "", orderId: "", factory: "" }),
  },
});

const rowsPerPage = 10;
const currentPage = ref(1);
const statusFilter = ref([]);

// Computed filtered items
const filteredItems = computed(() => {
  let result = props.data;

  if (statusFilter.value.length) {
    result = result.filter((item) => statusFilter.value.includes(item.status));
  }

  const { transactionId, factory, orderId } = props.searchFilters;
  result = result.filter((item) => {
    return (
      (!transactionId ||
        String(item.transactionId)
          .toLowerCase()
          .includes(transactionId.toLowerCase())) &&
      (!factory ||
        String(item.factory).toLowerCase().includes(factory.toLowerCase())) &&
      (!orderId ||
        String(item.orderId).toLowerCase().includes(orderId.toLowerCase()))
    );
  });

  return result;
});

//  status filter
const handleCheckBoxFilter = (filter) => {
  if (statusFilter.value.includes(filter)) {
    statusFilter.value = statusFilter.value.filter((f) => f !== filter);
  } else {
    statusFilter.value.push(filter);
  }
};

// Pagination
const totalPages = computed(() =>
  Math.ceil(filteredItems.value.length / rowsPerPage),
);
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage;
  return filteredItems.value.slice(start, start + rowsPerPage);
});
const updatePage = (newPage) => {
  if (newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage;
  }
};

// modal display with row info

const isModalVisible = ref(false);
const selectedRow = ref(null);

const showRowDetails = (row) => {
  selectedRow.value = row;
  isModalVisible.value = true;
};
const closeModal = () => {
  isModalVisible.value = false;
};

const modalFields = [
  { label: "Transaction ID", key: "transactionId" },
  { label: "Order ID", key: "orderId" },
  { label: "User", key: "user" },
  { label: "Amount", key: "amount" },
  { label: "Factory", key: "factory" },
  { label: "Payment Method", key: "paymentMethod" },
  { label: "Status", key: "status", type: "badge" },
  { label: "Date", key: "date" },
];
</script>

<template>
  <div class="bg-white rounded-[15px] px-[20px] py-[10px]">
    <div class="flex items-center justify-between py-[10px]">
      <span class="text-[18px] font-semibold">{{ headerText }}</span>
      <FilterDropDown :data="props.data" @filter="handleCheckBoxFilter" />
    </div>

    <div class="w-full overflow-x-auto">
      <table class="w-full min-w-max">
        <thead>
          <tr class="border-b h-50 bg-neutral-200 font-bold">
            <th
              class="p-[12px] text-[14px] text-left"
              v-for="(header, index) in headers"
              :key="index"
            >
              {{ header.label }}
            </th>
            <th v-if="lineActions.length > 0" class="p-[12px] text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <DataTableLine
            v-for="(lineData, index) in paginatedData"
            :key="index"
            :line-data="lineData"
            :headers="headers"
          >
            <DataTableCell type="text">
              <button
                @click="showRowDetails(lineData)"
                :key="`line-action-${index}`"
                class="flex items-center space-x-1 font-medium text-[14px] text-primary-100 px-[8px] py-[3px] rounded-[10px] border-primary-100"
              >
                <span> View</span>
              </button>
            </DataTableCell>
          </DataTableLine>
        </tbody>
      </table>
    </div>
    <BottomBar
      :total-pages="totalPages"
      :current-page="currentPage"
      @page-change="updatePage"
    />
  </div>
  <BaseModal :is-visible="isModalVisible" @cancel="closeModal">
    <template #header>
      <h3 class="text-2xl font-semibold">Transaction Details</h3>
    </template>
    <template #default>
      <div v-if="selectedRow" class="space-y-3">
        <div
          class="flex items-center justify-between"
          v-for="field in modalFields"
          :key="field.key"
        >
          <span class="font-bold text-[18px] text-neutral-700">{{
            field.label
          }}</span>
          <span class="text-[17px] text-black">{{
            selectedRow[field.key]
          }}</span>
        </div>
      </div>
    </template>
    <template #footer>
      <BaseButton text="Close" @click="closeModal" color="primary" />
    </template>
  </BaseModal>
</template>
