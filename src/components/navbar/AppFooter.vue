<script setup lang="ts">
import { ref } from "vue";
import BaseIcon from "../bases/BaseIcon.vue";

const items = ref([
  {
    category: "Company",
    links: ["About Us", "Blog"],
  },
  {
    category: "Product",
    links: ["Features", "Pricing", "Security"],
  },
  {
    category: "Support",
    links: ["Help Center", "Terms of Service", "Privacy"],
  },
]);
const icons = ref([
  {
    name: "Twitter",
  },
  {
    name: "Instagram",
  },
  {
    name: "Linkedin",
  },
]);
</script>
<template>
  <footer
    class="w-full px-5 lg:px-20 3xl:px-45 py-6 lg:py-8 bg-gradient-to-b from-white to-primary-100"
  >
    <div class="lg:flex lg:justify-between">
      <div class="mb-6 lg:mb-0">
        <a href="https://flowbite.com/" class="flex items-center">
          <!-- <img src="/B2.png" class="h-8 me-2" alt="BaakoPay Logo" /> -->
          <span class="self-center text-2xl font-bold whitespace-nowrap"
            >BaakoPay</span
          >
        </a>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div v-for="(item, index) in items" :key="index">
          <h2 class="mb-6 text-sm font-bold uppercase">
            {{ item.category }}
          </h2>
          <ul class="text-white font-medium">
            <li
              v-for="(link, linkIndex) in item.links"
              :key="linkIndex"
              class="mb-4"
            >
              <a href="#" class="hover:underline">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-neutral-200 sm:mx-auto lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between text-white">
      <span class="text-sm sm:text-center"
        >© 2025
        <a href="https://flowbite.com/" class="hover:underline">BaakoPay™</a>.
        All Rights Reserved.
      </span>
      <div class="flex mt-4 sm:justify-center space-x-2 sm:mt-0">
        <a
          href="#"
          class="hover:text-primary-100"
          v-for="(icon, index) in icons"
          :key="index"
        >
          <BaseIcon :name="icon.name" :size="20" />
        </a>
      </div>
    </div>
  </footer>
</template>
