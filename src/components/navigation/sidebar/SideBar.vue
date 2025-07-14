<script setup lang="ts">
import { ref } from "vue";
import SidebarItem from "@/components/navigation/sidebar/SidebarItem.vue";
import BaseIcon from "@/components/bases/BaseIcon.vue";

const items = ref([
  {
    icon: "LayoutDashboard",
    text: "Overview",
    to: "admin.dashboard",
  },
  {
    icon: "BadgeDollarSign",
    text: "Transactions",
    to: "admin.transactions",
  },
  {
    icon: "BarChart3",
    text: "Reports",
    to: "admin.reports",
  },
]);
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <nav class="fixed top-0 z-50 w-full bg-white border-b text-dark-100">
    <div class="px-3 py-3 lg:px-5 lg:pl-3 flex items-center justify-between">
      <div class="flex items-center">
        <button
          @click="toggleSidebar"
          class="p-2 text-Dark-100 rounded-lg sm:hidden"
        >
          <BaseIcon name="Menu" :stroke-width="2" :size="25" />
        </button>
        <a href="#" class="flex items-center ml-2">
          <!--          <img src="/B2.png" class="h-8" alt="Logo" />-->
          <span class="text-2xl text-neutral-700 font-bold">BaakoPay</span>
        </a>
      </div>
      <div class="relative">
        <div class="ml-auto flex space-x-[8px]">
          <!-- <NotificationDropdown />
          <LanguageDropDown /> -->
          <!--          <UserDropDown />-->
        </div>
      </div>
    </div>
  </nav>
  <aside
    :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    class="fixed md:translate-x-0 md:static top-0 z-40 pt-16 w-64 h-screen bg-white text-black transition-transform duration-300 overflow-hidden"
  >
    <nav class="p-4 flex flex-col h-full">
      <div class="space-y-[12px] mb-auto">
        <SidebarItem
          v-for="(item, index) in items"
          :key="index"
          :icon="item.icon"
          :text="item.text"
          :to="item.to"
        />
      </div>
      <div class="space-y-[12px] mt-auto">
        <!-- <SidebarItem icon="LogOut" text="Logout" @click="showLogoutModal" /> -->
        <SidebarItem icon="Settings" text="settings" to="admin.profile" />
      </div>
    </nav>
  </aside>
</template>

<style scoped>
.transition-transform {
  transition: transform 0.3s ease-in-out;
}
</style>
