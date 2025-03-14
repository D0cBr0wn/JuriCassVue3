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
import { useApp } from '@/composables/appComposable'
import { useDecision } from '@/composables/decisionComposable'
import SkeletonLoader from '@comps/common/SkeletonLoader.vue'
import DecisionDisplayer from '@comps/DecisionDisplayer.vue'

const route = useRoute()
const { errors } = useApp()
const { decision, isLoading, getDecision } = useDecision()

onMounted(async () => {
  await getDecision(route.params.id)
})
</script>
