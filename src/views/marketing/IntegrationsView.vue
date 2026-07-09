<script setup lang="ts">
import { useI18n } from "vue-i18n";
import PageHeader from "@/components/ui/PageHeader.vue";
import PartnerCards from "@/components/integrations/PartnerCards.vue";
import IntegrationsStats from "@/components/integrations/IntegrationsStats.vue";
import CtaBanner from "@/components/layout/CtaBanner.vue";

const { t } = useI18n();
</script>

<template>
  <div>
    <PageHeader
      v-reveal
      variant="dark"
      :eyebrow="t('integrations.header.eyebrow')"
      description-max-width="540px"
    >
      <template #title>
        {{ t("integrations.header.titleLine1") }}<br />
        {{ t("integrations.header.titleLine2") }}
      </template>
      {{ t("integrations.header.description") }}
    </PageHeader>

    <section class="bg-white px-5 md:px-10 lg:px-20 pt-20 pb-24">
      <PartnerCards />
      <IntegrationsStats v-reveal />
    </section>

    <section
      v-reveal
      class="border-t border-border bg-white px-5 md:px-10 lg:px-20 pb-[104px] text-center"
    >
      <div class="mx-auto max-w-[680px] pt-20">
        <h2
          class="mb-[18px] text-[24px] leading-[1.2] font-extrabold tracking-[-0.7px] text-ink md:text-[29px] md:tracking-[-0.9px] lg:text-[34px] lg:leading-[1.15] lg:tracking-[-1.1px]"
        >
          {{ t("integrations.closing.title") }}
        </h2>
        <p class="text-[15.5px] leading-[1.72] font-normal text-muted">
          {{ t("integrations.closing.description") }}
        </p>
      </div>
    </section>

    <CtaBanner v-reveal />
  </div>
</template>
