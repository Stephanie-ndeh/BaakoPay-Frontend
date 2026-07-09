<script setup lang="ts">
import { useI18n } from "vue-i18n";
import PageHeader from "@/components/ui/PageHeader.vue";
import ContactInfoPanel from "@/components/contact/ContactInfoPanel.vue";
import ContactForm from "@/components/contact/ContactForm.vue";

const { t } = useI18n();
</script>

<template>
  <div>
    <PageHeader
      v-reveal
      variant="white"
      compact
      :eyebrow="t('contact.header.eyebrow')"
      description-max-width="400px"
    >
      <template #title>{{ t("contact.header.title") }}</template>
      {{ t("contact.header.description") }}
    </PageHeader>

    <section class="bg-white px-5 pb-[104px] md:px-10 lg:px-20">
      <div
        class="mx-auto flex max-w-[1100px] flex-col items-start gap-8 lg:flex-row lg:gap-12"
      >
        <ContactInfoPanel v-reveal />
        <div v-reveal="120" class="w-full flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  </div>
</template>
