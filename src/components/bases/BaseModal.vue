<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
import BaseIcon from "./BaseIcon.vue";

defineProps({
  isVisible: Boolean,
});

const emit = defineEmits(["cancel", "confirm"]);
</script>

<template>
  <div v-if="isVisible">
    <!-- Modal Overlay -->
    <div class="fixed inset-0 z-[9999] flex justify-center items-center">
      <!-- Modal Container -->
      <div
        class="flex flex-col min-w-[300px] max-w-[550px] rounded-lg shadow-lg bg-white px-[20px] py-[20px]"
      >
        <!-- Header -->
        <div class="py-2">
          <div class="flex justify-between items-start border-b-[1px] pb-4">
            <slot name="header">
              <h3 class="text-2xl font-semibold">Modal Header</h3>
            </slot>
            <button
              class="leading-none text-xl font-semibold h-6 w-6"
              @click="emit('cancel')"
            >
              <BaseIcon name="X" :stroke-width="2" />
            </button>
          </div>
        </div>
        <!-- Body -->
        <div class="py-5 flex-1 overflow-y-auto">
          <slot>
            <p>
              This is a modal body content. Let's make this line a bit longer to
              see the width.
            </p>
          </slot>
        </div>
        <!-- Footer -->
        <div
          class="pt-4 flex justify-end items-center gap-[5px] border-t-[1px]"
        >
          <slot name="footer">
            <div class="flex gap-[5px]">
              <BaseButton
                text="Cancel"
                color="danger"
                @click="emit('cancel')"
              />
              <BaseButton
                text="Confirm"
                color="primary"
                @click="emit('confirm')"
              />
            </div>
          </slot>
        </div>
      </div>
    </div>
    <!-- Background Overlay -->
    <div class="opacity-25 fixed inset-0 z-[9998] bg-black"></div>
  </div>
</template>
