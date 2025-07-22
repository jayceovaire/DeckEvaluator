<script setup lang="ts">
const items = ref(['Clipboard', 'URL'])
const modelValue = defineModel<string>()

</script>

<template>
<USelect
v-model="modelValue"
  :items="items"
  class="w-48 mb-5"/>
</template>

<style scoped>

</style>