<script setup lang="ts">
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import BaseButton from "@/components/ui/BaseButton.vue";

const { t, locale } = useI18n();
const route = useRoute();

const mobileMenuOpen = ref(false);

function setLocale(lang: "fr" | "en") {
  locale.value = lang;
  localStorage.setItem("baakopay-locale", lang);
}

watch(
  () => route.name,
  () => {
    mobileMenuOpen.value = false;
  },
);

const navLinks: { to: string; key: string }[] = [
  { to: "solutions", key: "solutions" },
  { to: "who-we-serve", key: "whoWeServe" },
  { to: "how-it-works", key: "howItWorks" },
  { to: "integrations", key: "integrations" },
  { to: "contact", key: "contact" },
];
</script>

<template>
  <header
    class="sticky top-0 z-[100] border-b border-border bg-white px-5 md:px-10 lg:px-20"
  >
    <div class="mx-auto flex h-[68px] max-w-[1200px] items-center">
      <RouterLink
        :to="{ name: 'home' }"
        class="flex shrink-0 items-center gap-[9px]"
      >
        <img
          src="/logo.png"
          :width="30"
          :height="30"
          alt=""
          class="rounded-[7px]"
        />
        <span class="text-[16.5px] font-bold tracking-[-0.4px] text-ink"
          >BaakoPay</span
        >
      </RouterLink>

      <nav class="hidden flex-1 items-center justify-center gap-9 lg:flex">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="{ name: link.to }"
          class="group relative py-1 text-sm font-medium transition-colors"
          :class="
            route.name === link.to ? 'text-ink' : 'text-muted hover:text-ink'
          "
        >
          {{ t(`nav.${link.key}`) }}
          <span
            class="pointer-events-none absolute right-0 -bottom-0.5 left-0 h-[2.5px] origin-left bg-brand transition-transform duration-400 ease-out"
            :class="
              route.name === link.to
                ? 'scale-x-100'
                : 'scale-x-0 group-hover:scale-x-100'
            "
          ></span>
        </RouterLink>
      </nav>

      <div class="ml-auto hidden shrink-0 items-center gap-3 lg:flex">
        <div class="flex items-center gap-0.5 rounded-full bg-tint p-0.5">
          <button
            type="button"
            class="rounded-full px-2.5 py-1 text-xs font-semibold transition-colors"
            :class="
              locale === 'fr'
                ? 'bg-white text-ink shadow-sm'
                : 'text-muted hover:text-ink'
            "
            @click="setLocale('fr')"
          >
            FR
          </button>
          <button
            type="button"
            class="rounded-full px-2.5 py-1 text-xs font-semibold transition-colors"
            :class="
              locale === 'en'
                ? 'bg-white text-ink shadow-sm'
                : 'text-muted hover:text-ink'
            "
            @click="setLocale('en')"
          >
            EN
          </button>
        </div>

        <BaseButton variant="primary" size="sm">{{
          t("nav.requestDemo")
        }}</BaseButton>
      </div>

      <button
        type="button"
        class="ml-auto flex h-9 w-9 shrink-0 items-center justify-center text-ink lg:hidden"
        :aria-expanded="mobileMenuOpen"
        aria-label="Toggle menu"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg
          v-if="!mobileMenuOpen"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        </svg>
        <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>

    <Transition name="mobile-menu">
      <nav
        v-if="mobileMenuOpen"
        class="absolute top-full right-0 left-0 flex flex-col border-b border-border bg-white px-5 py-4 lg:hidden"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="{ name: link.to }"
          class="py-3 text-sm font-medium"
          :class="route.name === link.to ? 'text-ink' : 'text-muted'"
        >
          {{ t(`nav.${link.key}`) }}
        </RouterLink>
        <div
          class="mt-3 flex items-center gap-0.5 self-start rounded-full bg-tint p-0.5"
        >
          <button
            type="button"
            class="rounded-full px-2.5 py-1 text-xs font-semibold transition-colors"
            :class="
              locale === 'fr'
                ? 'bg-white text-ink shadow-sm'
                : 'text-muted hover:text-ink'
            "
            @click="setLocale('fr')"
          >
            FR
          </button>
          <button
            type="button"
            class="rounded-full px-2.5 py-1 text-xs font-semibold transition-colors"
            :class="
              locale === 'en'
                ? 'bg-white text-ink shadow-sm'
                : 'text-muted hover:text-ink'
            "
            @click="setLocale('en')"
          >
            EN
          </button>
        </div>

        <BaseButton variant="primary" size="sm" class="mt-3 w-full">{{
          t("nav.requestDemo")
        }}</BaseButton>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>

</style>
