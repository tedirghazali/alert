<script setup lang="ts">
import { ref } from 'vue'
import { array } from 'alga-js'
import AlertBox from './components/AlertBox.vue'
import AlertNotification from './components/AlertNotification.vue'

const alert = ref<boolean>(true)
const alerts = ref<any[]>([])
const alertHandler = () => {
  alerts.value.push({
    title: 'Test Title',
    description: 'Test Description',
    variant: array.shuffle(['success', 'info', 'warning', 'error'])[0]
  })
}
</script>

<template>
  <div class="container my-5">
    <AlertBox title="Alert 1" description="Description of Alert 1" class="mb-2" />
    <AlertBox title="Alert 2" description="Description of Alert 2" variant="success" class="mb-2" />
    <AlertBox title="Alert 3" description="Description of Alert 3" variant="info" class="mb-2" />
    <AlertBox title="Alert 4" description="Description of Alert 4" variant="warning" class="mb-2" />
    <AlertBox title="Alert 5" description="Description of Alert 5" variant="error" class="mb-2" />
    <AlertBox v-if="alert" title="Alert 5" description="Description of Alert 5" :action="true" @handler="alert = false" />

    <button type="button" class="button my-5" @click="alertHandler">Add Notification</button>
  </div>
  <Teleport to="body">
    <AlertNotification v-model="alerts" />
  </Teleport>
</template>

<style>
@use container;
@use form {
  field: button;
}
</style>
