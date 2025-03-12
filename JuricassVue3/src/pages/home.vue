<template>
  <div v-if="isLoading && !errors.length">
    <skeleton-loader />
  </div>
  <div v-else>
    <h2 v-if="query && searchResults !== {}">{{ $t('resultsFor') }} "{{ searchResults.query.query }}"</h2>
    <div v-if="searchResults && searchResults.results.length">
      <search-result-displayer v-for="result in searchResults.results" :key="result.id" :result="result" />
    </div>
    <div v-else>
      <h2>{{ $t('noResultFound') }}</h2>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { errors } from '@/controllers/appController'
import { search, searchResults, isLoading, query } from '@/controllers/homeController.ts'
import { getHealth } from '@/controllers/healthController'
import SearchResultDisplayer from '@comps/SearchResultDisplayer.vue'
import SkeletonLoader from '@comps/common/SkeletonLoader.vue'

onMounted(async () => {
  await getHealth()
  await search()
  console.warn(searchResults.value)
})
</script>

<style></style>
