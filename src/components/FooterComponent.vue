<template>
  <div class="bg-background">
    <div class="container mx-auto py-8">
      <div class="flex max-lg:flex-col items-center justify-between gap-4 pb-8 border-b-[2px] border-[#6c5cb3]">
        <div class="text-white text-[18px] lg:text-[24px] font-bold">Startup 3</div>
        <ul class="flex items-center gap-6">
          <li>
            <router-link to="/" title="Privacy Policy" class="text-[14px] lg:text-[16px] text-white transition-all hover:opacity-50">
              Privacy Policy
            </router-link>
          </li>
          <li>
            <router-link to="/" title="Terms" class="text-[14px] lg:text-[16px] text-white transition-all hover:opacity-50">
              Terms
            </router-link>
          </li>
          <li>
            <a href="/" target="_blank" title="Twitter" class="text-[14px] lg:text-[16px] text-white transition-all hover:opacity-50">
              <IconTwitter class="text-white max-lg:!w-[18px]" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" title="Facebook" class="text-[14px] lg:text-[16px] text-white transition-all hover:opacity-50">
              <IconFacebook class="text-white max-lg:!w-[18px]" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" title="Google" class="text-[14px] lg:text-[16px] text-white transition-all hover:opacity-50">
              <IconGoogle class="text-white max-lg:!w-[18px]" />
            </a>
          </li>
        </ul>
      </div>
      <div class="flex max-lg:flex-col items-center justify-between gap-4 mt-8">
        <ul class="flex max-sm:flex-col items-center gap-3 sm:gap-6">
          <li>
            <router-link to="/" title="Tour" class="text-[14px] lg:text-[16px] text-white transition-all hover:opacity-50">
              Tour
            </router-link>
          </li>
          <li>
            <router-link to="/" title="Features" class="text-[14px] lg:text-[16px] text-white transition-all hover:opacity-50">
              Features
            </router-link>
          </li>
          <li>
            <router-link to="/" title="Pricing Plans" class="text-[14px] lg:text-[16px] text-white transition-all hover:opacity-50">
              Pricing Plans
            </router-link>
          </li>
          <li>
            <router-link to="/" title="Our Works" class="text-[14px] lg:text-[16px] text-white transition-all hover:opacity-50">
              Our Works
            </router-link>
          </li>
          <li>
            <router-link to="/" title="Brands" class="text-[14px] lg:text-[16px] text-white transition-all hover:opacity-50">
              Brands
            </router-link>
          </li>
          <li>
            <router-link to="/" title="Contacts" class="text-[14px] lg:text-[16px] text-white transition-all hover:opacity-50">
              Contacts
            </router-link>
          </li>
        </ul>
        <div class="text-[14px] lg:text-[16px] text-white">
          © 2017 Designmodo. All rights reserved.
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconGoogle from '@/components/icons/IconGoogle.vue'
</script>