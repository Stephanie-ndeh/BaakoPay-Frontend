<script setup lang="ts">
import { ref, onMounted, onUnmounted, type Ref } from "vue";
import Card from "../common/BoxCard.vue";
import gsap from "gsap";

interface AboutItem {
  icon: string;
  header: string;
  description: string;
}

const items: Ref<AboutItem[]> = ref([
  {
    icon: "CircleDollarSign",
    header: "Instant Payments",
    description:
      "Transfer Funds instantly without delays. Our real-time processing ensures payments are sent and received within seconds",
  },
  {
    icon: "ShieldBan",
    header: "Enhanced Security",
    description:
      "Your Transactions are protected with advanced encryption and multilayer authentication, ensuring your payments remain safe and secure",
  },
  {
    icon: "CreditCard",
    header: "Multiple Payment Options",
    description:
      "Choose from various payment methods, including mobile wallets, bank transfers and mobile money making transactions easy and convenient",
  },
]);

const sectionRef: Ref<HTMLElement | null> = ref(null); // Ref to the section element
let observer: IntersectionObserver | null = null; // Intersection Observer instance
let gsapCtx: gsap.Context | null = null; // GSAP Context for cleanup

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      const cards = sectionRef.value?.querySelectorAll(".card-item");
      cards?.forEach((card, index) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.5,
          ease: "power2.out",
        });
      });
      // Disconnect the observer after the animation has played
      if (observer) {
        observer.disconnect();
      }
    }
  });
};

onMounted(() => {
  if (sectionRef.value) {
    gsapCtx = gsap.context(() => {
      // All GSAP animations and IntersectionObserver setup within this context
      observer = new IntersectionObserver(handleIntersection, {
        root: null, // defaults to viewport
        threshold: 0.2, // Trigger when 20% of the section is visible
      });

      if (sectionRef.value) {
        observer.observe(sectionRef.value);
      }
    }, sectionRef.value); // Scope the context to the sectionRef element
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
  // Revert all GSAP animations and kill them from the context
  gsapCtx?.revert();
});
</script>

<template>
  <div
    class="w-full py-[40px] lg:py-[60px] px-5 lg:px-20 3xl:px-45 inline-flex text-dark-100"
  >
    <div class="flex flex-col gap-[30px] lg:gap-[80px] w-full">
      <div class="flex-col gap-[10px] inline-flex">
        <span class="text-primary-100 text-[24px] font-bold">
          What Sets Us Apart
        </span>
        <div class="text-dark-100 text-[16px] lg:text-[18px] font-medium">
          Explore the features that make performing your transactions easy
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-[30px]" ref="sectionRef">
        <Card
          v-for="(item, index) in items"
          :data-index="index"
          :key="index"
          :icon="item.icon"
          :header="item.header"
          :description="item.description"
          class="card-item"
          style="opacity: 0; transform: translateY(100px)"
        />
      </div>
    </div>
  </div>
</template>
