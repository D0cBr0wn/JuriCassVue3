<template>
  <v-card v-if="result" class="search-result">
    <v-card-title
      >{{ result.formattedDecisionDate }} - {{ result.jurisdiction }} - {{ $t('pourvoiNumber') }}
      {{ result.number }}</v-card-title
    >
    <v-card-subtitle class="mb-3 text-secondary-light">{{ result.publication.join(' - ') }}</v-card-subtitle>
    <v-card-subtitle>{{ result.formation }}</v-card-subtitle>
    <v-card-text>{{ result.summary }}</v-card-text>
    <v-card-actions class="mt-4 justify-end">
      <v-btn @click="router.push(`/decision/${result.id}`)" variant="elevated" class="bg-primary">{{
        $t('readDecision')
      }}</v-btn>
      <v-btn icon="mdi-heart-outline"></v-btn>
    </v-card-actions>
    <v-chip-group class="themes">
      <v-chip v-for="theme in result.themes" :key="theme" variant="outlined" class="text-secondary-light">{{
        theme
      }}</v-chip>
    </v-chip-group>
  </v-card>
</template>

<script setup>
import router from '@/modules/router'
const props = defineProps({
  result: { type: Object, default: () => {} }
})
</script>

<style lang="scss" scoped>
.search-result {
  margin-bottom: 2rem;
}

.themes {
  padding: 1rem;
}
</style>
