<script setup>
import IconBehance from '@/components/icons/IconBehance.vue'
import IconDribbble from '@/components/icons/IconDribbble.vue'
import IconMenu from '@/components/icons/IconMenu.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
const showMenu = ref(false)
const menu = ref(null)
// methods
onClickOutside(menu , () => showMenu.value = false)
</script>
<template>
  <div @click="showMenu = true" class="absolute lg:hidden flex items-center gap-2 top-6 left-6">
    <IconMenu class="text-white !w-[20px]" />
    <div class="text-white">Menu</div>
  </div>
  <div :class="{'!opacity-100 !visible' : showMenu}" class="bg-[#00000033] backdrop-blur fixed inset-0 z-10 lg:hidden opacity-0 invisible transition-all"></div>
  <ul
    ref="menu"
    :class="{'!opacity-100 !visible !left-0' : showMenu}"
    class="flex items-center lg:justify-center gap-10 fixed lg:absolute top-20 max-lg:flex-col max-lg:items-start max-lg:gap-4 max-lg:!inset-y-0 max-lg:w-[290px] max-lg:left-[-300px] max-lg:bg-white z-50 font-medium max-lg:text-black text-white text-[18px] max-lg:p-8 max-lg:opacity-0 max-lg:invisible transition-all">
    <li class="transition-all hover:opacity-50">
      <router-link to="/" title="Home"> Home</router-link>
    </li>
    <li class="transition-all hover:opacity-50">
      <router-link to="/" title="Features"> Features</router-link>
    </li>
    <li class="transition-all hover:opacity-50">
      <router-link to="/" title="Pricing"> Pricing</router-link>
    </li>
    <li class="transition-all hover:opacity-50">
      <router-link to="/" title="Blog"> Blog</router-link>
    </li>
    <li class="transition-all hover:opacity-50">
      <a href="/" target="_blank" title="Dribbble">
        <IconDribbble />
      </a>
    </li>
    <li class="transition-all hover:opacity-50">
      <a href="/" target="_blank" title="Behance">
        <IconBehance />
      </a>
    </li>
  </ul>
</template>
