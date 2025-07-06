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
      unchecked-icon="ic:baseline-wb-sunny"
      v-model="nightmodeValue"
      checked-icon="ic:round-mode-night"

  />
</template>

<style scoped>

</style>