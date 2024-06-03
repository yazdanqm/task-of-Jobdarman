<script setup>
import IconCheck from '@/components/icons/IconCheck.vue'
import ButtonComponent from '@/components/base/ButtonComponent.vue'

const sliderOptions = {
  rewind: true,
  perPage: 3,
  gap : 40,
  arrows : false,
  pagination : false,
  focus : 0,
  breakpoints : {
    1280 : {
      perPage : 2.5
    },
    1080 : {
      perPage: 2,
    },
    600 : {
      perPage : 1.5
    },
    500 : {
      perPage : 1
    }
  }
}
</script>
<template>
  <div class="min-h-[100vh] bg-purple relative flex items-center justify-center py-16 lg:py-32">
    <img
      src="/images/plan.jpg"
      class="absolute w-full h-full object-cover opacity-60"
      alt="Plans background"
    />
  <div class="relative container mx-auto max-2xl:px-6">
    <h2 class="text-[28px] lg:text-[42px] font-bold text-white text-center">Plans & Pricing</h2>
    <div class="text-[18px] lg:text-[22px] font-medium text-center text-white mt-4">
      Startup Framework is free forever — you only pay for <br />
      custom domain hosting or to export your site.
    </div>
    <splide :options="sliderOptions" class="mt-14 !w-full">
      <splide-slide>
        <div class="rounded-[10px] border-[2px] border-[#ffffff44] p-6 lg:p-16">
          <div class="text-[18px] lg:text-[22px] font-medium text-white">Starter</div>
          <div class="flex items-start gap-2 my-3 lg:my-6">
            <div class="text-[28px] lg:text-[58px] font-bold text-white">9.99</div>
            <div class="text-[14px] lg:text-[16px] text-white mt-2 lg:mt-6">$</div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">2 GB of space</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">14 days of backups</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">Social integrations</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">Client billing</div>
            </div>
            <div class="pl-8 text-[14px] lg:text-[16px] text-white opacity-55">Remote access</div>
            <div class="pl-8 text-[14px] lg:text-[16px] text-white opacity-55">Custom domain</div>
            <div class="pl-8 text-[14px] lg:text-[16px] text-white opacity-55">24 hours support</div>
            <div class="pl-8 text-[14px] lg:text-[16px] text-white opacity-55">Admin tools</div>
            <div class="pl-8 text-[14px] lg:text-[16px] text-white opacity-55">Collaboration tools</div>
            <div class="pl-8 text-[14px] lg:text-[16px] text-white opacity-55">User management</div>
          </div>
          <ButtonComponent class="mt-12 !w-full !bg-transparent border-[2px] border-[#ffffff55] hover:!bg-pink hover:!border-transparent">
            Get Started
          </ButtonComponent>
        </div>
      </splide-slide>
      <splide-slide>
        <div class="rounded-[10px] border-[2px] border-[#ffffff44] p-6 lg:p-16">
          <div class="text-[18px] lg:text-[22px] font-medium text-white">Professional</div>
          <div class="flex items-start gap-2 my-3 lg:my-6">
            <div class="text-[28px] lg:text-[58px] font-bold text-white">19.99</div>
            <div class="text-[14px] lg:text-[16px] text-white mt-2 lg:mt-6">$</div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">2 GB of space</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">14 days of backups</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">Social integrations</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">Client billing</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">Remote access</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">Custom domain</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">24 hours support</div>
            </div>
            <div class="pl-8 text-[14px] lg:text-[16px] text-white opacity-55">Admin tools</div>
            <div class="pl-8 text-[14px] lg:text-[16px] text-white opacity-55">Collaboration tools</div>
            <div class="pl-8 text-[14px] lg:text-[16px] text-white opacity-55">User management</div>
          </div>
          <ButtonComponent class="mt-12 !w-full !bg-transparent border-[2px] border-[#ffffff55] hover:!bg-pink hover:!border-transparent">
            Get Started
          </ButtonComponent>
        </div>
      </splide-slide>
      <splide-slide>
        <div class="rounded-[10px] border-[2px] border-[#ffffff44] p-6 lg:p-16">
          <div class="text-[18px] lg:text-[22px] font-medium text-white">Team</div>
          <div class="flex items-start gap-2 my-3 lg:my-6">
            <div class="text-[28px] lg:text-[58px] font-bold text-white">49.99</div>
            <div class="text-[14px] lg:text-[16px] text-white mt-2 lg:mt-6">$</div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">2 GB of space</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">14 days of backups</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">Social integrations</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">Client billing</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">Remote access</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">Custom domain</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">24 hours support</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">Admin tools</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">Collaboration tools</div>
            </div>
            <div class="flex items-center gap-4">
              <IconCheck class="text-green !w-[15px] !h-[15px]"/>
              <div class="text-[14px] lg:text-[16px] text-white">User management</div>
            </div>
          </div>
          <ButtonComponent class="mt-12 !w-full !bg-transparent border-[2px] border-[#ffffff55] hover:!bg-pink hover:!border-transparent">
            Get Started
          </ButtonComponent>
        </div>
      </splide-slide>
    </splide>
  </div>
  </div>
</template>

