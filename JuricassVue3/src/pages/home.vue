<template>
  <div v-if="isLoading && !errors.length">
    <skeleton-loader />
  </div>
  <div v-else>
    <h2 v-if="query && searchResult !== {}">{{ $t('resultsFor') }} "{{ searchResult.query.query }}"</h2>
    <div v-if="searchResult && searchResult.results.length">
      <search-result-displayer v-for="result in searchResult.results" :key="result.id" :result="result" />
    </div>
    <div v-else>
      <h2>{{ $t('noResultFound') }}</h2>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { errors } from '@/controllers/appController'
import { search, searchResult, isLoading, query } from '@/controllers/homeController'
import SearchResultDisplayer from '@comps/SearchResultDisplayer.vue'
import SkeletonLoader from '@comps/common/SkeletonLoader.vue'

onMounted(async () => {
  await search()
})
</script>

<style></style>
