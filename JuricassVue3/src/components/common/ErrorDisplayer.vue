<template>
  <div class="error-displayer">
    <v-alert v-for="error in errors" class="error-message" icon="mdi-skull" type="error" elevation="5" closable="true">
      <v-alert-title>{{ $t('anErrorOccured') }}</v-alert-title>
      {{ error.message }}
    </v-alert>
  </div>
</template>

<script setup>
import { errors } from '@/controllers/appController'
</script>

<style lang="scss" scoped>
.error-message {
  margin-bottom: 2rem;
}
</style>

<style lang="scss">
// .error-displayer {
//   position: absolute;
//   top: 0;
//   right: 0;
// }
</style>
