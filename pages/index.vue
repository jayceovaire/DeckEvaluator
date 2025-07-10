<script setup lang="ts">

import {useCards} from "~/composables/useCards";
import ClerkSignIn from "~/components/app/ClerkSignIn.vue";

const {cards, getCards} = useCards()



</script>

<template>
<div>
  This is the Index page
</div>
  <UButton
    @click="getCards">
    Get Card Names
  </UButton>
  <ul>
    <li v-for="card in cards" :key="card.id">{{ card.name }}</li>
  </ul>
</template>

<style scoped>

</style>