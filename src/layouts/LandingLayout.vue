<script setup lang="ts">
import AppFooter from "@/components/navbar/AppFooter.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import AboutUs from "@/components/sections/AboutUs.vue";
import ContactUs from "@/components/sections/ContactUs.vue";
import HerosSection from "@/components/sections/HerosSection.vue";
import HowToUse from "@/components/sections/HowToUse.vue";
</script>
<template>
  <div class="flex flex-col min-h-screen bg-white">
    <NavBar />
    <HerosSection id="home" />
    <AboutUs id="about-us" />
    <HowToUse id="how-to-use" />
    <ContactUs id="contact-us" />
    <AppFooter />
  </div>
</template>
