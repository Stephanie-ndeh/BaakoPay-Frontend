<script setup lang="ts">
import SectionEyebrow from "@/components/ui/SectionEyebrow.vue";

withDefaults(
  defineProps<{
    eyebrow: string;
    variant?: "dark" | "tint" | "white";
    compact?: boolean;
    descriptionMaxWidth?: string;
  }>(),
  {
    variant: "white",
    compact: false,
    descriptionMaxWidth: "560px",
  },
);

const bgClasses: Record<string, string> = {
  dark: "bg-ink",
  tint: "bg-tint",
  white: "bg-white",
};

const titleClasses: Record<string, string> = {
  dark: "text-white",
  tint: "text-ink",
  white: "text-ink",
};
</script>

<template>
  <section
    class="px-5 md:px-10 lg:px-20 text-center"
    :class="[
      bgClasses[variant],
      compact ? 'pt-[72px] pb-14' : 'pt-[88px] pb-24',
    ]"
  >
    <SectionEyebrow :label="eyebrow" :class="compact ? 'mb-[18px]' : 'mb-5'" />
    <h1
      class="mx-auto text-[30px] font-extrabold tracking-[-1.2px] md:text-[42px] md:tracking-[-1.8px] lg:text-[52px] lg:tracking-[-2.2px]"
      :class="[
        titleClasses[variant],
        compact ? 'mb-4 leading-[1.07]' : 'mb-5 leading-[1.07]',
      ]"
    >
      <slot name="title" />
    </h1>
    <p
      class="mx-auto text-[16.5px] leading-[1.68] font-normal text-muted"
      :style="{ maxWidth: descriptionMaxWidth }"
    >
      <slot />
    </p>
  </section>
</template>
