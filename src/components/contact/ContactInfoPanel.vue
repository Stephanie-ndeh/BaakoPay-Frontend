<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div
    class="w-full rounded-2xl bg-tint px-6 py-8 sm:px-9 sm:py-10 lg:basis-[38%]"
  >
    <h2 class="mb-3 text-xl font-extrabold tracking-[-0.5px] text-ink">
      {{ t("contact.info.title") }}
    </h2>
    <p class="mb-8 text-sm leading-[1.68] font-normal text-muted">
      {{ t("contact.info.description") }}
    </p>

    <div class="mb-8 flex flex-col gap-[18px]">
      <div class="flex items-center gap-3.5">
        <div
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] bg-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              stroke="#0D47FF"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="m22 6-10 7L2 6"
              stroke="#0D47FF"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <span class="text-[13.5px] font-medium text-ink"
          >hello@baakopay.com</span
        >
      </div>

      <div class="flex items-center gap-3.5">
        <div
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] bg-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
              stroke="#0D47FF"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="12" cy="10" r="3" stroke="#0D47FF" stroke-width="1.7" />
          </svg>
        </div>
        <span class="text-[13.5px] font-medium text-ink">{{
          t("contact.info.location")
        }}</span>
      </div>

      <div class="flex items-center gap-3.5">
        <div
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] bg-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#0D47FF" stroke-width="1.7" />
            <path
              d="M12 7v5l3 3"
              stroke="#0D47FF"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <span class="text-[13.5px] font-medium text-ink">{{
          t("contact.info.responseTime")
        }}</span>
      </div>
    </div>

    <div class="mb-7 h-px bg-ink/[0.08]"></div>

    <div class="mb-4 text-xs font-semibold tracking-[0.5px] text-ink">
      {{ t("contact.info.followUs") }}
    </div>
    <div class="flex items-center gap-3.5">
      <a
        v-for="icon in ['linkedin', 'twitter', 'instagram']"
        :key="icon"
        href="#"
        :aria-label="icon"
        class="flex h-9 w-9 items-center justify-center rounded-[9px] bg-white text-brand hover:bg-tint-strong"
      >
        <svg
          v-if="icon === 'linkedin'"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="2"
            y="9"
            width="4"
            height="12"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="4"
            cy="4"
            r="2"
            stroke="currentColor"
            stroke-width="1.6"
          />
        </svg>
        <svg
          v-else-if="icon === 'twitter'"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 4l16 16M4 20L20 4"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
          />
        </svg>
        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            stroke-width="1.6"
          />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      </a>
    </div>
  </div>
</template>
