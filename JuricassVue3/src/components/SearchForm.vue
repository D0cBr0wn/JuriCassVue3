<template>
  <v-form class="search-form">
    <v-text-field
      v-model="query"
      hide-details
      clearable
      density="compact "
      :label="$t('search')"
    ></v-text-field>

    <v-switch
      v-model="exact"
      hide-details
      color="secondary"
      :label="$t('exactSearch')"
    ></v-switch>

    <datePicker
      v-model="startDate"
      name="start-date"
      :label="$t('startDate')"
    ></datePicker>

    <datePicker
      v-model="endDate"
      name="end-date"
      :label="$t('endDate')"
    ></datePicker>

    <v-btn
      @click="handleSearch()"
      class="valid-search"
      block
      color="primary"
      append-icon="mdi-magnify"
      :loading="isLoading && !errors.length"
    >
      {{ $t('search') }}
    </v-btn>
  </v-form>
</template>

<script setup>
import { useHome } from '@/composables/homeComposable'
import { useApp } from '@/composables/appComposable'
import datePicker from '@comps/common/DatePicker.vue'

const { query, exact, startDate, endDate, handleSearch, isLoading } = useHome()
const { errors } = useApp()
</script>

<style lang="scss" scoped>
.valid-search {
  margin: 2rem 0;
}
</style>
