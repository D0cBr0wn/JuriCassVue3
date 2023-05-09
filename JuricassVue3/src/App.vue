<template>
  <v-layout>
    <v-app-bar :elevation="2">
      <v-app-bar-title>{{ $t('appName') }}</v-app-bar-title>
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <error-displayer />
      <v-container>
        <router-view> </router-view>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import ErrorDisplayer from '@comps/ErrorDisplayer.vue'
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
