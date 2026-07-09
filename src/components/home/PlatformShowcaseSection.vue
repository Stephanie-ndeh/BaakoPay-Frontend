<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SectionEyebrow from "@/components/ui/SectionEyebrow.vue";

interface CollectionRow {
  name: string;
  amount: string;
  statusKey: "paid" | "pending";
}

const { t } = useI18n();

const collectionsRows: CollectionRow[] = [
  { name: "Cameroon Oil Corp", amount: "XAF 850,000", statusKey: "paid" },
  { name: "Global Agro SARL", amount: "XAF 340,000", statusKey: "pending" },
  { name: "Horizon Distributors", amount: "XAF 120,000", statusKey: "paid" },
];
</script>

<template>
  <section class="bg-white px-5 md:px-10 lg:px-20 pt-24 pb-[104px]">
    <div v-reveal class="mb-14 text-center">
      <SectionEyebrow :label="t('home.platform.eyebrow')" class="mb-[18px]" />
      <h2
        class="mb-3.5 text-[24px] leading-[1.2] font-extrabold tracking-[-0.7px] text-ink md:text-[30px] md:tracking-[-1px] lg:text-4xl lg:leading-[1.15] lg:tracking-[-1.2px]"
      >
        {{ t("home.platform.title") }}
      </h2>
      <p
        class="mx-auto max-w-[460px] text-base leading-[1.65] font-normal text-muted"
      >
        {{ t("home.platform.description") }}
      </p>
    </div>

    <div
      class="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[300px_230px]"
    >
      <!-- Panel 1: brand blue -->
      <div
        v-reveal
        class="relative flex flex-col justify-between gap-8 overflow-hidden rounded-[20px] bg-brand px-8 py-10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg md:col-span-2 lg:px-[52px] lg:py-12"
      >
        <div>
          <div
            class="mb-2 text-[30px] leading-none font-extrabold tracking-[-1.3px] text-white md:text-[36px] md:tracking-[-1.6px] lg:text-[42px] lg:tracking-[-2px]"
          >
            {{ t("home.platform.brandTitle") }}
          </div>
          <div class="text-sm text-white/[0.62]">
            {{ t("home.platform.brandSubtitle") }}
          </div>
        </div>
        <div>
          <button
            class="rounded-full bg-white px-6 py-[11px] text-[13.5px] font-bold text-brand transition-transform duration-100 hover:bg-tint active:scale-[0.98]"
          >
            {{ t("nav.requestDemo") }}
          </button>
        </div>
        <div
          class="pointer-events-none absolute -top-10 -right-10 h-[260px] w-[260px] rounded-full border border-white/[0.08]"
        ></div>
        <div
          class="pointer-events-none absolute -right-2.5 -bottom-[60px] h-[200px] w-[200px] rounded-full border border-white/[0.06]"
        ></div>
      </div>

      <!-- Panel 2: live collections -->
      <div
        v-reveal="90"
        class="flex flex-col gap-4 overflow-hidden rounded-[20px] bg-surface px-7 py-8 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
      >
        <div>
          <div class="mb-1.5 text-[15.5px] font-bold text-ink">
            {{ t("home.platform.collections.title") }}
          </div>
          <div class="text-[13px] leading-[1.55] text-muted">
            {{ t("home.platform.collections.description") }}
          </div>
        </div>
        <div class="flex-1 overflow-hidden rounded-[10px] bg-white">
          <div
            v-for="(row, i) in collectionsRows"
            :key="row.name"
            class="flex items-center justify-between px-3.5 py-2.5"
            :class="
              i < collectionsRows.length - 1
                ? 'border-b border-border-soft'
                : ''
            "
          >
            <span class="text-[11.5px] font-semibold text-ink">{{
              row.name
            }}</span>
            <div class="flex items-center gap-2">
              <span class="text-[11.5px] font-bold text-ink">{{
                row.amount
              }}</span>
              <span
                class="rounded-full px-2 py-0.5 text-[9.5px] font-semibold"
                :class="
                  row.statusKey === 'paid'
                    ? 'bg-success-bg text-success'
                    : 'bg-warning-bg text-warning'
                "
              >
                {{ t(`common.status.${row.statusKey}`) }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Panel 3: fee & roster -->
      <div
        v-reveal="180"
        class="flex flex-col gap-4 overflow-hidden rounded-[20px] bg-tint px-7 py-8 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
      >
        <div>
          <div class="mb-1.5 text-[15.5px] font-bold text-ink">
            {{ t("home.platform.roster.title") }}
          </div>
          <div class="text-[13px] leading-[1.55] text-muted">
            {{ t("home.platform.roster.description") }}
          </div>
        </div>
        <div class="flex flex-col gap-2.5 rounded-[10px] bg-white px-4 py-3.5">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-xs font-semibold text-ink">
                {{ t("home.platform.roster.studentName") }}
              </div>
              <div class="text-[10.5px] text-muted">
                {{ t("home.platform.roster.studentClass") }}
              </div>
            </div>
            <span class="text-[10px] font-semibold text-muted">{{
              t("home.platform.roster.installments")
            }}</span>
          </div>
          <div class="h-[5px] overflow-hidden rounded-full bg-tint">
            <div class="h-full w-[66%] rounded-full bg-brand"></div>
          </div>
        </div>
      </div>

      <!-- Panel 4: instant receipts -->
      <div
        v-reveal="270"
        class="flex flex-col items-start gap-6 overflow-hidden rounded-[20px] bg-ink px-9 py-8 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center sm:gap-10 md:col-span-2 lg:col-span-2 lg:col-start-2"
      >
        <div class="flex-1">
          <div class="mb-2 text-[15.5px] font-bold text-white">
            {{ t("home.platform.receipts.title") }}
          </div>
          <div class="text-[13px] leading-[1.55] text-white/[0.52]">
            {{ t("home.platform.receipts.description") }}
          </div>
        </div>
        <div
          class="w-full max-w-[240px] shrink-0 rounded-xl bg-white px-5 py-4 sm:w-auto sm:min-w-[200px]"
        >
          <div class="mb-3 flex items-center gap-2">
            <div
              class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6l3 3 5-5"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span class="text-[11px] font-bold text-ink">{{
              t("home.platform.receipts.confirmed")
            }}</span>
          </div>
          <div class="mb-1 text-lg font-extrabold tracking-[-0.8px] text-ink">
            {{ t("home.platform.receipts.amount") }}
          </div>
          <div class="text-[10px] tracking-[0.5px] text-muted">
            {{ t("home.platform.receipts.reference") }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
