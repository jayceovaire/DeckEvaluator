<script setup lang="ts">

import {useCards} from "~/composables/useCards";
import {onLogoutClick} from "~/composables/auth";

const {cards, getCards} = useCards()

</script>

<template>
<div>
  This is the Index page
  <UButton
    @click="onLogoutClick()">Logout</UButton>
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