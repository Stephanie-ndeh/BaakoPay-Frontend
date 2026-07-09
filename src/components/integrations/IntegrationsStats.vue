<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const stats: { key: string; value: string }[] = [
  { key: "institutionTypes", value: "6+" },
  { key: "installmentPlans", value: "4" },
  { key: "collections", value: "24/7" },
  { key: "digitalReceipts", value: "100%" },
];
</script>

<template>
  <div>
    <div
      class="mx-auto grid max-w-[900px] grid-cols-2 items-center justify-between gap-y-8 border-t border-b border-border py-12 md:flex md:gap-6"
    >
      <template v-for="(stat, i) in stats" :key="stat.key">
        <div class="flex-1 text-center">
          <div
            class="mb-1.5 text-[28px] leading-[1.1] font-extrabold tracking-[-1.3px] text-brand md:text-4xl md:tracking-[-2px]"
          >
            {{ stat.value }}
          </div>
          <div class="text-[12.5px] font-semibold text-ink">
            {{ t(`integrations.stats.${stat.key}`) }}
          </div>
        </div>
        <div
          v-if="i < stats.length - 1"
          class="hidden h-12 w-px shrink-0 bg-border md:block"
        ></div>
      </template>
    </div>
    <p class="mt-10 text-center text-[15px] font-normal text-muted italic">
      {{ t("integrations.tagline") }}
    </p>
  </div>
</template>
