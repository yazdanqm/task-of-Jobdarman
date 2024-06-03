<script setup>
// props
const props = defineProps({
  type: { type: String, default: 'button' },
  to: { type: String, default: '' },
  title: { type: String, default: '' },
  target: { type: String, default: '_self' },
  class: { type: String, default: '' }
})
//emits
const emits = defineEmits(['onButtonClick'])
// mthods
const onButtonClick = () => {
  emits('onButtonClick')
}
</script>
<template>
  <button
    @click="onButtonClick"
    v-if="props.type === 'button'"
    :title="props.title"
    :class="props.class"
    class="button-primary"
  >
    <slot />
  </button>

  <button
    @click="onButtonClick"
    type="submit"
    v-if="props.type === 'submit'"
    :title="props.title"
    :class="props.class"
    class="button-primary"
  >
    <slot />
  </button>

  <router-link
    v-if="props.type === 'link'"
    :class="props.class"
    class="button-primary"
    :target="props.target"
    :to="props.to"
    :title="props.title"
  >
    <slot />
  </router-link>
</template>
<style scoped>
.button-primary {
  @apply relative bg-purple text-white rounded-full px-8 py-4 min-h-[60px] flex items-center justify-center transition-all hover:bg-purpleDarker;
}
</style>
