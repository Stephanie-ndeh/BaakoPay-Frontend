<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="inline-flex items-center gap-[9px]">
    <span class="block h-1.5 w-1.5 shrink-0 rounded-full bg-gold"></span>
    <span
      class="text-[10.5px] font-bold tracking-[2.2px] text-muted uppercase"
      >{{ label }}</span
    >
  </div>
</template>
