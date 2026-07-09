<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SectionEyebrow from "@/components/ui/SectionEyebrow.vue";
import { ICONS } from "@/assets/icons";

type Variant = "brand" | "tint" | "outline";

interface Tag {
  key: string;
  variant: Variant;
  icon: string;
}

const { t } = useI18n();

const rows: Tag[][] = [
  [
    { key: "businesses", variant: "brand", icon: "grid" },
    { key: "schools", variant: "tint", icon: "cap" },
    { key: "commerces", variant: "outline", icon: "store" },
    { key: "ngos", variant: "tint", icon: "heart" },
  ],
  [
    { key: "hospitalInstitutions", variant: "brand", icon: "hospital" },
    { key: "btpConstruction", variant: "outline", icon: "hardhat" },
    { key: "eStores", variant: "tint", icon: "monitor" },
  ],
  [
    { key: "industries", variant: "brand", icon: "bars" },
    { key: "restaurants", variant: "outline", icon: "bubble" },
    { key: "events", variant: "tint", icon: "calendar" },
    { key: "travelAgencies", variant: "outline", icon: "phone" },
  ],
  [
    { key: "merchants", variant: "tint", icon: "tag" },
    { key: "distributors", variant: "outline", icon: "truck" },
  ],
];

const rowOffsets = ["", "lg:pl-6", "lg:pl-2", "lg:pl-10"];

const variantClasses: Record<Variant, string> = {
  brand: "bg-brand text-white",
  tint: "bg-tint text-ink",
  outline: "border border-border bg-white text-muted",
};
</script>

<template>
  <section class="bg-white px-5 md:px-10 lg:px-20 pt-[88px] pb-24">
    <div
      class="mx-auto flex max-w-[1100px] flex-col items-start gap-10 lg:flex-row lg:gap-20"
    >
      <!-- Left -->
      <div class="lg:basis-[38%]">
        <SectionEyebrow
          :label="t('home.whoWeServeTeaser.eyebrow')"
          class="mb-5"
        />
        <h2
          class="mb-[18px] text-[24px] leading-[1.2] font-extrabold tracking-[-0.8px] text-ink md:text-[30px] md:tracking-[-1.1px] lg:text-4xl lg:leading-[1.12] lg:tracking-[-1.3px]"
        >
          {{ t("home.whoWeServeTeaser.title") }}
        </h2>
        <p class="mb-7 text-[15px] leading-[1.7] font-normal text-muted">
          {{ t("home.whoWeServeTeaser.description") }}
        </p>
        <RouterLink
          :to="{ name: 'who-we-serve' }"
          class="text-[14.5px] font-semibold text-brand hover:underline"
        >
          {{ t("home.whoWeServeTeaser.cta") }}
        </RouterLink>
      </div>

      <!-- Right: staggered pills -->
      <div class="flex flex-1 flex-col gap-3 pt-2">
        <div
          v-for="(row, i) in rows"
          :key="i"
          class="flex flex-wrap gap-2.5"
          :class="rowOffsets[i]"
        >
          <span
            v-for="tag in row"
            :key="tag.key"
            class="inline-flex items-center gap-2 rounded-lg px-[18px] py-2.5 text-[13.5px] font-semibold whitespace-nowrap"
            :class="variantClasses[tag.variant]"
          >
            <span v-html="ICONS[tag.icon]"></span>
            {{ t(`common.industries.${tag.key}`) }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
