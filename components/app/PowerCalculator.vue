<script setup lang="ts">
import { ref } from 'vue'

const list = ref('')
</script>

<template>
  <div class="flex flex-col gap-4 items-center w-full max-w-xl p-4  rounded-lg ">
    <UButton class="h-12 w-52">
      Import * Moxfield * Arkidekt
    </UButton>

    <UForm class="w-full">
      <UTextarea
          v-model="list"
          placeholder="Paste your decklist here..."
          class="w-full h-64"
          style="resize: none;"

      />
    </UForm>
  </div>
</template>

<style scoped>
</style>
