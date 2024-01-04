<script setup lang="ts">
import { string } from 'alga-js'

interface Props {
  title: string,
  description: string,
  variant?: string,
  action?: boolean
}

interface Emits {
  (e: 'handler', value: boolean): void
}

withDefaults(defineProps<Props>(), {
  title: '',
  description: '',
  variant: '',
  action: false
})

const emit = defineEmits<Emits>()

const closeAlert = () => {
  emit('handler', false)
}
</script>

<template>
  <div class="alert" :class="variant ? 'alert'+string.capitalize(variant) : ''">
    <div class="alertContent">
      <h3 class="alertTitle">{{ title }}</h3>
      <p class="alertText">{{ description }}</p>
    </div>
    <div v-if="action" class="alertAction" @click="closeAlert">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="pointerEvents-none bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
@use alert;
</style>