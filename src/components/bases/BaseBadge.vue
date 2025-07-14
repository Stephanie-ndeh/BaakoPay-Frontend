<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
});
const colorClass = computed(() => {
  switch (props.color) {
    case "success":
      return "bg-success-100 text-success-100 ";
    case "warning":
      return "bg-warning-100 text-warning-100";
    case "danger":
      return "bg-danger-100 text-danger-300";
    default:
      return "bg-primary-100 text-primary-100 ";
  }
});
</script>
<template>
  <div
    class="px-1.5 py-[3px] inline-flex items-center rounded-[3px] bg-opacity-35"
    :class="colorClass"
  >
    <span class="text-[11px] font-medium">{{ text }}</span>
  </div>
</template>
