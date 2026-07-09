<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section class="bg-white px-5 md:px-10 lg:px-20 pt-20 pb-24">
    <div
      class="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <!-- Panel 1: Payment Link -->
      <div
        v-reveal
        class="flex flex-col rounded-[20px] bg-brand px-8 py-10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg md:col-span-2 lg:px-[52px] lg:py-12"
      >
        <div
          class="mb-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.7px] border-white/[0.32]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
              stroke="white"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
              stroke="white"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h2
          class="mb-3 text-[21px] font-extrabold tracking-[-0.6px] text-white lg:text-[26px] lg:tracking-[-0.8px]"
        >
          {{ t("solutions.panels.paymentLink.title") }}
        </h2>
        <p
          class="mb-8 max-w-[380px] text-[15px] leading-[1.65] font-normal text-white/[0.72]"
        >
          {{ t("solutions.panels.paymentLink.description") }}
        </p>
        <div class="max-w-[340px] rounded-[14px] bg-white/10 px-6 py-[22px]">
          <div
            class="mb-3.5 text-[9.5px] font-bold tracking-[1.6px] text-white/[0.42] uppercase"
          >
            {{ t("solutions.panels.paymentLink.mockup.label") }}
          </div>
          <div
            class="mb-2.5 flex items-center gap-2.5 rounded-lg bg-white/[0.93] px-4 py-3"
          >
            <span class="text-xs font-bold text-brand">{{
              t("solutions.panels.paymentLink.mockup.currency")
            }}</span>
            <span
              class="text-[17px] font-extrabold tracking-[-0.5px] text-ink"
              >{{ t("solutions.panels.paymentLink.mockup.amount") }}</span
            >
            <span class="flex-1"></span>
            <span class="text-[10.5px] text-muted">{{
              t("solutions.panels.paymentLink.mockup.note")
            }}</span>
          </div>
          <div
            class="mb-4 cursor-pointer rounded-lg bg-white py-2.5 text-center text-[12.5px] font-bold text-brand"
          >
            {{ t("solutions.panels.paymentLink.mockup.shareLink") }}
          </div>
          <div class="flex items-center justify-center gap-6">
            <div class="flex items-center gap-1.5">
              <div
                class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.16]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span class="text-[10px] text-white/[0.62]">{{
                t("solutions.panels.paymentLink.mockup.whatsapp")
              }}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <div
                class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.16]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span class="text-[10px] text-white/[0.62]">{{
                t("solutions.panels.paymentLink.mockup.sms")
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Panel 2: Bill Payment -->
      <div
        v-reveal="90"
        class="flex flex-col rounded-[20px] bg-tint px-9 py-10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
      >
        <div
          class="mb-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
              stroke="#0D47FF"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 2v6h6"
              stroke="#0D47FF"
              stroke-width="1.7"
              stroke-linecap="round"
            />
            <path
              d="M16 13H8M16 17H8M10 9H8"
              stroke="#0D47FF"
              stroke-width="1.7"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <h2
          class="mb-3 text-[19px] font-extrabold tracking-[-0.4px] lg:text-[22px] lg:tracking-[-0.6px] text-ink"
        >
          {{ t("solutions.panels.billPayment.title") }}
        </h2>
        <p class="text-sm leading-[1.65] font-normal text-muted">
          {{ t("solutions.panels.billPayment.description") }}
        </p>
      </div>

      <!-- Panel 3: Bulk Payment -->
      <div
        v-reveal="180"
        class="flex flex-col rounded-[20px] bg-ink px-8 py-9 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
      >
        <div
          class="mb-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.7px] border-white/[0.22]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
              stroke="white"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="9" cy="7" r="4" stroke="white" stroke-width="1.7" />
            <path
              d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
              stroke="white"
              stroke-width="1.7"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <h2
          class="mb-3 text-[19px] font-extrabold tracking-[-0.4px] lg:text-[22px] lg:tracking-[-0.6px] text-white"
        >
          {{ t("solutions.panels.bulkPayment.title") }}
        </h2>
        <p class="text-sm leading-[1.65] font-normal text-white/[0.52]">
          {{ t("solutions.panels.bulkPayment.description") }}
        </p>
      </div>

      <!-- Panel 4: QR Codes -->
      <div
        v-reveal="270"
        class="flex flex-col rounded-[20px] bg-surface px-8 py-9 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
      >
        <div
          class="mb-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tint"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="3"
              width="7"
              height="7"
              rx="1"
              stroke="#0D47FF"
              stroke-width="1.7"
            />
            <rect
              x="14"
              y="3"
              width="7"
              height="7"
              rx="1"
              stroke="#0D47FF"
              stroke-width="1.7"
            />
            <rect
              x="3"
              y="14"
              width="7"
              height="7"
              rx="1"
              stroke="#0D47FF"
              stroke-width="1.7"
            />
            <path
              d="M14 14h2v2h-2zM18 14h3M14 18h2M18 18h3M14 21h3M20 18v3"
              stroke="#0D47FF"
              stroke-width="1.7"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <h2
          class="mb-3 text-[19px] font-extrabold tracking-[-0.4px] lg:text-[22px] lg:tracking-[-0.6px] text-ink"
        >
          {{ t("solutions.panels.qrCodes.title") }}
        </h2>
        <p class="text-sm leading-[1.65] font-normal text-muted">
          {{ t("solutions.panels.qrCodes.description") }}
        </p>
      </div>

      <!-- Panel 5: Tax Payment -->
      <div
        v-reveal="360"
        class="flex flex-col rounded-[20px] bg-tint px-8 py-9 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
      >
        <div
          class="mb-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
              stroke="#0D47FF"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 2v6h6"
              stroke="#0D47FF"
              stroke-width="1.7"
              stroke-linecap="round"
            />
            <path
              d="M9 14l2 2 4-4"
              stroke="#0D47FF"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h2
          class="mb-3 text-[19px] font-extrabold tracking-[-0.4px] lg:text-[22px] lg:tracking-[-0.6px] text-ink"
        >
          {{ t("solutions.panels.taxPayment.title") }}
        </h2>
        <p class="text-sm leading-[1.65] font-normal text-muted">
          {{ t("solutions.panels.taxPayment.description") }}
        </p>
      </div>

      <!-- Panel 6: Corporate Payments -->
      <div
        v-reveal="450"
        class="rounded-[20px] bg-ink px-8 py-10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg md:col-span-2 lg:col-span-3 lg:px-[52px] lg:py-12"
      >
        <div class="flex flex-col items-start gap-10 lg:flex-row lg:gap-16">
          <div class="lg:basis-[420px]">
            <div
              class="mb-6 flex h-11 w-11 items-center justify-center rounded-full border-[1.7px] border-white/[0.22]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  stroke="white"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 22V12h6v10"
                  stroke="white"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h2
              class="mb-3 text-[21px] font-extrabold tracking-[-0.6px] text-white lg:text-[26px] lg:tracking-[-0.8px]"
            >
              {{ t("solutions.panels.corporatePayments.title") }}
            </h2>
            <p class="text-[15px] leading-[1.65] font-normal text-white/[0.58]">
              {{ t("solutions.panels.corporatePayments.description") }}
            </p>
          </div>
          <!-- Approval workflow chain -->
          <div
            class="w-full flex-1 self-center overflow-x-auto lg:flex lg:items-center"
          >
            <div class="flex w-max min-w-full items-center lg:w-full">
              <div
                class="shrink-0 rounded-full bg-white/10 px-[22px] py-[11px] text-[12.5px] font-semibold whitespace-nowrap text-white/80"
              >
                {{ t("solutions.panels.corporatePayments.workflow.request") }}
              </div>
              <div
                class="h-px w-8 shrink-0 bg-white/[0.14] lg:w-auto lg:flex-1"
              ></div>
              <div
                class="shrink-0 rounded-full bg-white/10 px-[22px] py-[11px] text-[12.5px] font-semibold whitespace-nowrap text-white/80"
              >
                {{ t("solutions.panels.corporatePayments.workflow.review") }}
              </div>
              <div
                class="h-px w-8 shrink-0 bg-white/[0.14] lg:w-auto lg:flex-1"
              ></div>
              <div
                class="shrink-0 rounded-full bg-white/10 px-[22px] py-[11px] text-[12.5px] font-semibold whitespace-nowrap text-white/80"
              >
                {{ t("solutions.panels.corporatePayments.workflow.approve") }}
              </div>
              <div
                class="h-px w-8 shrink-0 bg-white/[0.14] lg:w-auto lg:flex-1"
              ></div>
              <div
                class="flex shrink-0 items-center gap-1.5 rounded-full border border-white/[0.18] bg-brand px-[22px] py-[11px] text-[12.5px] font-bold whitespace-nowrap text-white"
              >
                {{ t("solutions.panels.corporatePayments.workflow.settled") }}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6l3 3 5-5"
                    stroke="white"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
