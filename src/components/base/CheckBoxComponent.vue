<script setup>
import IconCheck from '@/components/icons/IconCheck.vue'
const props = defineProps({label : String})
const checkbox = defineModel()
</script>
<template>
  <div @click="checkbox = !checkbox" class="flex items-center gap-2 cursor-pointer">
    <div class="flex items-center justify-center h-[20px] w-[20px] bg-green rounded-[6px]">
      <Transition name="fade">
      <IconCheck v-if="checkbox" class="text-dimPurple" />
      </Transition>
    </div>
    <span>{{label}}</span>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>