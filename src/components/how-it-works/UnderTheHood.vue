<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SectionEyebrow from "@/components/ui/SectionEyebrow.vue";
import { ICONS } from "@/assets/icons";

const { t } = useI18n();

const items: { key: string; icon: string }[] = [
  { key: "verification", icon: "search" },
  { key: "reconciliation", icon: "refresh" },
  { key: "visibility", icon: "eye" },
];
</script>

<template>
  <section
    class="border-t border-border bg-white px-5 md:px-10 lg:px-20 pt-24 pb-28"
  >
    <div class="mb-16 text-center">
      <SectionEyebrow
        :label="t('howItWorks.underTheHood.eyebrow')"
        class="mb-[18px]"
      />
      <h2
        class="text-[24px] leading-[1.2] font-extrabold tracking-[-0.7px] text-ink md:text-[30px] md:tracking-[-1px] lg:text-4xl lg:leading-[1.15] lg:tracking-[-1.2px]"
      >
        {{ t("howItWorks.underTheHood.title") }}
      </h2>
    </div>

    <div
      class="mx-auto flex max-w-[1040px] flex-col gap-10 md:flex-row md:gap-14"
    >
      <div v-for="item in items" :key="item.key" class="min-w-0 flex-1">
        <div
          class="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-tint text-brand"
          v-html="ICONS[item.icon]"
        ></div>
        <h3 class="mb-2.5 text-base font-bold tracking-[-0.3px] text-ink">
          {{ t(`howItWorks.underTheHood.${item.key}.title`) }}
        </h3>
        <p class="text-[14.5px] leading-[1.68] font-normal text-muted">
          {{ t(`howItWorks.underTheHood.${item.key}.description`) }}
        </p>
      </div>
    </div>
  </section>
</template>
