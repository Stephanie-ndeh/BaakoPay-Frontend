<script setup lang="ts">
import SideBar from "@/components/navigation/sidebar/SideBar.vue";
</script>
<template>
  <div class="flex h-screen bg-light-300 overflow-hidden">
    <SideBar />
    <div
      class="flex-1 overflow-y-auto overflow-x-none w-full px-[15px] md:px-[20px] pt-[100px] pb-[40px]"
    >
      <RouterView></RouterView>
    </div>
  </div>
</template>
