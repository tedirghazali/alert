<script setup lang="ts">
import { ref, watch } from 'vue'
import { string } from 'alga-js'

interface Props {
  modelValue: any[]
}

interface Emits {
  (e: 'update:modelValue', value: any[] | any): void
}

const props = withDefaults(defineProps<Props>(), {
  //@ts-ignore
  modelValue: []
})

const emit = defineEmits<Emits>()

const alerts = ref<any[]>(props.modelValue || [])
watch(() => props.modelValue, () => {
  alerts.value = props.modelValue || []
})

const closeAlert = (ind: number) => {
  alerts.value.splice(ind, 1)
  emit('update:modelValue', alerts.value)
}
</script>

<template>
  <div class="notification">
    <div v-for="(alert, ind) in alerts" class="alert" :class="alert?.variant ? 'alert'+string.capitalize(alert.variant) : ''">
      <div class="alertContent">
        <h3 class="alertTitle">{{ alert.title }}</h3>
        <p class="alertText">{{ alert.description }}</p>
      </div>
      <div class="alertAction" @click="closeAlert(ind)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="pointerEvents-none bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
@use alert;
</style>