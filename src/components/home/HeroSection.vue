<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import BaseButton from "@/components/ui/BaseButton.vue";
import SectionEyebrow from "@/components/ui/SectionEyebrow.vue";
import { useParticleCanvas } from "@/composables/useParticleCanvas";

const { t } = useI18n();
const canvasRef = ref<HTMLCanvasElement | null>(null);
useParticleCanvas(canvasRef, "hero");
</script>

<template>
  <section
    class="relative overflow-hidden bg-white px-5 pt-24 pb-16 md:px-10 md:pb-0 lg:min-h-[680px] lg:px-20"
  >
    <canvas
      ref="canvasRef"
      class="pointer-events-none absolute inset-0 z-0 h-full w-full"
    ></canvas>

    <div
      class="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16"
    >
      <!-- Left -->
      <div class="lg:basis-[52%]">
        <SectionEyebrow
          v-reveal="{ direction: 'left' }"
          :label="t('home.hero.eyebrow')"
          class="mb-7"
        />
        <h1
          v-reveal="{ direction: 'down', delay: 90 }"
          class="mb-6 text-[32px] leading-[1.1] font-extrabold tracking-[-1.3px] text-ink md:text-[42px] md:tracking-[-1.8px] lg:text-[54px] lg:leading-[1.06] lg:tracking-[-2.5px]"
        >
          {{ t("home.hero.titleLine1") }}<br />
          {{ t("home.hero.titleLine2") }}<br />
          <span
            class="mt-1.5 inline-flex rounded-full bg-brand px-6 py-1 tracking-[-1.5px] text-white"
            >{{ t("home.hero.titleHighlight") }}</span
          >
        </h1>
        <p
          v-reveal="{ direction: 'up', delay: 180 }"
          class="mb-10 max-w-[460px] text-[16.5px] leading-[1.68] font-normal text-muted"
        >
          {{ t("home.hero.description") }}
        </p>
        <div
          v-reveal="{ direction: 'right', delay: 270 }"
          class="flex flex-wrap items-center gap-5"
        >
          <BaseButton variant="primary" size="md">{{
            t("nav.requestDemo")
          }}</BaseButton>
          <RouterLink
            :to="{ name: 'how-it-works' }"
            class="flex items-center gap-1.5 text-[15px] font-semibold text-ink hover:text-brand"
          >
            {{ t("home.hero.seeHowItWorks") }}
          </RouterLink>
        </div>
      </div>

      <!-- Right: phone mockup (hidden on mobile) -->
      <div
        v-reveal="{ direction: 'right', delay: 120, duration: 1000 }"
        class="relative hidden min-h-[420px] flex-1 items-end justify-center md:flex md:scale-90 lg:min-h-[540px] lg:scale-100"
      >
        <!-- Floating card top-left -->
        <div
          class="absolute top-10 -left-5 z-3 min-w-[180px] rounded-[14px] border border-border bg-white px-[18px] py-3 shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
        >
          <div
            class="mb-1.5 text-[9.5px] font-semibold tracking-[1.2px] text-muted uppercase"
          >
            {{ t("home.hero.mockup.thisTerm") }}
          </div>
          <div
            class="text-lg leading-[1.1] font-extrabold tracking-[-0.8px] text-ink"
          >
            {{ t("home.hero.mockup.onTimeRate") }}
          </div>
          <div class="mt-0.5 text-[11.5px] text-muted">
            {{ t("home.hero.mockup.onTimeLabel") }}
          </div>
        </div>

        <!-- Floating card bottom-right -->
        <div
          class="absolute -right-2.5 bottom-[70px] z-3 min-w-[210px] rounded-[14px] border border-border bg-white px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
        >
          <div class="mb-1 flex items-center gap-2">
            <div
              class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#FEF9C3]"
            >
              <span class="text-[8px] font-extrabold text-[#854D0E]">MTN</span>
            </div>
            <span class="text-xs font-semibold text-ink">{{
              t("home.hero.mockup.mtnMomo")
            }}</span>
          </div>
          <div class="text-[13px] font-bold text-success">
            {{ t("home.hero.mockup.settledAmount") }}
          </div>
          <div class="mt-px text-[10.5px] text-muted">
            {{ t("home.hero.mockup.settledLabel") }}
          </div>
        </div>

        <!-- Phone bezel -->
        <div
          class="relative z-2 h-[548px] w-[268px] shrink-0 rounded-[44px] border-[1.5px] border-white/[0.12] bg-[#1C1C2E]"
          style="transform: perspective(1200px) rotateY(-6deg) rotateX(3deg)"
        >
          <div
            class="absolute top-3.5 left-1/2 z-4 h-7 w-[88px] -translate-x-1/2 rounded-[20px] bg-ink"
          ></div>
          <div
            class="absolute top-2.5 right-[7px] bottom-2.5 left-[7px] overflow-hidden rounded-[37px] bg-[#f5f5f7]"
          >
            <div class="bg-brand px-5 pt-[52px] pb-5 text-center">
              <div
                class="mb-3 text-[11px] font-semibold tracking-[1px] text-white/[0.65] uppercase"
              >
                {{ t("home.hero.mockup.paymentConfirmed") }}
              </div>
              <div
                class="mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-success"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div
                class="text-[26px] leading-[1.1] font-extrabold tracking-[-1px] text-white"
              >
                {{ t("home.hero.mockup.amount") }}
              </div>
            </div>
            <div class="flex flex-col gap-3 bg-white px-4 py-[18px]">
              <div
                class="flex items-center justify-between border-b border-border-soft py-2.5"
              >
                <span class="text-[11px] font-medium text-muted">{{
                  t("home.hero.mockup.payer")
                }}</span>
                <span class="text-[11.5px] font-semibold text-ink">{{
                  t("home.hero.mockup.payerValue")
                }}</span>
              </div>
              <div
                class="flex items-center justify-between border-b border-border-soft py-2.5"
              >
                <span class="text-[11px] font-medium text-muted">{{
                  t("home.hero.mockup.method")
                }}</span>
                <span class="text-[11.5px] font-semibold text-ink">{{
                  t("home.hero.mockup.methodValue")
                }}</span>
              </div>
              <div
                class="flex items-center justify-between border-b border-border-soft py-2.5"
              >
                <span class="text-[11px] font-medium text-muted">{{
                  t("home.hero.mockup.reference")
                }}</span>
                <span
                  class="text-[11px] font-semibold tracking-[0.3px] text-ink"
                  >{{ t("home.hero.mockup.referenceValue") }}</span
                >
              </div>
              <button
                class="mt-1 w-full rounded-[10px] bg-brand py-[11px] text-[12.5px] font-bold text-white"
              >
                {{ t("home.hero.mockup.viewReceipt") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
