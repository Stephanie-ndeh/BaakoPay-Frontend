<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <a
    v-if="name === 'google'"
    href="#"
    class="w-[180px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
  >
    <img
      src="https://www.anylist.com/static/website/images/google-play-badge.png?v=736dd01f4f0da79692b936d988507dcc5cfc3f4210714500594be4f9debd565e0228d856938965cf8aa5a56aceca12dd0423da98b717ea68f7eeb36007e5331c"
      alt=""
      class="w-[230px]"
    />
  </a>
  <a
    v-else
    href="#"
    class="w-[160px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
  >
    <img
      src="https://www.anylist.com/static/website/images/hero_download.png?v=89eb2f408dcbf5275ad2d1030e01c14ad1d38879b0afec438049c6e69d4034dd607a4dfa87f0502d39e31ac97c0b0f1a96b151d259b83ea2674d1c233f5a25e5"
      alt=""
      class="w-full"
    />
  </a>
</template>
