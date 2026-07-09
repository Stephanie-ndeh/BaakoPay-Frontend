<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { ICONS } from "@/assets/icons";

const { t, tm } = useI18n();

interface StepCopy {
  title: string;
  description: string;
}

type StepKind = "setup" | "notify" | "pay" | "receipt";

const STEP_KINDS: StepKind[] = ["setup", "notify", "pay", "receipt"];

const steps = computed(() => {
  const copy = tm("howItWorks.steps") as StepCopy[];
  return copy.map((step, i) => ({ ...step, kind: STEP_KINDS[i] }));
});

const rosterRows = [
  { name: "Grace Biya", cls: "6A", fee: "XAF 45,000" },
  { name: "Marc Etoga", cls: "4B", fee: "XAF 38,500" },
  { name: "Laure Abanda", cls: "5C", fee: "XAF 45,000" },
];
</script>

<template>
  <section class="bg-white pt-16 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32">
    <div class="mx-auto max-w-[880px] px-5 md:px-10 lg:px-0">
      <div class="relative">
        <div
          class="absolute top-6 bottom-6 left-6 w-px bg-border md:left-7"
          aria-hidden="true"
        ></div>

        <div
          v-for="(step, i) in steps"
          :key="step.title"
          v-reveal="i * 120"
          class="relative flex gap-5 md:gap-8"
          :class="i < steps.length - 1 ? 'pb-12 md:pb-16' : ''"
        >
          <div
            class="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-[15px] font-extrabold text-white md:h-14 md:w-14 md:text-[17px]"
          >
            {{ String(i + 1).padStart(2, "0") }}
          </div>

          <div
            class="min-w-0 flex-1 rounded-[20px] border border-border bg-surface-alt p-6 md:p-8"
          >
            <div
              class="mb-1.5 text-[10.5px] font-bold tracking-[1.6px] text-brand uppercase"
            >
              {{ t("howItWorks.stepLabel") }}
              {{ String(i + 1).padStart(2, "0") }}
            </div>
            <h3
              class="mb-2.5 text-[19px] leading-[1.2] font-extrabold tracking-[-0.5px] text-ink md:text-[22px]"
            >
              {{ step.title }}
            </h3>
            <p
              class="mb-6 max-w-[480px] text-[14.5px] leading-[1.65] font-normal text-muted md:text-[15px]"
            >
              {{ step.description }}
            </p>

            <!-- Mockup: institution roster table -->
            <div
              v-if="step.kind === 'setup'"
              class="max-w-[360px] overflow-hidden rounded-xl border border-border bg-white"
            >
              <div
                class="flex items-center justify-between border-b border-border-soft bg-surface px-4 py-2.5"
              >
                <span
                  class="text-[9.5px] font-semibold tracking-[0.8px] text-muted uppercase"
                  >{{ t("howItWorks.deck.setup.tableName") }}</span
                >
                <div class="flex items-center gap-6">
                  <span
                    class="text-[9.5px] font-semibold tracking-[0.8px] text-muted uppercase"
                    >{{ t("howItWorks.deck.setup.tableClass") }}</span
                  >
                  <span
                    class="text-[9.5px] font-semibold tracking-[0.8px] text-muted uppercase"
                    >{{ t("howItWorks.deck.setup.tableFee") }}</span
                  >
                </div>
              </div>
              <div
                v-for="row in rosterRows"
                :key="row.name"
                class="flex items-center justify-between border-b border-border-soft px-4 py-2.5 text-[12px] last:border-b-0"
              >
                <span class="font-medium text-ink">{{ row.name }}</span>
                <div class="flex items-center gap-6">
                  <span class="text-muted">{{ row.cls }}</span>
                  <span class="font-semibold text-ink">{{ row.fee }}</span>
                </div>
              </div>
            </div>

            <!-- Mockup: push notification + SMS -->
            <div
              v-else-if="step.kind === 'notify'"
              class="flex max-w-[360px] flex-col gap-2.5"
            >
              <div
                class="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3"
              >
                <span
                  class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tint text-brand"
                  v-html="ICONS.bell"
                ></span>
                <div>
                  <div class="text-[12px] font-semibold text-ink">
                    {{ t("howItWorks.deck.notify.pushTitle") }}
                  </div>
                  <div class="text-[11px] text-muted">
                    {{ t("howItWorks.deck.notify.pushSubtitle") }}
                  </div>
                </div>
              </div>
              <div
                class="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3"
              >
                <span
                  class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-muted"
                  v-html="ICONS.bubble"
                ></span>
                <div class="text-[11.5px] leading-[1.5] text-muted">
                  {{ t("howItWorks.deck.notify.smsPreview") }}
                </div>
              </div>
            </div>

            <!-- Mockup: mobile money payment methods -->
            <div
              v-else-if="step.kind === 'pay'"
              class="flex max-w-[360px] flex-col gap-2.5"
            >
              <div
                class="flex items-center justify-between rounded-xl border-2 border-brand bg-tint px-4 py-3"
              >
                <div class="flex items-center gap-2.5">
                  <span
                    class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#fef9c3] text-[9px] font-extrabold text-[#854d0e]"
                    >MTN</span
                  >
                  <span class="text-[12.5px] font-semibold text-ink">{{
                    t("howItWorks.deck.pay.mtn")
                  }}</span>
                </div>
                <span
                  class="h-4 w-4 shrink-0 rounded-full border-2 border-brand bg-brand"
                ></span>
              </div>
              <div
                class="flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3"
              >
                <div class="flex items-center gap-2.5">
                  <span
                    class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-orange/10 text-[9px] font-extrabold text-orange"
                    >OM</span
                  >
                  <span class="text-[12.5px] font-medium text-muted">{{
                    t("howItWorks.deck.pay.orange")
                  }}</span>
                </div>
                <span
                  class="h-4 w-4 shrink-0 rounded-full border-2 border-border"
                ></span>
              </div>
            </div>

            <!-- Mockup: receipt -->
            <div
              v-else
              class="max-w-[360px] rounded-xl border border-border bg-white p-5 text-center"
            >
              <div
                class="mx-auto mb-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-success text-white"
                v-html="ICONS.receiptCheck"
              ></div>
              <div
                class="text-[20px] font-extrabold tracking-[-0.5px] text-ink"
              >
                XAF 45,000
              </div>
              <div class="mt-0.5 text-[11px] text-muted">
                {{ t("howItWorks.deck.receipt.confirmed") }}
              </div>
              <div
                class="mt-4 flex items-center justify-between border-t border-border-soft pt-3 text-[11px]"
              >
                <span class="text-muted">{{
                  t("howItWorks.deck.receipt.reference")
                }}</span>
                <span class="font-medium text-ink">PMT-2026-0847</span>
              </div>
            </div>

            <div
              class="mt-5 inline-flex items-center gap-2 rounded-full bg-success-bg px-3.5 py-1.5 text-[11.5px] font-semibold text-success"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6l3 3 5-5"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ t(`howItWorks.deck.${step.kind}.tag`) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
