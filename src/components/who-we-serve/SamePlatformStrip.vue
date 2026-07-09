<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ICONS } from "@/assets/icons";

const { t } = useI18n();

const items: { key: string; icon: string }[] = [
  { key: "businesses", icon: "grid" },
  { key: "schools", icon: "cap" },
  { key: "hospitals", icon: "hospital" },
  { key: "ngos", icon: "heart" },
  { key: "merchants", icon: "tag" },
];
</script>

<template>
  <section class="border-t border-border bg-white px-5 md:px-10 lg:px-20 pb-24">
    <div class="mx-auto max-w-[800px] pt-20 text-center">
      <h2
        class="mb-[18px] text-[24px] leading-[1.2] font-extrabold tracking-[-0.7px] text-ink md:text-[29px] md:tracking-[-0.9px] lg:text-[34px] lg:leading-[1.15] lg:tracking-[-1.1px]"
      >
        {{ t("whoWeServe.samePlatform.title") }}
      </h2>
      <p
        class="mx-auto mb-14 text-[15.5px] leading-[1.72] font-normal text-muted"
      >
        {{ t("whoWeServe.samePlatform.description") }}
      </p>
      <div class="flex flex-wrap items-center justify-center gap-y-6">
        <template v-for="(item, i) in items" :key="item.key">
          <div
            class="flex flex-1 basis-1/3 flex-col items-center gap-2.5 md:basis-auto"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-muted [&>svg]:h-[22px] [&>svg]:w-[22px]"
              v-html="ICONS[item.icon]"
            ></div>
            <span class="text-xs font-medium text-muted">{{
              t(`common.industries.${item.key}`)
            }}</span>
          </div>
          <div
            v-if="i < items.length - 1"
            class="hidden h-6 w-px shrink-0 bg-border md:block"
          ></div>
        </template>
      </div>
    </div>
  </section>
</template>
