<script setup lang="ts">
import { useI18n } from "vue-i18n";
import PageHeader from "@/components/ui/PageHeader.vue";
import IndustryTabs from "@/components/who-we-serve/IndustryTabs.vue";
import SamePlatformStrip from "@/components/who-we-serve/SamePlatformStrip.vue";
import CtaBanner from "@/components/layout/CtaBanner.vue";

const { t } = useI18n();
</script>

<template>
  <div>
    <PageHeader
      v-reveal
      variant="tint"
      :eyebrow="t('whoWeServe.header.eyebrow')"
      description-max-width="560px"
    >
      <template #title>
        {{ t("whoWeServe.header.titleLine1") }}<br />
        {{ t("whoWeServe.header.titleLine2") }}
      </template>
      {{ t("whoWeServe.header.description") }}
    </PageHeader>
    <IndustryTabs v-reveal />
    <SamePlatformStrip v-reveal />
    <CtaBanner v-reveal />
  </div>
</template>
