import { useSupabase } from '~/composables/useSupabase'

export const login = async (email: string, password: string) => {
    const supabase = useSupabase()

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        console.error('Login error:', error.message)
        throw error
    }

    console.log('Successfully logged in:', data)
    return data
}

export const logout = async () => {
    const supabase = useSupabase()
    const user = useState('supabase-user')

    const { error } = await supabase.auth.signOut()
    if (error) {
        console.error('Logout error:', error.message)
        throw error
    }

    // Update user state so the app knows you're logged out immediately
    user.value = null
}

export const onLogoutClick = async () => {
    try {
        await logout()
        await navigateTo('/login') // or '/login', wherever you want
    } catch (err) {
        console.error(err)
    }
}




