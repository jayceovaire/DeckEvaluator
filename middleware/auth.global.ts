// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to) => {
    const user = useState('supabase-user')
    const authInitialized = useState('supabase-auth-init')
    const publicPages = ['/login', '/signup']

    if (!authInitialized.value) {
        // Wait for auth to initialize before blocking or allowing
        return
    }

    if (!user.value && !publicPages.includes(to.path)) {
        return navigateTo('/login')
    }
})
