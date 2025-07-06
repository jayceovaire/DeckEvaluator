<script setup lang="ts">

const {data: tasks, error, status } = await useFetch('/api/tasks');


</script>

<template>
<div>
  This is the Index page
</div>
</template>

<style scoped>

</style>