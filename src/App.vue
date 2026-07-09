<script setup lang="ts">
import { watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { t, locale } = useI18n();
const route = useRoute();

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

watchEffect(() => {
  const titleKey = (route.meta.titleKey as string) ?? "home.meta.title";
  const descriptionKey =
    (route.meta.descriptionKey as string) ?? "home.meta.description";

  const title = t(titleKey);
  const description = t(descriptionKey);

  document.title = title;
  document.documentElement.lang = locale.value;

  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[name="twitter:title"]', title);
  setMeta('meta[name="twitter:description"]', description);
  setMeta(
    'meta[property="og:locale"]',
    locale.value === "fr" ? "fr_FR" : "en_US",
  );

  const baseUrl = import.meta.env.VITE_APP_URL as string;
  const path = route.path === "/" ? "" : route.path;
  const fullUrl = `${baseUrl}${path}`;

  setCanonical(fullUrl);
  setMeta('meta[property="og:url"]', fullUrl);
});
</script>
<template>
  <RouterView></RouterView>
</template>
