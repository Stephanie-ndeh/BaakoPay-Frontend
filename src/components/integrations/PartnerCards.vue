<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface Partner {
  key: string;
  dotColor: string;
  outlineDot?: boolean;
  dashed?: boolean;
  mutedTitle?: boolean;
  active: boolean;
}

const partners: Partner[] = [
  { key: "mtnMomo", dotColor: "bg-gold", active: true },
  { key: "orangeMoney", dotColor: "bg-orange", active: true },
  { key: "gimac", dotColor: "bg-brand", active: true },
  {
    key: "moreNetworks",
    dotColor: "",
    outlineDot: true,
    dashed: true,
    mutedTitle: true,
    active: false,
  },
];
</script>

<template>
  <div class="mx-auto mb-[72px] flex max-w-[1100px] flex-col gap-5 md:flex-row">
    <div
      v-for="(partner, i) in partners"
      :key="partner.key"
      v-reveal="i * 90"
      class="flex flex-1 flex-col gap-4 rounded-xl px-7 py-8 pb-7 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
      :class="
        partner.dashed
          ? 'border-[1.5px] border-dashed border-muted/32 bg-white'
          : 'bg-tint'
      "
    >
      <span
        class="block h-3 w-3 shrink-0 rounded-full"
        :class="
          partner.outlineDot ? 'border-2 border-muted/40' : partner.dotColor
        "
      ></span>
      <div>
        <div
          class="mb-2.5 text-[17px] font-extrabold tracking-[-0.4px]"
          :class="partner.mutedTitle ? 'text-muted' : 'text-ink'"
        >
          {{ t(`integrations.partners.${partner.key}.title`) }}
        </div>
        <p class="text-[13.5px] leading-[1.65] font-normal text-muted">
          {{ t(`integrations.partners.${partner.key}.description`) }}
        </p>
      </div>
      <div class="mt-auto pt-2">
        <span
          class="inline-flex items-center gap-1.5 rounded-full border px-3 py-[5px]"
          :class="
            partner.active
              ? 'border-tint-strong bg-tint'
              : 'border-border bg-surface'
          "
        >
          <span
            class="block h-1.5 w-1.5 shrink-0 rounded-full"
            :class="
              partner.active
                ? 'bg-brand'
                : 'border-[1.5px] border-muted bg-transparent'
            "
          ></span>
          <span
            class="text-[11px] font-semibold"
            :class="partner.active ? 'text-brand' : 'text-muted'"
          >
            {{
              partner.active
                ? t("integrations.active")
                : t("integrations.comingSoon")
            }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>
