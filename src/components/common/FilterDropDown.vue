<script setup lang="ts">
import { computed, ref } from "vue";
import BaseIcon from "@/components/bases/BaseIcon.vue";

const props = defineProps({
  data: { type: Array, required: true },
});
const emit = defineEmits(["filter"]);

const isDropDownOpen = ref(false);
const toggleDropDown = () => {
  isDropDownOpen.value = !isDropDownOpen.value;
};

const statuses = computed(() => [
  ...new Set(props.data.map((item) => item.status)),
]);

const filter = (status) => {
  emit("filter", status);
};
</script>

<template>
  <div class="relative sm:rounded-lg">
    <div
      class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between"
    >
      <div class="relative">
        <button
          @click="toggleDropDown"
          class="inline-flex items-center text-[14px] space-x-[5px] text-neutral-500 border border-neutral-500 hover:bg-light-300 font-medium rounded-lg text-sm px-3 py-1.5"
          type="button"
        >
          <span> Sort by Status</span>
          <BaseIcon name="ChevronDown" :size="18" :stroke-width="2" />
        </button>

        <!-- Dropdown menu -->
        <div
          class="absolute left-0 mt-2 z-10 w-48 bg-white text-neutral-600 divide-y divide-neutral-100 rounded-lg shadow-sm"
          v-if="isDropDownOpen"
        >
          <ul class="p-3 space-y-1 text-sm">
            <li v-for="(status, index) in statuses" :key="index">
              <div class="flex items-center p-2 rounded-sm hover:bg-light-300">
                <input
                  :id="`filter_option_${index}`"
                  type="checkbox"
                  @change="filter(status)"
                  class="w-4 h-4 text-primary-100 bg-gray-100 border-gray-300 focus:ring-primary-100"
                />
                <label
                  :for="`filter_option_${index}`"
                  class="w-full ms-2 text-sm font-medium"
                >
                  {{ status }}
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
