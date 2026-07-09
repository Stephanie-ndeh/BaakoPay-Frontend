<script setup lang="ts">
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import BaseButton from "@/components/ui/BaseButton.vue";

const { t } = useI18n();

const form = reactive({
  fullName: "",
  email: "",
  institutionName: "",
  institutionType: "",
  lookingFor: "",
  message: "",
});

const institutionTypeKeys = [
  "businesses",
  "schools",
  "hospitals",
  "ngos",
  "merchants",
  "other",
];
const lookingForKeys = [
  "requestDemo",
  "learnMore",
  "partnership",
  "support",
  "other",
];

function handleSubmit() {
  // No backend endpoint yet — form is presentational until an API is wired up.
}

const fieldClass =
  "w-full rounded-lg border-[1.5px] border-transparent bg-tint px-4 py-3 text-sm text-ink transition-colors focus:border-brand focus:outline-none";
const labelClass = "mb-[7px] block text-[13px] font-semibold text-ink";
</script>

<template>
  <form class="flex flex-col gap-5" @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-5 sm:flex-row">
      <div class="flex-1">
        <label :class="labelClass">{{ t("contact.form.fullName") }}</label>
        <input
          v-model="form.fullName"
          type="text"
          :placeholder="t('contact.form.fullNamePlaceholder')"
          :class="fieldClass"
        />
      </div>
      <div class="flex-1">
        <label :class="labelClass">{{ t("contact.form.email") }}</label>
        <input
          v-model="form.email"
          type="email"
          :placeholder="t('contact.form.emailPlaceholder')"
          :class="fieldClass"
        />
      </div>
    </div>

    <div>
      <label :class="labelClass">{{ t("contact.form.institutionName") }}</label>
      <input
        v-model="form.institutionName"
        type="text"
        :placeholder="t('contact.form.institutionNamePlaceholder')"
        :class="fieldClass"
      />
    </div>

    <div>
      <label :class="labelClass">{{ t("contact.form.institutionType") }}</label>
      <select
        v-model="form.institutionType"
        :class="[fieldClass, 'cursor-pointer']"
      >
        <option value="">
          {{ t("contact.form.institutionTypePlaceholder") }}
        </option>
        <option v-for="key in institutionTypeKeys" :key="key" :value="key">
          {{
            key === "other" ? t("common.other") : t(`common.industries.${key}`)
          }}
        </option>
      </select>
    </div>

    <div>
      <label :class="labelClass">{{ t("contact.form.lookingFor") }}</label>
      <select v-model="form.lookingFor" :class="[fieldClass, 'cursor-pointer']">
        <option value="">{{ t("contact.form.lookingForPlaceholder") }}</option>
        <option v-for="key in lookingForKeys" :key="key" :value="key">
          {{ t(`contact.form.lookingForOptions.${key}`) }}
        </option>
      </select>
    </div>

    <div>
      <label :class="labelClass">{{ t("contact.form.message") }}</label>
      <textarea
        v-model="form.message"
        rows="5"
        :placeholder="t('contact.form.messagePlaceholder')"
        :class="[fieldClass, 'resize-y leading-[1.6]']"
      ></textarea>
    </div>

    <div>
      <BaseButton type="submit" variant="primary" size="block">{{
        t("contact.form.submit")
      }}</BaseButton>
      <p class="mt-3 text-center text-[12.5px] font-normal text-muted">
        {{ t("contact.form.note") }}
      </p>
    </div>
  </form>
</template>
