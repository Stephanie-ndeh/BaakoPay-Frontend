<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  totalPages: Number,
  currentPage: Number,
});
const emit = defineEmits(["page-change"]);

const pages = computed(() =>
  Array.from({ length: props.totalPages }, (_, i) => i + 1),
);

const goToPage = (page) => {
  emit("page-change", page);
};

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit("page-change", props.currentPage + 1);
  }
};

const prevPage = () => {
  if (props.currentPage > 1) {
    emit("page-change", props.currentPage - 1);
  }
};
</script>

<template>
  <div class="flex items-center justify-between p-4 w-full">
    <span class="text-neutral-600"
    >Showing page {{ currentPage }} of {{ totalPages }}</span
    >
    <div>
      <ul class="flex items-center space-x-2">
        <li
          class="border px-3 py-1 rounded-md text-gray-500 cursor-pointer hover:bg-gray-100"
          @click="prevPage"
        >
          Previous
        </li>
        <li
          v-for="page in pages"
          :key="page"
          :class="[
            'border px-3 py-1 rounded-md cursor-pointer',
            page === currentPage
              ? 'bg-primary-100 text-white'
              : 'text-neutral-700 hover:bg-gray-100',
          ]"
          @click="goToPage(page)"
        >
          {{ page }}
        </li>
        <li
          class="border px-3 py-1 rounded-md text-gray-500 cursor-pointer hover:bg-gray-100"
          @click="nextPage"
        >
          Next
        </li>
      </ul>
    </div>
  </div>
</template>
