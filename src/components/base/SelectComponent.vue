<script setup>
import IconBottomArrow from '@/components/icons/IconBottomArrow.vue'
import { ref } from 'vue'

const props = defineProps({ options: Object })
const selectBox = ref(null)
const selected = defineModel()
const showOptions = ref(false)
import { onClickOutside } from '@vueuse/core'
// methods
const changeSelectedOption = (item) => {
  selected.value = item
  showOptions.value = false
}
onClickOutside(selectBox, () => showOptions.value = false)
</script>
<template>
  <div ref="selectBox" class="relative">
    <div
      @click="showOptions = !showOptions"
      class="flex items-center justify-between gap-2 min-w-[140px] h-[50px] border-[2px] border-border rounded-full cursor-pointer px-4">
      <div>{{ selected }}</div>
      <IconBottomArrow :class="{'rotate-180' : showOptions}" class="transition-all" />
    </div>
    <div :class="{'!opacity-100 !visible !top-[60px]' : showOptions}"
         class="absolute flex flex-col gap-2 bg-white left-0 right-0 top-[75px] opacity-0 invisible border-[2px] border-border rounded-[10px] p-2 shadow-md max-h-[140px] overflow-y-auto transition-all">
      <div v-for="(item , index) in options" :key="'option' + index" @click="changeSelectedOption(item)"
           class="rounded-full px-3 py-1 bg-transparent hover:bg-[#ececec] transition-all cursor-pointer">
        {{ item }}
      </div>
    </div>
  </div>
</template>