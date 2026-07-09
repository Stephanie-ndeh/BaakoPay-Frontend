<script setup lang="ts">
import { useI18n } from "vue-i18n";
import PageHeader from "@/components/ui/PageHeader.vue";
import StepTimeline from "@/components/how-it-works/StepTimeline.vue";
import UnderTheHood from "@/components/how-it-works/UnderTheHood.vue";
import CtaBanner from "@/components/layout/CtaBanner.vue";

const { t } = useI18n();
</script>

<template>
  <div>
    <PageHeader
      v-reveal
      variant="tint"
      :eyebrow="t('howItWorks.header.eyebrow')"
      description-max-width="560px"
    >
      <template #title>
        {{ t("howItWorks.header.titleLine1") }}<br />
        {{ t("howItWorks.header.titleLine2") }}
      </template>
      {{ t("howItWorks.header.description") }}
    </PageHeader>
    <StepTimeline />
    <UnderTheHood v-reveal />
    <CtaBanner v-reveal />
  </div>
</template>
