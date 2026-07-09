<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, type RouteLocationRaw } from "vue-router";

const props = withDefaults(
  defineProps<{
    variant?: "primary" | "outline" | "white";
    size?: "sm" | "md" | "lg" | "block";
    to?: RouteLocationRaw;
    type?: "button" | "submit";
  }>(),
  {
    variant: "primary",
    size: "md",
    type: "button",
  },
);

const tag = computed(() => (props.to ? RouterLink : "button"));

const sizeClasses: Record<string, string> = {
  sm: "px-[22px] py-[10px] text-sm",
  md: "px-7 py-[13px] text-[15px]",
  lg: "px-[34px] py-[15px] text-[15px]",
  block: "w-full py-[15px] text-[15px]",
};

const variantClasses: Record<string, string> = {
  primary: "bg-brand font-bold text-white hover:bg-brand-dark",
  outline:
    "border-[1.5px] border-white/50 bg-transparent font-semibold text-white hover:border-white/90 hover:bg-white/[0.07]",
  white: "bg-white font-bold text-brand hover:bg-tint",
};
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :type="!to ? type : undefined"
    class="inline-flex items-center justify-center gap-1.5 rounded-[10px] transition-transform duration-100 active:scale-[0.98]"
    :class="[sizeClasses[size], variantClasses[variant]]"
  >
    <slot />
  </component>
</template>
