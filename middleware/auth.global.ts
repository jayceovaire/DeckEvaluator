export default defineNuxtRouteMiddleware((to) => {
    const user = useState('supabase-user')
    const authInitialized = useState('supabase-auth-init')

    const publicPages = ['/login', '/signup']

    // Don't run until auth state is initialized
    if (!authInitialized.value) return

    if (!user.value && !publicPages.includes(to.path)) {
        return navigateTo('/login')
    }
})

