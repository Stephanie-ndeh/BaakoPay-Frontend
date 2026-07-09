<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import BaseButton from "@/components/ui/BaseButton.vue";
import { useParticleCanvas } from "@/composables/useParticleCanvas";

const { t } = useI18n();
const canvasRef = ref<HTMLCanvasElement | null>(null);
useParticleCanvas(canvasRef, "cta");
</script>

<template>
  <section
    class="relative overflow-hidden bg-brand px-5 md:px-10 lg:px-20 pt-[108px] pb-[116px] text-center"
  >
    <canvas
      ref="canvasRef"
      class="pointer-events-none absolute inset-0 h-full w-full"
    ></canvas>
    <div
      class="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2"
      style="
        background: radial-gradient(
          ellipse at center,
          rgba(120, 160, 255, 0.16) 0%,
          transparent 68%
        );
      "
    ></div>
    <div class="relative z-10">
      <div
        class="mb-[26px] text-[10.5px] font-bold tracking-[2.5px] text-white/[0.58] uppercase"
      >
        {{ t("cta.eyebrow") }}
      </div>
      <h2
        class="mx-auto mb-5 max-w-[660px] text-[28px] leading-[1.1] font-extrabold tracking-[-1.2px] text-white md:text-[38px] md:tracking-[-1.6px] lg:text-[50px] lg:leading-[1.07] lg:tracking-[-2.2px]"
      >
        {{ t("cta.title") }}
      </h2>
      <p
        class="mx-auto mb-12 max-w-[400px] text-base leading-[1.65] text-white/[0.68]"
      >
        {{ t("cta.description") }}
      </p>
      <div
        class="mx-auto flex max-w-[360px] flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row"
      >
        <BaseButton
          variant="white"
          size="lg"
          class="w-full whitespace-nowrap sm:w-auto"
          >{{ t("cta.requestDemo") }}</BaseButton
        >
        <BaseButton
          variant="outline"
          size="lg"
          :to="{ name: 'contact' }"
          class="w-full whitespace-nowrap sm:w-auto"
          >{{ t("cta.contactUs") }}</BaseButton
        >
      </div>
      <div class="mt-[52px] flex justify-center">
        <span class="block h-1.5 w-1.5 rounded-full bg-gold"></span>
      </div>
    </div>
  </section>
</template>
