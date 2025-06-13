<script setup lang="ts">
import { ref } from "vue";
import Accordion from "../common/StepsAccordion.vue";

const items = ref([
  {
    step: "1",
    title: "Create Your Account",
    content:
      "Sign up with your credentials, set up payment preferences, and verify your account for secure transactions. This ensures only authorized users can process payments.",
  },
  {
    step: "2",
    title: "Enter Payment Details",
    content:
      "Input transaction ID or payment reference for verification. This step helps match payments to the correct purchase and prevents errors.",
  },
  {
    step: "3",
    title: "Confirm and Process Payments",
    content:
      "Review transaction details and authorize the payment. Once confirmed, the transaction is securely processed, and a receipt is generated instantly.",
  },
]);

const openIndex = ref(null);
</script>

<template>
  <div
    class="self-stretch px-5 lg:px-20 3xl:px-45 py-[40px] md:py-20 flex flex-col lg:flex-row space-y-[20px] lg:space-y-0 lg:space-x-[30px] overflow-hidden w-full justify-between"
  >
    <div class="flex flex-col space-y-2">
      <span class="text-primary-100 text-xl font-bold">
        Step By Step Guide
      </span>
      <span class="text-dark-100 text-lg font-medium"
        >Follow this steps to make your transactions
      </span>
    </div>
    <Accordion :items="items" v-model:openIndex="openIndex" />
  </div>
</template>
