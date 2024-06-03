<script setup>
import NavbarComponent from '@/components/base/NavbarComponent.vue'
import ButtonComponent from '@/components/base/ButtonComponent.vue'

const sliderOptions = {
  rewind: true,
  perPage: 1,
  pagination: true,
  breakpoints: {
    1024: {
      arrows: false
    }
  }
}
</script>
<template>
  <div class="h-[100vh] bg-purple relative flex max-lg:flex-col items-center justify-center">
    <img
      src="/images/mountain.jpg"
      class="absolute w-full h-full object-cover opacity-50"
      alt="Mountain background"
    />
    <NavbarComponent />
    <div class="container mx-auto flex flex-col items-center justify-center gap-16">
      <Splide class="w-full" :options="sliderOptions">
        <SplideSlide v-for="i in 5" :key="'slide' + i" class="text-center">
          <span class="block font-bold text-[18px] lg:text-[24px] text-white">Startup {{ i }}</span>
          <h2 class="font-bold text-[30px] lg:text-[72px] text-white my-4">Forget About Code</h2>
          <p class="w-full max-sm:px-6 sm:max-w-[730px] mx-auto text-[16px] lg:text-[22px] font-medium text-white">
            Startup Framework gives you complete freedom over your creative process — you don’t have
            to think about any technical aspects. There are no limits and absolutely no coding.
          </p>
        </SplideSlide>
      </Splide>
      <ButtonComponent class="mt-12" title="Create an Account"> Create an Account</ButtonComponent>
    </div>
  </div>
</template>

<style>
.splide__pagination {
  bottom: -60px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.splide__pagination__page {
  margin: 0 !important;
  width: 10px !important;
  height: 10px !important;
  border: 1px solid #ffffff88 !important;
  background-color: transparent !important;
}

.splide__pagination__page.is-active {
  transform: scale(1) !important;
  opacity: 1 !important;
  background-color: white !important;
}

.splide__arrow {
  background-color: transparent !important;
  opacity: .5 !important;
  transition: .5s all;
}

.splide__arrow:hover {
  opacity: 1 !important;
}

.splide__arrow svg {
  fill: white !important;
}
</style>
