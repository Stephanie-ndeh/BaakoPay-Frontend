<script setup lang="ts">
import SocialButton from "../common/SocialButton.vue";
</script>
<template>
  <div class="py-[50px] px-5 lg:px-20 3xl:px-45 overflow-hidden">
    <div class="flex flex-col lg:flex-row items-center justify-between">
      <div class="flex-col space-y-2 inline-flex">
        <div
          class="text-primary-100 text-[28px] lg:text-2xl font-bold leading-[35px] tracking-wide"
        >
          Start Using BaakoPay today
        </div>
        <div
          class="self-stretch text-neutral-700 text-[18px] font-normal leading-[25px] tracking-wide"
        >
          Perform secure and instant transactions with BaakoPay
        </div>
      </div>
      <div class="flex items-center">
        <SocialButton name="" />
        <SocialButton name="google" />
      </div>
    </div>
  </div>
</template>
