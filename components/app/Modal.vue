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
  <app-select-bar-power-calc v-model="importType"/>
  <UForm class="w-full">
    <UTextarea
        v-if="importType === 'Clipboard'"
        placeholder="Paste your decklist here...
1 Blood Moon
38 Mountains
1 Magus of the moon"
        class="w-full"
        style="resize: none;"
        :rows="15"
    />
    <UInput class="w-full"
            v-else
            placeholder="Paste the URL of your decklist here..."/>
    <UButton type="submit" class="h-12 w-52 mt-5 cursor-pointer">Submit</UButton>
  </UForm>

</template>
</UModal>

</template>

<script setup lang="ts">
const importType = ref('Clipboard')

</script>