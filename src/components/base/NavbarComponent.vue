<script setup>
import IconBehance from "@/components/icons/IconBehance.vue"
import IconDribbble from "@/components/icons/IconDribbble.vue"
</script>
<template>
  <ul class="flex items-center justify-center gap-10 absolute top-20 z-10 font-medium text-white text-[18px]">
    <li class="transition-all hover:opacity-50">
      <router-link to="/" title="Home"> Home </router-link>
    </li>
    <li class="transition-all hover:opacity-50">
      <router-link to="/" title="Features"> Features </router-link>
    </li>
    <li class="transition-all hover:opacity-50">
      <router-link to="/" title="Pricing"> Pricing </router-link>
    </li>
    <li class="transition-all hover:opacity-50">
      <router-link to="/" title="Blog"> Blog </router-link>
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
