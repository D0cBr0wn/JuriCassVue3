<template>
  <h1>home</h1>
  <button @click="$router.push('decision')">go</button>
  <v-chip>{{ status.status }}</v-chip>
  <h1>{{ $t('appName') }}</h1>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getHealth } from '@/controllers/healthController'

const status = ref({})
onMounted(async () => {
  status.value = await getHealth()
})
</script>
