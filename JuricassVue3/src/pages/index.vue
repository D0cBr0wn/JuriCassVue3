<template>
  <h1>home</h1>
  <button @click="$router.push('decision')">go</button>
  <div>
    <v-list>
      <v-list-item v-for="result in searchResult.results" :key="result.id">
        <v-list-item-title>{{ result.decisionDate }}</v-list-item-title>
        <v-list-item-subtitle>{{ result.jurisdiction }}</v-list-item-subtitle>
        <v-list-item-subtitle>
          {{ result.publication.join(' - ') }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>{{ result.formation }}</v-list-item-subtitle>
        <v-list-item-title class="text--primary">{{ result.solution }}</v-list-item-title>
        <v-list-item-subtitle>{{ result.summary }}</v-list-item-subtitle>
        <v-row>
          <v-col v-for="(theme, index) in result.themes" :key="index">
            <v-chip>{{ theme }}</v-chip>
          </v-col>
        </v-row>
        <v-btn :href="`decision/${result.id}`">Read</v-btn>
      </v-list-item>
    </v-list>
  </div>
  <v-alert type="error" text="This is an error bro !"></v-alert>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { search, searchResult } from '@/controllers/homeController'

const status = ref({})
onMounted(async () => {
  await search()
})
</script>
