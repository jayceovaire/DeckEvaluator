import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig()

    const supabase = createClient(
        config.public.supabaseUrl,
        config.public.supabaseAnonKey
    )

    nuxtApp.provide('supabase', supabase)

    const user = useState('supabase-user', () => null)
    const authInitialized = useState('supabase-auth-init', () => false)

    // Wait for session before initializing state
    const { data } = await supabase.auth.getSession()
    user.value = data.session?.user ?? null
    authInitialized.value = true

    // Subscribe to auth state changes
    supabase.auth.onAuthStateChange((_event, session) => {
        user.value = session?.user ?? null
    })
})

