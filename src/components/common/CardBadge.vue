<script setup lang="ts">
import BaseIcon from "../bases/BaseIcon.vue";

defineProps({
  icon: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div
    class="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] bg-blue-100 text-primary-100"
  >
    <BaseIcon :name="icon" :size="24" :stroke-width="3" />
    <!-- <box-icon
      class="block m-auto"
      :name="icon"
      color="blue"
      type="solid"
      animation="tada-hover"
    ></box-icon> -->
  </div>
</template>
