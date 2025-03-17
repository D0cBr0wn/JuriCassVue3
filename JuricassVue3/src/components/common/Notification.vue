<template>
  <v-snackbar
    v-model="show"
    :color="color"
    :timeout="timeout"
    location="top right"
  >
    {{ text }}
  </v-snackbar>
</template>

<script setup>
import { useNotification } from '@/composables/notificationComposable'

// Initialize the notification state
const { show, text, color, timeout } = useNotification()
</script>
