<template>
  <div v-if="isLoading && !errors.length">
    <skeleton-loader />
  </div>
  <div v-else>
    <decision-displayer :decision="decision" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { errors } from '@/controllers/appController'
import { getDecision, decision, isLoading } from '@/controllers/decisionController'
import SkeletonLoader from '@comps/common/SkeletonLoader.vue'
import DecisionDisplayer from '@comps/DecisionDisplayer.vue'
const route = useRoute()

onMounted(async () => {
  await getDecision(route.params.id)
})
</script>
