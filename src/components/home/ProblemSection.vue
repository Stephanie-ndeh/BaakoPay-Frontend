<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SectionEyebrow from "@/components/ui/SectionEyebrow.vue";

interface ProblemItem {
  number: string;
  title: string;
  description: string;
}

const { t, tm } = useI18n();
const items = tm("home.problem.items") as ProblemItem[];
</script>

<template>
  <section class="bg-ink px-5 pt-24 pb-[108px] md:px-10 lg:px-20">
    <div
      class="mx-auto flex max-w-[1200px] flex-col items-stretch gap-14 lg:flex-row lg:gap-20"
    >
      <!-- Left -->
      <div class="lg:basis-[54%]">
        <SectionEyebrow :label="t('home.problem.eyebrow')" class="mb-7" />
        <h2
          class="mb-[52px] text-[28px] leading-[1.15] font-extrabold tracking-[-1px] text-white md:text-[38px] md:tracking-[-1.5px] lg:text-5xl lg:leading-[1.06] lg:tracking-[-2px]"
        >
          {{ t("home.problem.titleLine1") }}<br />
          {{ t("home.problem.titleLine2") }}
        </h2>

        <div class="border-t border-white/10">
          <div
            v-for="(item, i) in items"
            :key="item.number"
            v-reveal="i * 90"
            class="flex items-start gap-6 border-b border-white/10 py-7"
          >
            <span
              class="w-10 shrink-0 text-[28px] leading-none font-extrabold tracking-[-1.3px] text-[#A85858] md:w-[52px] md:text-[38px] md:tracking-[-2px]"
              >{{ item.number }}</span
            >
            <div>
              <div class="mb-2 text-[15.5px] font-bold text-white">
                {{ item.title }}
              </div>
              <div class="text-sm leading-[1.68] text-muted">
                {{ item.description }}
              </div>
            </div>
          </div>
        </div>

        <p
          class="my-9 text-[17px] leading-[1.72] font-normal text-white/[0.78] italic"
        >
          {{ t("home.problem.quote") }}
        </p>
        <div
          class="rounded-xl border border-gold/[0.36] bg-gold/[0.05] px-6 py-5"
        >
          <p class="text-[14.5px] leading-[1.68] text-white/[0.82]">
            {{ t("home.problem.statPrefix")
            }}<strong class="font-extrabold text-gold">{{
              t("home.problem.statValue")
            }}</strong
            >{{ t("home.problem.statSuffix") }}
          </p>
        </div>
      </div>

      <!-- Right: ledger illustration -->
      <div
        class="relative min-h-[280px] flex-1 md:min-h-[360px] lg:min-h-[480px]"
      >
        <div class="absolute inset-0 overflow-hidden rounded-2xl">
          <img
            src="/img/Administrator_at_desk_with_ledgers.webp"
            :alt="t('home.problem.imageAlt')"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/40"
          ></div>
          <div
            class="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/[0.13] bg-ink/[0.76] px-[18px] py-2 whitespace-nowrap"
          >
            <span
              class="text-[10px] font-bold tracking-[2.5px] text-white uppercase"
              >{{ t("home.problem.ledgerLabel") }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
