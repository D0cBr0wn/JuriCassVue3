<template>
  <div v-if="zones">
    <v-expansion-panels>
      <v-expansion-panel v-for="zone in zones">
        <v-expansion-panel-title class="bg-primary zone">{{ zone.name }}</v-expansion-panel-title>
        <v-expansion-panel-text>{{ text.substring(zone.start, zone.end) }}</v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
  <div v-else>
    {{ text }}
  </div>
</template>

<script setup>
const props = defineProps({
  zones: { type: Object, default: () => undefined },
  text: { type: String, required: true }
})
</script>

<style lang="scss" scoped>
.zone {
  margin-top: 2rem;
}
</style>
