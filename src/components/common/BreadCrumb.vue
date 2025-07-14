<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const breadcrumbs = computed(() => {
  const matchedRoutes = [];
  let currentRoute = route.matched.slice().reverse()[0];
  let breadcrumb;

  if (currentRoute && currentRoute.meta.parent) {
    breadcrumb = router.resolve({ name: currentRoute.meta.parent });
    matchedRoutes.push(breadcrumb);
  }

  if (currentRoute) {
    matchedRoutes.push(currentRoute);
  }

  return matchedRoutes.map((routeItem) => ({
    label: routeItem.meta.breadcrumb,
    to: routeItem.path,
  }));
});
</script>

<template>
  <div class="flex space-x-2 items-center justify-between">
    <span class="text-[22px] font-bold" v-if="breadcrumbs.length > 0">
      {{ breadcrumbs[breadcrumbs.length - 1].label }}
    </span>
    <div v-if="breadcrumbs.length > 0" class="flex space-x-2">
      <div
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="`breadcrumb-${index}`"
        class="flex text-black last-of-type:text-neutral-500 font-medium capitalize space-x-2 text-[18px]"
      >
        <RouterLink :to="breadcrumb.to" class="block">
          {{ breadcrumb.label }}
        </RouterLink>
        <span v-if="index < breadcrumbs.length - 1" class="block">/</span>
      </div>
    </div>
  </div>
</template>
