<script setup>
import ButtonComponent from '@/components/base/ButtonComponent.vue'
import DividerComponent from '@/components/base/DividerComponent.vue'
import IconPhone from '@/components/icons/IconPhone.vue'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconBuilding from '@/components/icons/IconBuilding.vue'
import LabelComponent from '@/components/base/LabelComponent.vue'
import { ref } from 'vue'
import SelectComponent from '@/components/base/SelectComponent.vue'
import CheckBoxComponent from '@/components/base/CheckBoxComponent.vue'

const options = ref([
  '$100',
  '$200',
  '$300',
  '$400',
  '$500',
  '$600',
  '$700',
  '$800'
])
const selected = ref(options.value[4])
const sendCopy = ref(false)
</script>
<template>
  <div class="h-[100vh] bg-purple relative flex items-center justify-center">
    <img
      src="/images/room.jpg"
      class="absolute w-full h-full object-cover opacity-70"
      alt="Wave background"
    />
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-6 relative z-10">
        <div class="flex items-center justify-center">
          <div class="w-[400px]">
            <div class="text-[42px] text-white font-bold leading-[50px]">Let’s Keep in Touch</div>
            <div class="text-[22px] font-medium text-white mt-6">
              We have created a new product that will help designers, developers and companies
              create websites for their startups quickly and easily.
            </div>
            <div class="flex items-center gap-4 text-[16px] text-white mt-10">
              <IconPhone />
              <div>+1 555 505 5050</div>
            </div>
            <div class="flex items-center gap-4 text-[16px] text-white mt-10">
              <IconEnvelope />
              <div>info@designmodo.com</div>
            </div>
            <div class="flex gap-4 text-[16px] text-white mt-10">
              <IconBuilding class="!min-w-max mt-1" />
              <div>
                San Francisco, CA560 Bush St & <br />
                20th Ave, Apt5 San Francisco, <br />
                230909
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="bg-white rounded-[10px] w-[470px] p-12">
            <form class="flex flex-col gap-6">
              <div class="flex items-center gap-6">
                <div class="w-full">
                  <LabelComponent id="your-name" text="YOUR NAME" />
                  <input id="your-name" class="form-input" placeholder="First name" />
                </div>
                <div class="min-w-max">
                  <LabelComponent id="your-budget" text="YOUR BUDGET" />
                  <SelectComponent v-model="selected" :options="options" />
                </div>
              </div>
              <div>
                <LabelComponent id="input-field" text="INPUT FIELD" />
                <input id="input-field" class="form-input" placeholder="name@mail.com" />
              </div>
              <div>
                <LabelComponent id="your-message" text="YOUR MESSAGE" />
                <textarea id="your-message" class="form-textarea" placeholder="Message"></textarea>
              </div>
              <div class="flex items-center justify-between gap-4">
                <CheckBoxComponent label="Send me a copy" v-model="sendCopy"/>
                <ButtonComponent type="submit" class="!min-h-[50px] !w-fit !h-[50px] !bg-green hover:!bg-greenDarker">
                  Send
                </ButtonComponent>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
