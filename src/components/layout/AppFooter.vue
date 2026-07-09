<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const productLinks: { key: string; to?: string }[] = [
  { key: "features" },
  { key: "howItWorks", to: "how-it-works" },
  { key: "solutions", to: "solutions" },
  { key: "integrations", to: "integrations" },
  { key: "pricing" },
  { key: "changelog" },
];

const companyLinks: { key: string; to?: string }[] = [
  { key: "about" },
  { key: "blog" },
  { key: "careers" },
  { key: "contact", to: "contact" },
  { key: "press" },
];

const legalLinks: { key: string }[] = [
  { key: "privacy" },
  { key: "terms" },
  { key: "security" },
  { key: "cookies" },
];
</script>

<template>
  <footer class="bg-ink px-5 md:px-10 lg:px-20 pt-[72px]">
    <div
      class="mx-auto flex max-w-[1100px] flex-col gap-10 pb-16 lg:flex-row lg:gap-0"
    >
      <div class="lg:basis-[36%] lg:pr-16">
        <RouterLink
          :to="{ name: 'home' }"
          class="mb-5 inline-flex items-center gap-[9px]"
        >
          <img
            src="/logo.png"
            :width="28"
            :height="28"
            alt=""
            class="rounded-[6.5px]"
          />
          <span class="text-base font-bold tracking-[-0.4px] text-white"
            >BaakoPay</span
          >
        </RouterLink>

        <div class="mb-1.5 flex items-start gap-2">
          <span
            class="mt-[5px] block h-[5px] w-[5px] shrink-0 rounded-full bg-gold"
          ></span>
          <p class="text-sm leading-[1.5] font-medium text-white">
            {{ t("footer.tagline") }}
          </p>
        </div>
        <p class="mb-7 ml-[13px] text-[13px] leading-[1.55] text-muted">
          {{ t("footer.description") }}
        </p>

        <div class="flex items-center gap-[18px]">
          <a
            v-for="icon in ['linkedin', 'twitter', 'instagram']"
            :key="icon"
            href="#"
            :aria-label="icon"
            class="text-muted hover:text-white"
          >
            <svg
              v-if="icon === 'linkedin'"
              width="18"
              height="18"
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
              width="18"
              height="18"
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
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none">
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

      <div class="grid grid-cols-2 gap-x-6 gap-y-8 md:flex md:flex-1">
        <div class="flex-1">
          <div
            class="mb-5 text-[10px] font-semibold tracking-[2px] text-muted uppercase"
          >
            {{ t("footer.product.title") }}
          </div>
          <div class="flex flex-col gap-3">
            <RouterLink
              v-for="link in productLinks"
              :key="link.key"
              :to="link.to ? { name: link.to } : '#'"
              class="text-[13.5px] font-normal text-white hover:text-muted"
            >
              {{ t(`footer.product.${link.key}`) }}
            </RouterLink>
          </div>
        </div>

        <div class="flex-1">
          <div
            class="mb-5 text-[10px] font-semibold tracking-[2px] text-muted uppercase"
          >
            {{ t("footer.company.title") }}
          </div>
          <div class="flex flex-col gap-3">
            <RouterLink
              v-for="link in companyLinks"
              :key="link.key"
              :to="link.to ? { name: link.to } : '#'"
              class="text-[13.5px] font-normal text-white hover:text-muted"
            >
              {{ t(`footer.company.${link.key}`) }}
            </RouterLink>
          </div>
        </div>

        <div class="flex-1">
          <div
            class="mb-5 text-[10px] font-semibold tracking-[2px] text-muted uppercase"
          >
            {{ t("footer.legal.title") }}
          </div>
          <div class="flex flex-col gap-3">
            <a
              v-for="link in legalLinks"
              :key="link.key"
              href="#"
              class="text-[13.5px] font-normal text-white hover:text-muted"
            >
              {{ t(`footer.legal.${link.key}`) }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-2 border-t border-white/10 py-6"
    >
      <span class="text-xs text-muted">{{ t("footer.copyright") }}</span>
      <span class="text-xs text-muted">{{ t("footer.poweredBy") }}</span>
    </div>
  </footer>
</template>
