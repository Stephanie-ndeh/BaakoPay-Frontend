<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import BaseIcon from "@/components/bases/BaseIcon.vue";

const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  to: {
    type: String,
    default: "",
  },
});
const route = useRoute();

const isActive = computed(() => {
  const routeName = route.name;
  return props.to && routeName === props.to;
});
</script>
<template>
  <div
    @click="to ? $router.push({ name: to }) : null"
    class="w-full px-[10px] py-[8px] space-x-[10px] flex items-center rounded-[5px] cursor-pointer text-dark font-medium"
    :class="
      isActive
        ? 'bg-primary-100 text-white'
        : 'hover:bg-primary-100 hover:text-white '
    "
  >
    <BaseIcon :name="icon" :stroke-width="2" :size="15" />
    <span class="text-[14px]">{{ text }}</span>
  </div>
</template>
