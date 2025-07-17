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

export const signUp = async (email: string, password: string) => {
    const supabase = useSupabase();

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message);
    }

    const identity = data?.user?.identities?.[0];

    if (identity) {
        const identityCreatedAt = new Date(identity.created_at).getTime();
        const now = Date.now();
        const diffInSeconds = (now - identityCreatedAt) / 1000;

        // If the identity was created more than ~10 seconds ago, it's probably a duplicate attempt
        if (diffInSeconds > 10) {
            throw new Error(
                'This email is already registered. Please check your inbox to confirm it.'
            );
        }
    }

    return data;
};








