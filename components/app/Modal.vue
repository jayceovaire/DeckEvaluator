<template><UModal

    title="Choose the format of your import"
    :close="{
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full'
    }"
>
<UButton class="h-12 w-52 cursor-pointer"
         label="Import" color="primary"
>
  Import * Moxfield * Arkidekt
</UButton>
<template #body>
  <UForm class="w-full">
    <UTextarea

        placeholder="Paste your decklist here..."
        class="w-full"
        style="resize: none;"
        :rows="15"


    />
    <UButton type="submit" class="h-12 w-52 mt-5 cursor-pointer">Submit</UButton>
  </UForm>

</template>
</UModal>

</template>

<script setup lang="ts">
const testRef = ref('')
</script>