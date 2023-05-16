<template>
  <v-layout>
    <v-app-bar :elevation="2" class="bg-primary">
      <v-app-bar-title>{{ $t('appName') }}</v-app-bar-title>
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-text-field
        v-model="quickQuery"
        rounded
        flat
        clearable
        variant="solo"
        hide-details
        density="compact "
        :label="$t('quickSearch')"
      ></v-text-field>
      <v-btn icon @click="search()">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :width="280" class="nav">
      <search-form />
      <hr />
      <v-list>
        <v-list-item title="Navigation will be there"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col class="v-col-lg-10">
            <error-displayer />
            <router-view> </router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue'
import ErrorDisplayer from '@comps/common/ErrorDisplayer.vue'
import { quickQuery, search } from '@/controllers/homeController'
import SearchForm from '@comps/SearchForm.vue'

let drawer = ref(false)
</script>

<style lang="scss">
.nav {
  padding: 0.5rem;
}
</style>
