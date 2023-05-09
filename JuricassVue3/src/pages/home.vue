<template>
  <div v-if="isLoading">
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

  <!-- <v-alert type="error" text="This is an error bro !"></v-alert> -->
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { search, searchResult, isLoading } from '@/controllers/homeController'
import SearchResultDisplayer from '@comps/SearchResultDisplayer.vue'
import SkeletonLoader from '@comps/common/SkeletonLoader.vue'

const status = ref({})
onMounted(async () => {
  await search()
})
</script>
