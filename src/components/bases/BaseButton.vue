<script setup lang="ts">
import { computed } from "vue";
import BaseIcon from "./BaseIcon.vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  iconName: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "neutral",
  },
});
const colorClass = computed(() => {
  switch (props.color) {
    case "primary":
      return "bg-primary-100 text-white hover:bg-blue-950 ";
    case "secondary-stroke":
      return "border border-secondary-100 text-secondary-100";
    case "danger":
      return "bg-danger-100 text-white hover:bg-red-700";
    case "neutral":
      return "border-[1px] border-secondary-100 text-secondary-100";
    default:
      return "";
  }
});
</script>
<template>
  <button
    class="w-full flex items-center justify-center space-x-[10px] px-[10px] py-[8px] h-full rounded-[8px] text-[14px] font-medium capitalize"
    :class="[colorClass]"
  >
    <span>{{ text }}</span>
    <BaseIcon v-if="iconName" :name="iconName" :size="18" :stroke-width="2" />
  </button>
</template>
