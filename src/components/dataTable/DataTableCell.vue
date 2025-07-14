<script setup lang="ts">
import { computed } from "vue";
import BaseBadge from "@/components/bases/BaseBadge.vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "-",
  },
});
const isBadge = computed(() => props.type === "badge");
const badgeColor = computed(() => {
  switch (props.value) {
    case "success":
      return "success";
    case "failed":
      return "danger";
    case "pending":
      return "warning";
    default:
      return "neutral";
  }
});
</script>
<template>
  <td class="p-[12px] text-[14px] text-left">
    <div class="flex space-x-2">
      <slot>
        <span v-if="!isBadge">{{ value }}</span>
        <BaseBadge v-if="isBadge" :color="badgeColor" :text="value" />
      </slot>
    </div>
  </td>
</template>
