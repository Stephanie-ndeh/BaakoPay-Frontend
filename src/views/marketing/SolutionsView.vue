<script setup lang="ts">
import { useI18n } from "vue-i18n";
import PageHeader from "@/components/ui/PageHeader.vue";
import SolutionsBentoGrid from "@/components/solutions/SolutionsBentoGrid.vue";
import SolutionsClosing from "@/components/solutions/SolutionsClosing.vue";
import CtaBanner from "@/components/layout/CtaBanner.vue";

const { t } = useI18n();
</script>

<template>
  <div>
    <PageHeader
      v-reveal
      variant="dark"
      :eyebrow="t('solutions.header.eyebrow')"
      description-max-width="580px"
    >
      <template #title>{{ t("solutions.header.title") }}</template>
      {{ t("solutions.header.description") }}
    </PageHeader>
    <SolutionsBentoGrid />
    <SolutionsClosing v-reveal />
    <CtaBanner v-reveal />
  </div>
</template>
