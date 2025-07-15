<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'
import {login} from "~/composables/auth";

const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
  password: v.pipe(v.string(), v.minLength(8, 'Must be at least 8 characters'))
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  email: '',
  password: ''
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    const { email, password } = event.data
    await login(email, password)

    toast.add({
      title: 'Logged in',
      description: 'Welcome!',
      color: 'primary'
    })
  } catch (error) {
    toast.add({
      title: 'Login failed',
      description: error.message || 'An error occurred.',
      color: 'error'
    })
  }
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>
    <p class="text-sm mt-2">Don't have an account? <ULink to="/signup">Sign up</ULink></p>

    <UButton type="submit">Submit
    </UButton>
  </UForm>
</template>

