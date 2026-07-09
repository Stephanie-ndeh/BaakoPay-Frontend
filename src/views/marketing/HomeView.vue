<script setup lang="ts">
import HeroSection from "@/components/home/HeroSection.vue";
import ProblemSection from "@/components/home/ProblemSection.vue";
import PlatformShowcaseSection from "@/components/home/PlatformShowcaseSection.vue";
import HowItWorksTeaser from "@/components/home/HowItWorksTeaser.vue";
import WhoWeServeTeaser from "@/components/home/WhoWeServeTeaser.vue";
import CtaBanner from "@/components/layout/CtaBanner.vue";
</script>

<template>
  <div>
    <HeroSection />
    <ProblemSection v-reveal />
    <PlatformShowcaseSection v-reveal />
    <HowItWorksTeaser v-reveal />
    <WhoWeServeTeaser v-reveal />
    <CtaBanner v-reveal />
  </div>
</template>
