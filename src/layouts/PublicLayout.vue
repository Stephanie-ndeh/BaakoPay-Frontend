<script setup lang="ts">
import AppNavbar from "@/components/layout/AppNavbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<template>
  <div class="min-h-screen bg-white">
    <AppNavbar />
    <main>
      <RouterView v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
  </div>
</template>
