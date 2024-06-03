<script setup>
const props = defineProps({ text: String, id: String })
</script>
<template>
  <label :for="id" class="text-[12px] lg:text-[14px] font-bold text-dimPurple mb-2 block">{{ text }}</label>
</template>
