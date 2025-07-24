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
  <UForm :schema="deckSchema" :state="deckState" @submit="deckSubmit">
    <UTextarea
        v-if="importType === 'Clipboard'"
        v-model="deckState.decklist"
        placeholder="Paste your decklist here...
1 Blood Moon
38 Mountain
1 Magus of the Moon"
        class="w-full"
        style="resize: none;"
        :rows="15"
    />
    <UInput
        v-else
        v-model="deckState.decklist"
        placeholder="Paste the URL of your decklist here..."
        class="w-full"
    />
    <UButton type="submit" class="h-12 w-52 mt-5 cursor-pointer">
      Submit
    </UButton>
  </UForm>


</template>
</UModal>

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import * as v from 'valibot';
import { useToast } from '#imports' // if using Nuxt composables
import type { FormSubmitEvent } from '#ui/types' // optional if using Volar / TS

const importType = ref('Clipboard')
const toast = useToast()

const deckSchema = v.object({
  decklist: v.pipe(
      v.string([v.minLength(1, 'Decklist cannot be empty')]),
      v.transform((value) => {
        const lines = value.trim().split('\n')

        const parsed = lines
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .map(line => {
              const match = line.match(/^(\d+)\s+(.+)$/)
              if (!match) {
                throw new Error(`Invalid line format: "${line}"`)
              }

              return {
                quantity: Number(match[1]),
                name: match[2].trim()
              }
            })

        return parsed
      })
  )
})

type DeckSchema = v.InferOutput<typeof deckSchema>
const deckState = reactive({
  decklist: ''
})

async function deckSubmit(event: FormSubmitEvent<DeckSchema>) {
  try {
    const { decklist } = event.data

    // Success log
    console.log('Valid decklist:', decklist)
    console.log(decklist[0].quantity, decklist[0].name)
    toast.add({
      title: 'Deck Imported!',
      description: 'Your decklist was successfully imported!',
      color: 'primary'
    })
  } catch (error: any) {
    toast.add({
      title: 'Import failed',
      description: error.message || 'An error occurred.',
      color: 'error'
    })
  }
}
</script>
