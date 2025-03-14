<template>
  <div v-if="zones">
    <v-expansion-panels>
      <v-expansion-panel v-if="zones.introduction?.length">
        <v-expansion-panel-title class="bg-primary zone">Introduction</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div
            v-for="segment in zones.introduction"
            :key="segment.start"
          >
            {{ text.substring(segment.start, segment.end) }}
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel v-if="zones.expose?.length">
        <v-expansion-panel-title class="bg-primary zone">Exposé</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div
            v-for="segment in zones.expose"
            :key="segment.start"
          >
            {{ text.substring(segment.start, segment.end) }}
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel v-if="zones.moyens?.length">
        <v-expansion-panel-title class="bg-primary zone">Moyens</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div
            v-for="segment in zones.moyens"
            :key="segment.start"
          >
            {{ text.substring(segment.start, segment.end) }}
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel v-if="zones.motivations?.length">
        <v-expansion-panel-title class="bg-primary zone">Motivations</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div
            v-for="segment in zones.motivations"
            :key="segment.start"
          >
            {{ text.substring(segment.start, segment.end) }}
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel v-if="zones.dispositif?.length">
        <v-expansion-panel-title class="bg-primary zone">Dispositif</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div
            v-for="segment in zones.dispositif"
            :key="segment.start"
          >
            {{ text.substring(segment.start, segment.end) }}
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel v-if="zones.annexes?.length">
        <v-expansion-panel-title class="bg-primary zone">Annexes</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div
            v-for="segment in zones.annexes"
            :key="segment.start"
          >
            {{ text.substring(segment.start, segment.end) }}
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
  <div v-else>
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { Zone } from '@/data/model/Zone'

const props = defineProps({
  zones: { type: Object as () => Zone, default: () => undefined },
  text: { type: String, required: true }
})
</script>

<style lang="scss" scoped>
.zone {
  margin-top: 2rem;
}
</style>
