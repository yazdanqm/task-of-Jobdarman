<script setup>
import ButtonComponent from '@/components/base/ButtonComponent.vue';
import DividerComponent from '@/components/base/DividerComponent.vue'
import { ref } from 'vue';
const tab = ref('signup')
</script>
<template>
  <div class="h-[100vh] bg-purple relative flex items-center justify-center">
    <img
      src="/images/wave.jpg"
      class="absolute w-full h-full object-cover opacity-50"
      alt="Wave background"
    />
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-6 relative z-10">
        <div class="flex items-center justify-center">
          <div class="w-[368px]">
            <div class="text-[42px] text-white font-bold leading-[50px]">
            We solve digital problems with an outstanding creative flare
          </div>
          <div class="text-[16px] text-white mt-6">
            We have created a new product that will help designers, developers and companies create
            websites for their startups quickly and easily.
          </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
            <div class="bg-white rounded-[10px] w-[470px]">
                <div class="grid grid-cols-2 text-center overflow-hidden">
                    <div @click="tab = 'signup'" :class="{'!text-dimPurple' : tab === 'signup'}" class="text-gray text-[14px] font-bold cursor-pointer py-6 transition-all hover:text-dimPurple">SIGN UP</div>
                    <div @click="tab = 'login'" :class="{'!text-dimPurple' : tab === 'login'}" class="text-gray text-[14px] font-bold cursor-pointer py-6 transition-all hover:text-dimPurple">LOGIN</div>
                    <div :class="{'!bg-dimPurple' : tab === 'signup'}" class="bg-border h-[3px] transition-all"></div>
                    <div :class="{'!bg-dimPurple' : tab === 'login'}" class="bg-border h-[3px] transition-all"></div>
                </div>
                <div v-if="tab === 'signup'" class="p-[70px]">
                    <form class="flex flex-col gap-8">
                        <input type="email" placeholder="Your email" class="form-input" />
                        <input type="password" placeholder="Your password" class="form-input" />
                        <ButtonComponent type="submit" title="Create an Account" class="!min-h-[50px] w-full !h-[50px] !bg-green hover:!bg-greenDarker mt-1">
                          Create an Account
                        </ButtonComponent>
                    </form>
                    <DividerComponent text="or" class="my-8" />
                    <ButtonComponent title="Login via Twitter" class="!min-h-[50px] w-full !h-[50px] !bg-blue hover:!bg-blueDarker mt-1">
                      Login via Twitter
                    </ButtonComponent>
                </div>
                <div v-else class="min-h-[473px] relative">
                  <div class="absolute inset-0 flex items-center justify-center text-gray text-[18px]">
                    Login form
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
