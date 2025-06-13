<script setup lang="ts">
import NavBar from "@/components/navbar/NavBar.vue";
import AboutUs from "@/components/sections/AboutUs.vue";
import HerosSection from "@/components/sections/HerosSection.vue";
</script>
<template>
  <div class="flex flex-col min-h-screen bg-white">
    <NavBar />
    <HerosSection />
    <AboutUs />
  </div>
</template>
