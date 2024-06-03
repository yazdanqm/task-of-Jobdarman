<script setup>
// props
const props = defineProps({ text: String })
</script>
<template>
  <div class="relative flex items-center justify-center">
    <div class="h-[1px] bg-border w-full"></div>
    <div class="bg-white text-gray px-4 absolute z-10">{{ text }}</div>
  </div>
</template>
