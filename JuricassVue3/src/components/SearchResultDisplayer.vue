<template>
  <v-card v-if="result" class="search-result">
    <v-card-title>{{ result.decisionDate }}</v-card-title>
    <v-card-subtitle>{{ result.jurisdiction }}</v-card-subtitle>
    <v-card-subtitle class="mb-3 text-secondary-light">{{ result.publication.join(' - ') }}</v-card-subtitle>
    <v-card-subtitle>{{ result.formation }}</v-card-subtitle>
    <v-card-text>{{ result.summary }}</v-card-text>
    <v-card-actions class="mt-4">
      <router-link :to="`/decision/${result.id}`">
        <v-btn variant="elevated" class="bg-primary" size="large">{{ $t('read') }}</v-btn>
      </router-link>
    </v-card-actions>
    <v-chip-group class="themes">
      <v-chip v-for="theme in result.themes" :key="theme" variant="outlined" class="text-secondary-light">{{
        theme
      }}</v-chip>
    </v-chip-group>
  </v-card>
</template>

<script setup>
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
