<script setup lang="ts">
import BaseButton from "../bases/BaseButton.vue";
</script>

<template>
  <div
    class="flex-col lg:flex-row px-5 lg:px-20 3xl:px-45 bg-gradient-to-b from-primary-100 via-indigo-300/95 to-white lg:justify-between items-end lg:items-center lg:gap-10 inline-flex text-white-100"
  >
    <div
      class="text-center lg:text-start space-y-[30px] w-full lg:w-[615px] flex flex-col"
    >
      <div class="space-y-[10px] lg:space-y-[20px] flex flex-col">
        <Transition name="fade" appear>
          <span
            class="text-dark-100 lg:text-white text-2xl lg:text-4xl font-bold lg:leading-[50px]"
          >
            FAST AND SECURE DIGITAL PAYMENTS FOR CEMENTS TRANSACTIONS
          </span>
        </Transition>
        <Transition appear name="fade">
          <span class="text-dark-100 lg:text-secondary-100 text-xl font-medium">
            Easily manage payments and track transactions in real time
          </span>
        </Transition>
      </div>
      <div class="flex space-x-[15px] w-full lg:w-fit">
        <BaseButton text="Download App" color="primary" icon-name="MoveRight" />
      </div>
    </div>
    <Transition name="fade" appear>
      <div class="justify-start order-first lg:order-none">
        <img class="self-stretch" src="/img/iPhone16.png" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>
