<script setup lang="ts">
import DataTableCell from "./DatatableCell.vue";

defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
  lineData: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <tr class="border-b h-[48px] font-normal last-of-type:border-none">
    <DataTableCell
      v-for="(header, index) in headers"
      :key="index"
      :type="header.type || 'text'"
      :value="lineData[header.key] ?? '-'"
    />
    <slot />
  </tr>
</template>
