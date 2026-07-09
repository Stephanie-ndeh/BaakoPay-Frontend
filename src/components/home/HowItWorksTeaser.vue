<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SectionEyebrow from "@/components/ui/SectionEyebrow.vue";

const { t, tm } = useI18n();
const steps = tm("home.howItWorksTeaser.steps") as string[];
</script>

<template>
  <section class="bg-tint px-5 md:px-10 lg:px-20 pt-[88px] pb-24">
    <div class="mb-14 text-center">
      <SectionEyebrow
        :label="t('home.howItWorksTeaser.eyebrow')"
        class="mb-[18px]"
      />
      <h2
        class="text-[24px] leading-[1.2] font-extrabold tracking-[-0.7px] text-ink md:text-[30px] md:tracking-[-1px] lg:text-4xl lg:leading-[1.15] lg:tracking-[-1.2px]"
      >
        {{ t("home.howItWorksTeaser.title") }}
      </h2>
    </div>
    <div
      class="mx-auto mb-12 grid max-w-[960px] grid-cols-2 items-start gap-y-8 md:flex md:gap-y-0"
    >
      <template v-for="(step, i) in steps" :key="step">
        <div
          class="flex flex-1 flex-col items-center gap-3.5 px-4 text-center md:px-6"
        >
          <div
            class="text-[30px] leading-none font-extrabold tracking-[-1.5px] text-brand md:text-[38px] md:tracking-[-2px] lg:text-[44px] lg:tracking-[-2.5px]"
          >
            {{ String(i + 1).padStart(2, "0") }}
          </div>
          <div class="text-[14.5px] leading-[1.35] font-bold text-ink">
            {{ step }}
          </div>
        </div>
        <div
          v-if="i < steps.length - 1"
          class="mt-5 hidden w-px shrink-0 self-stretch bg-tint-strong md:block"
        ></div>
      </template>
    </div>
    <div class="text-center">
      <RouterLink
        :to="{ name: 'how-it-works' }"
        class="text-[14.5px] font-semibold text-brand hover:underline"
      >
        {{ t("home.howItWorksTeaser.cta") }}
      </RouterLink>
    </div>
  </section>
</template>
