<script setup lang="ts">
import CardBadge from "./CardBadge.vue";

defineProps({
  icon: {
    type: String,
    default: "",
  },
  header: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="lg:w-fit w-full p-[20px] justify-center flex flex-col ml-auto space-y-[20px] bg-white-100 rounded-[15px] text-dark-100 shadow-lg hover:-translate-y-1 hover:scale-100 duration-500 ease-in-out hover:shadow-secondary-200"
  >
    <CardBadge :icon="icon" />
    <div class="flex flex-col justify-center space-y-[8px]">
      <span class="text-lg font-bold">{{ header }} </span>
      <span class="text-sm mx-auto text-dark-100">{{ description }}</span>
    </div>
  </div>
</template>
