<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import BaseIcon from "../bases/BaseIcon.vue";
import BaseButton from "../bases/BaseButton.vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const links = [
  { name: "Home", target: "home" },
  { name: "About Us", target: "about-us" },
  { name: "How to Use", target: "how-to-use" },
  { name: "Contact Us", target: "contact-us" },
];
const windowWidth = ref(window.innerWidth);
const activeSection = ref("");
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

const scrollToSection = (target: string) => {
  const headerHeight = document.querySelector("header")?.offsetHeight || 0;
  const element = document.getElementById(target);

  if (element) {
    const targetPosition =
      element.getBoundingClientRect().top + window.scrollY - headerHeight;

    activeSection.value = target;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};

const updateActiveSection = () => {
  const headerHeight = document.querySelector("header")?.offsetHeight || 0;
  const scrollPosition = window.scrollY + headerHeight + 1;

  for (const { target } of links) {
    const section = document.getElementById(target);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSection.value = target;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("resize", updateWindowWidth);
  window.addEventListener("scroll", updateActiveSection);
  updateActiveSection();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
  window.removeEventListener("scroll", updateActiveSection);
});
</script>

<template>
  <nav
    class="w-full z-20 top-0 start-0 bg-primary-100 bg-opacity-90 text-white"
  >
    <div
      class="flex flex-wrap justify-between items-center mx-auto p-4 px-5 lg:px-20 3xl:px-45"
    >
      <!-- Logo -->
      <a href="#" class="flex items-center rtl:space-x-reverse">
        <!-- <img src="/B2.png" class="h-9 w-9" alt="Flowbite Logo" /> -->
        <span class="self-center text-2xl whitespace-nowrap font-bold"
          >BaakoPay</span
        >
      </a>

      <!-- Right Section (Button & Toggle Menu) -->
      <div class="flex lg:order-2 space-x-2 lg:space-x-0 rtl:space-x-reverse">
        <BaseButton text="Contact Us" color="secondary-stroke" />
        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-secondary-500 rounded-lg lg:hidden focus:outline-none bg-white ring-2 ring-secondary-300"
          aria-controls="navbar-sticky"
          :aria-expanded="isOpen"
        >
          <BaseIcon name="Menu" :stroke-width="2" :size="25" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        :class="{ hidden: !isOpen }"
        class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-secondary-200 rounded-lg bg-secondary-200 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent"
        >
          <li
            v-for="(link, index) in links"
            :key="index"
            @click.prevent="scrollToSection(link.target)"
            class="block py-2 px-3 rounded-sm lg:bg-transparent lg:p-0"
            aria-current="page"
          >
            {{ link.name }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
