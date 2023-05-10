<template>
  <v-card v-for="repeat in repeats" class="skeleton">
    <v-skeleton-loader type="article, actions"></v-skeleton-loader>
  </v-card>
</template>

<script setup>
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
const props = defineProps({
  repeats: { type: Number, default: 10 }
})
</script>

<style lang="scss" scoped>
.skeleton {
  margin-bottom: 2rem;
}
</style>
