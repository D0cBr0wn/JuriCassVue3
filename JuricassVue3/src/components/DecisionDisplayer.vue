<template>
  <v-card v-if="decision.id" class="search-decision">
    <template v-slot:append>
      <v-btn icon="mdi-arrow-left" @click="router.push(`/`)"></v-btn>
      <v-btn icon="mdi-heart-outline"></v-btn>
    </template>
    <v-card-title
      >{{ decision.formattedDecisionDate }} - {{ decision.jurisdiction }} - {{ $t('pourvoiNumber') }}
      {{ decision.number }}</v-card-title
    >
    <v-card-subtitle
      >{{ decision.chamber }} <span v-if="decision.formation"> - {{ decision.formation }}</span></v-card-subtitle
    >
    <v-card-subtitle class="mb-3 text-secondary-light">{{ decision.publication.join(' - ') }}</v-card-subtitle>
    <v-card-text>
      <decision-text-displayer :zones="decision.zones" :text="decision.text" />
    </v-card-text>
  </v-card>
</template>

<script setup>
import DecisionTextDisplayer from '@comps/DecisionTextDisplayer.vue'
import router from '@/modules/router'
const props = defineProps({
  decision: { type: Object, default: () => {} }
})
</script>

<style lang="scss" scoped></style>
