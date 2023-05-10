<template>
  <div v-if="isLoading && !errors.length">
    <skeleton-loader />
  </div>
  <div v-else>
    <div v-if="searchResult && searchResult.results">
      <search-result-displayer v-for="result in searchResult.results" :key="result.id" :result="result" />
    </div>
    <div v-else>
      <h2>{{ $t('noResultFound') }}</h2>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { errors } from '@/controllers/appController'
import { search, searchResult, isLoading } from '@/controllers/homeController'
import SearchResultDisplayer from '@comps/SearchResultDisplayer.vue'
import SkeletonLoader from '@comps/common/SkeletonLoader.vue'

onMounted(async () => {
  await search()
})
</script>

<style></style>
