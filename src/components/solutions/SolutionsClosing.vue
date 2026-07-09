<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section class="bg-white px-5 md:px-10 lg:px-20 pt-20 pb-24 text-center">
    <h2
      class="mx-auto mb-5 text-[24px] leading-[1.2] font-extrabold tracking-[-0.7px] text-ink md:text-[30px] md:tracking-[-1px] lg:text-4xl lg:leading-[1.15] lg:tracking-[-1.2px]"
    >
      {{ t("solutions.closing.title") }}
    </h2>
    <p
      class="mx-auto max-w-[560px] text-base leading-[1.68] font-normal text-muted"
    >
      {{ t("solutions.closing.description") }}
    </p>
  </section>
</template>
