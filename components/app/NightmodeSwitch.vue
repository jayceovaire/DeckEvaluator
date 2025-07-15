<script setup lang="ts">

const colorMode = useColorMode()

const nightmodeValue = computed({
  get: () => colorMode.value === 'dark',
  set: (val: boolean) => {
    colorMode.preference = val ? 'dark' : 'light'
  }
})
</script>

<template>
  <USwitch
      v-model="nightmodeValue"
      unchecked-icon="ic:baseline-wb-sunny"
      checked-icon="ic:round-mode-night"

  />
</template>

<style scoped>

</style>