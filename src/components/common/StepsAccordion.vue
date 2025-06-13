<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import BaseIcon from "../bases/BaseIcon.vue";
import type { AccordionItem } from "@/interfaces/common";

const props = defineProps({
  items: {
    type: Array as () => AccordionItem[],
    required: true,
    default: () => [],
  },
  openIndex: {
    type: Number as () => number | null,
    default: null, // It's good practice to provide a default for props used with v-model
  },
});
const emit = defineEmits(["update:openIndex"]);

const toggleAccordion = (index: number) => {
  // If the clicked item (index) is already open (props.openIndex === index),
  // then the new state should be null (closed). Otherwise, open the clicked item.
  const newOpenState = props.openIndex === index ? null : index;
  emit("update:openIndex", newOpenState);
};
</script>

<template>
  <div id="accordion-open" class="space-y-[30px] w-full lg:w-[700px]">
    <div v-for="(item, index) in items" :key="index">
      <h2 :id="`accordion-open-heading-${index}`">
        <button
          type="button"
          class="flex items-center justify-between w-full pb-5 font-medium text-black-100 border-b border-secondary-200 rounded-t-xl"
          :aria-expanded="props.openIndex === index"
          :aria-controls="`accordion-open-body-${index}`"
          @click="toggleAccordion(index)"
        >
          <div class="flex items-center gap-2">
            <div
              class="rounded-full w-[18px] h-[18px] flex items-center justify-center bg-primary-100 text-white"
            >
              <span class="text-[12px]">{{ item.step }}</span>
            </div>
            {{ item.title }}
          </div>
          <BaseIcon
            :name="props.openIndex === index ? 'X' : 'Plus'"
            :stroke-width="2"
          />
        </button>
      </h2>
      <Transition name="slide-down">
        <div
          v-if="props.openIndex === index"
          :id="`accordion-open-body-${index}`"
          class="p-5"
        >
          <p v-html="item.content" class="text-neutral-500"></p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  max-height: 500px;
}
</style>
