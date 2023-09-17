<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(null)
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer color="" v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar color="orange">
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <i class="v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true">
          <svg class="v-icon__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
          </svg>
        </i>
      </v-app-bar-nav-icon>

      <v-app-bar-title>Loteria</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <slot/>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>