<template>
  <v-layout>
    <v-app-bar :elevation="2" class="bg-primary">
      <v-app-bar-title>{{ $t('appName') }}</v-app-bar-title>
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-text-field
        v-model="query"
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

    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
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
import { query, search } from '@/controllers/homeController'

let drawer = ref(false)
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
